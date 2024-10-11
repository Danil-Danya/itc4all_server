import ApiError from '../exeptions/api.error.js';

import ProfilesModel from '../models/profile.model.js';
import emailService from './email.service.js';

import { getOneUser } from '../repositories/user.repository.js';
import { getOneMentor } from '../repositories/mentors.repository.js'
import { createZoomSession, getAccessToken } from '../api/axios.js';

import {
    createZoomSessions,
    deleteZoomSession,
    getOneZoomSession,
    getAllZoomSessions
} from '../repositories/zoomSessions.repository.js'

import { v4 as uuidv4 } from 'uuid';  

class ZoomSessionsService {
    async createZoomSessions (user, session) {
        const userId = user.id;
        const fullUser = await getOneUser({ id: userId }, [{ model: ProfilesModel, as: 'profile' }]);

        const mentorId = session.mentorId;
        const fullMentor = await getOneMentor(mentorId);

        const userFirstName = fullUser.profile.first_name;
        const userLastName = fullUser.profile.last_name;

        const mentorFirstName = fullMentor.first_name;
        const mentorLastName = fullMentor.last_name;

        const startTime = session.startTime;
        
        const topic = `${mentorFirstName} ${mentorLastName} ${startTime.split('T')[0]}`;
        const passord = await uuidv4();

        if (!topic) {
            throw ApiError.BadRequest('This topic session not bee generate');
        }

        session.topic = topic;
        session.passord = passord;

        const sessions = await createZoomSession(session);
        const sessionsData = {
            name: sessions.topic,
            start_session_link: sessions.start_url,
            join_session_link: sessions.join_url,
            start_date_and_time: sessions.start_time,
            unical_zoom_session_id: sessions.id,
            zoom_session_password: sessions.password,
            user_name: `${userFirstName} ${userLastName}`,
            mentor_name: `${mentorFirstName} ${mentorLastName}`,
            mentor_email: fullMentor.email,
            user_email: fullUser.email,
            user_id: fullUser.id,
            mentor_id: fullMentor.id
        }

        const createdZoomSession = await createZoomSessions(sessionsData);

        await emailService.sendZoomSessionLinkToMentor(fullMentor.email, sessionsData.start_session_link);
        await emailService.sendZoomSessionLinkToUser(fullUser.email, sessionsData.join_session_link);

        return createdZoomSession;
    }

    async deleteZoomSession (id) {
        const deletedZoomSession = await deleteZoomSession(id);
        return deletedZoomSession;
    }

    async getOneZoomSession (id) {
        const session = await getOneZoomSession(id);
        return session;
    }

    async getAllZoomSessions (pagination, user) {
        const { limit, page } = pagination;
        const offset = page * limit - limit;

        //const include = 

        const sessions = await getAllZoomSessions({ limit, offset });
        return sessions;
    }
}

export default new ZoomSessionsService();
import ApiError from '../exeptions/api.error.js';

import { getOneUser } from '../repositories/user.repository.js';
import { createZoomSession, getAccessToken } from '../api/axios.js';

import { v4 as uuidv4 } from 'uuid';  

class ZoomSessionsService {
    async createZoomSessions (user, session) {
        const userId = user.id;
        const fullUser = await getOneUser({ id: userId });
        
        const topic = `${fullUser.first_name} ${fullUser.last_name} - ${session.mentor} ${session.start_time}`;
        const passord = await uuidv4();

        if (!topic) {
            throw ApiError.BadRequest('This topic session not bee generate');
        }

        session.topic = topic;
        session.passord = passord;

        const sessions = await createZoomSession(session);
        return sessions;
    }
}

export default new ZoomSessionsService();
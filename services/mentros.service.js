import ApiError from '../exeptions/api.error.js';

import { createMentorSocial } from '../repositories/mentorsSocial.repository.js';
import { createMentorPreview } from '../repositories/mentorsPreview.repository.js';

import MentrosPreviewsModel from '../models/mentorsPreview.model.js';
import MentrosSocialsModel from '../models/mentorsSocial.model.js';

import { 
    createMentor,
    deleteMentor,
    editeMentor,
    updateMentor,
    getAllMentros,
    getOneMentor,
} from '../repositories/mentors.repository.js';
import { Op } from 'sequelize';

class MentorService {
    constructor () {
        this.include = [
            { model: MentrosPreviewsModel, as: 'mentors_previews' },
            { model: MentrosSocialsModel, as: 'mentros_social' }
        ]
    }

    async createMentor (data, dataSocials, path) {
        const newMentor = await createMentor(data);
        const id = newMentor.id;

        const newMentorSocials = await createMentorSocial(id, dataSocials);
        const newMentorPreview = await createMentorPreview(id, path);

        const fullMentor = {
            mentor: newMentor,
            mentor_socials: newMentorSocials,
            mentor_preview: newMentorPreview
        }

        return fullMentor;
    }

    async deleteMentor (id) {
        const deletedMentor = await deleteMentor(id, this.include);
        return { 
            message: 'Mentor has been deleted' 
        };
    }

    async updateMentor (id, mentor) {
        const updatedMentor = await updateMentor(id, mentor);
        return updatedMentor;
    }

    async editeMentor (id, data) {
        const editedMentor = await editeMentor(id, data)
        return editedMentor;
    }

    async getAllMentros (pagination, filters, whereClause={}) {
        const { page, limit } = pagination;
        const { ordering, whereField, search } = filters;

        if (whereField && where !== undefined) {
            whereClause[whereField] = where;
        }

        const offset = page * limit - limit;
        const order = ordering ? [[ordering, 'ASC']] : [];

        if (search) {
            whereClause.first_name = { [Op.like]: `%${search}%` };
        }

        const mentors = await getAllMentros({ limit, offset }, whereClause, order, this.include);
        return mentors;
    }

    async getOneMentor (id) {
        const mentor = await getOneMentor(id, this.include);
        return mentor;
    }
}

export default new MentorService();
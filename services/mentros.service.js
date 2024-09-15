import ApiError from '../exeptions/api.error.js';

import { 
    createMentor,
    deleteMentor,
    editeMentor,
    updateMentor,
    getAllMentros,
    getOneMentor
} from '../repositories/mentors.repository.js';

class MentorService {
    async create (data) {
        //const createdU
    }

    async delete (id) {

    }

    async update(id, mentor) {

    }

    async edite(id, data) {

    }

    async getAll (filters, pagination) {

    }

    async getOne (id) {

    }
}

export default new MentorService()
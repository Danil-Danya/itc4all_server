import ApiError from "../exeptions/api.error.js";
import mentrosService from "../services/mentros.service.js";

class MentorController {
    async createMentor (req, res, next) {
        try {
            const { email, first_name, last_name, speciality, experience } = req.body;
            const newMentor = await mentrosService.create({ email, first_name, last_name, speciality, experience });

            return res.json(newMentor);
        }
        catch (error) {
            next(error);
        }
    }

    async deleteMentor(req, res, next) {
        try {
            const id = req.params.id;
            const deletedMentor = await mentrosService.delete(id);

            return res.json({ deletedMentor });
        }
        catch (error) {
            next(error);
        }
    }

    async editeMentor(req, res, next) {
        try {
            const id = req.params.id;
            const data = req.body;

            const editedMentor = await mentrosService.edite(id, data);
            return res.json(editedMentor);
        }
        catch (error) {
            next(error);
        }
    }

    async updateMentor(req, res, next) {
        try {
            const id = req.params.id;
            const data = req.body;

            const updatedMentor = await mentrosService.edite(id, data);
            return res.json(updatedMentor);
        }
        catch (error) {
            next(error);
        }
    }

    async getAllMentros(req, res, next) {
        try {
            const page = req.query.page || 1;
            const limit = req.query.limit || 10;
            const search = req.query.search;

            const ordering = req.query.oredering;
            const where = req.query.where;

            const orederingType = req.query.oredering_type;
            const whereFields = req.query.whereFields;

            const pagination = { page, limit };
            const filters = { ordering, orederingType, where, whereFields, search };

            const mentors = await mentrosService.getAll(pagination, filters);
            return res.json(mentors);
        }
        catch (error) {
            next(error);
        }
    }

    async getOneMentor(req, res, next) {
        try {
            const id = req.params.id;
            const mentor = await mentrosService.getOne(id);

            return res.json(mentor);
        }
        catch (error) {
            next(error);
        }
    }
}

export default new MentorController();
//import ApiError from "../exeptions/api.error.js";
import mentrosService from "../services/mentros.service.js";

class MentorController {
    async createMentor (req, res, next) {
        try {
            const email = req.body.email;
            const first_name = req.body.first_name;
            const last_name = req.body.last_name;
            const speciality = req.body.speciality;
            const experience = req.body.experience;
            const biography = req.body.biography;

            const instagram = req.body.instagram;
            const telegram = req.body.telegram;
            const gmail = req.body.gmail;
            const github = req.body.github;
            const linkedin = req.body.linkedin;
            
            const path = req.file ? req.file.filename : null;

            const mentor = { email, first_name, last_name, speciality, biography, experience };
            const social = { instagram, github, telegram, gmail, linkedin };
            
            const newMentor = await mentrosService.createMentor(mentor, social, path);

            return res.json(newMentor);
        }
        catch (error) {
            next(error);
        }
    }

    async deleteMentor(req, res, next) {
        try {
            const id = req.params.id;
            const deletedMentor = await mentrosService.deleteMentor(id);

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

            const editedMentor = await mentrosService.editeMentor(id, data);
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

            const updatedMentor = await mentrosService.updateMentor(id, data);
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

            const whereFields = req.query.whereFields;

            const pagination = { page, limit };
            const filters = { ordering, where, whereFields, search };

            const mentors = await mentrosService.getAllMentros(pagination, filters);
            return res.json(mentors);
        }
        catch (error) {
            next(error);
        }
    }

    async getOneMentor(req, res, next) {
        try {
            const id = req.params.id;
            const mentor = await mentrosService.getOneMentor(id);

            return res.json(mentor);
        }
        catch (error) {
            next(error);
        }
    }
}

export default new MentorController();
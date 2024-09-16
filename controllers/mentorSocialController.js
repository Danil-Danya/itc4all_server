import mentorSocialService from "../services/mentorSocial.service.js";

class MentorSocialsController {
    async editeSocial (req, res, next) {
        try {
            const { instagram, telegram, gmail, github, linkedin } = req.body;
            const data = { instagram, telegram, gmail, github, linkedin };

            const id = req.params.id;

            const editedMentorSocial = mentorSocialService.editeMentorSocial(id, data);
            return res.json(editedMentorSocial);
        }
        catch (error) {
            next(error);
        }
    }

    async updateSocial (req, res, next) {
        try {
            const { instagram, telegram, gmail, github, linkedin } = req.body;
            const data = { instagram, telegram, gmail, github, linkedin };

            const id = req.params.id;

            const updatedMentorSocial = mentorSocialService.updateMentorSocial(id, data);
            return res.json(updatedMentorSocial);
        }
        catch (error) {
            next(error);
        }
    }
}

export default new MentorSocialsController();
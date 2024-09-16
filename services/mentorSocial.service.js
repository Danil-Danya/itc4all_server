import ApiError from "../exeptions/api.error.js";
import { editeMentorSocial, updateMentorSocial } from "../repositories/mentorsSocial.repository.js";

class MentorSocialService {
    async editeMentorSocial (id, data) {
        const editedMentorSocial = await editeMentorSocial(id, data);
        if (!editedMentorSocial) {
            throw ApiError.BadRequest('This social does not edit');
        }

        return editeMentorSociall;
    }

    async updateMentorSocial (id, mentor) {
        const updatedMentorSocial = await updateMentorSocial(id, mentor);
        if (!updatedMentorSocial) {
            throw ApiError.BadRequest('This social does not edit');
        }

        return updatedMentorSocial;
    }
}

export default new MentorSocialService();
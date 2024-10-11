import ApiError from '../exeptions/api.error.js';
import MentorSocialModel from '../models/mentorsSocial.model.js';

const createMentorSocial = async (mentors_social_id, data) => {
    let fullData = { mentors_social_id };
    if (data) {
        fullData = { mentors_social_id, ...data };
    }

    const newMentor = await MentorSocialModel.create(fullData);
    if (!newMentor) {
        throw ApiError.BadRequest('This mentor does not be created');
    }

    return newMentor;
}

const getMentorSocial = async (id) => {
    const mentorSocials = await MentorSocialModel.findOne({ where: { mentors_social_id: id } });
    if (!mentorSocials) {
        throw ApiError.BadRequest('This mentor not found');
    }

    return mentorSocials;
}

const editeMentorSocial = async (id, data) => {
    const mentorSocials = await MentorSocialModel.findOne({ where: { mentors_social_id: id } });
    if (!mentorSocials) {
        throw ApiError.BadRequest('This mentor not found');
    }

    Object.keys(data).forEach((key) => {
        if (mentorSocials[key] !== undefined) {
            mentorSocials[key] = data[key];
        }
    });

    const editedSocialMentor = await mentorSocials.save();
    return editedSocialMentor;
}

const updateMentorSocial = async (id, data) => {
    const mentorSocials = await MentorSocialModel.findOne({ where: { mentors_social_id: id } });
    if (!mentorSocials) {
        throw ApiError.BadRequest('This mentor not found');
    }

    const updatedSocialMentor = await mentorSocials.update(data);
    return updatedSocialMentor;
}

export {
    createMentorSocial,
    getMentorSocial,
    editeMentorSocial,
    updateMentorSocial
}
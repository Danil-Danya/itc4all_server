import ApiError from '../exeptions/api.error.js';
import MentorPreviewModel from '../models/mentorsPreview.model.js';

const createMentorPreview = async (mentors_previevs_id, path) => {
    if (!path) {
        path = 'default_mentor.png';
    }

    const newMentorPreview = await MentorPreviewModel.create({mentors_previevs_id, path});
    if (!newMentorPreview) {
        throw ApiError.BadRequest('This preview does not be created');
    }

    return newMentorPreview;
}

const getMentorPreview = async (mentors_previevs_id) => {
    const mentorPreview = await MentorPreviewModel.findOne({ where: mentors_previevs_id });
    if (!mentorPreview) {
        throw ApiError.BadRequest('This preview not found');
    }

    return mentorPreview;
}

const editeMentorPreview = async (mentors_previevs_id, data) => {
    const mentorPreview = await MentorPreviewModel.findOne({ where: mentors_previevs_id });
    if (!mentorPreview) {
        throw ApiError.BadRequest('This preview not found');
    }

    Object.keys(data).forEach((key) => {
        if (mentorPreview[key] !== undefined) {
            mentorPreview[key] = data[key];
        }
    });

    const editedMentorPreview = await mentor.save();
    return editedMentorPreview;
}

const updateMentorPreview = async (mentors_previevs_id, data) => {
    const mentorPreview = await MentorPreviewModel.findOne({ where: mentors_previevs_id });
    if (!mentorPreview) {
        throw ApiError.BadRequest('This preview not found');
    }

    const updatedMentorPreview = await MentorPreviewModel.update(data);
    return updatedMentorPreview;
}

export {
    createMentorPreview,
    getMentorPreview,
    editeMentorPreview,
    updateMentorPreview
}
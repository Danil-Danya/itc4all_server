import ApiError from "../exeptions/api.error.js";
import MentrosModel from "../models/mentors.model.js";

const createMentor = async (data) => {
    const createdMentor = await MentrosModel.create(data);
    if (!createdMentor) {
        return ApiError.BadRequest('The mentor does not be created')
    }

    return createdMentor;
}

const deleteMentor = async (id, include=[]) => {
    const mentor = await MentrosModel.findOne({ where: { id }, include });
    if (!mentor) {
        return ApiError.BadRequest('The mentor not found');
    }

    const deletedMentor = await mentor.destroy();
    if (deletedMentor) {
        return ApiError.BadRequest('The mentor does not be deleted');
    }

    return deletedMentor;
}

const editeMentor = async (id, data) => {
    if (!id || !data) {
        return ApiError.BadRequest('Id and data fields is required');
    }

    const mentor = await MentrosModel.findOne({ where: { id } });
    if (!mentor) {
        return ApiError.BadRequest('The mentor not found');
    }

    Object.keys(data).forEach((key) => {
        if (mentor[key] !== undefined) {
            mentor[key] = data[key];
        }
    });

    const editedMentor = await mentor.save();
    return editedMentor;
}

const updateMentor = async (id, data) => {
    if (!id || !data) {
        return ApiError.BadRequest('Id and data fields is required');
    }

    const mentor = await MentrosModel.findOne({ where: { id } });
    if (!mentor) {
        return ApiError.BadRequest('The mentor not found');
    }

    const updatedMentor = await mentor.update(data);
    return updatedMentor;
}

const getAllMentros = async (pagination, where={}, order={}, include=[]) => {
    const { limit, offset } = pagination;
    const mentors = await MentrosModel.findAndCountAll({ limit, offset, include, order, where });

    return mentors;
}

const getOneMentor = async (id, include=[]) => {
    const mentor = await MentrosModel.findOne({ where: { id }, include });
    if (!mentor) {
        return ApiError.BadRequest('The mentor not found');
    }

    return mentor;
}

export {
    createMentor,
    deleteMentor,
    editeMentor,
    updateMentor,
    getAllMentros,
    getOneMentor
}
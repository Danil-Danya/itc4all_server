import ApiError from "../exeptions/api.error.js"
import RequestsModel from "../models/requests.model.js"

const createRequest = async (phone, name, message) => {
    const newRequest = await RequestsModel.create({ phone, name, message });
    if (!newRequest) {
        throw ApiError.BadRequest('This request does not be created');
    }

    return newRequest;
}

const getOneRequest = async (id) => {
    const request = await RequestsModel.findOne({ where: { id } });
    if (!request) {
        throw ApiError.BadRequest('This request is not found');
    }

    return request
}

const deleteRequest = async (id) => {
    const request = await RequestsModel.findOne({ where: { id } });
    if (!request) {
        throw ApiError.BadRequest('This request is not found');
    }

    const deletedRequest = await request.destroy();
    if (!deleteRequest) {
        throw ApiError.BadRequest('This request is not deleted');
    }

    return deletedRequest;
}

export {
    createRequest,
    getOneRequest,
    deleteRequest
}
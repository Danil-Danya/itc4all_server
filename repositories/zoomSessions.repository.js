import ApiError from "../exeptions/api.error.js";
import ZoomSessionsModel from "../models/zoomSessions.model.js";

const createZoomSessions = async (data) => {
    const createdZoomSession = await ZoomSessionsModel.create(data);
    if (!createdZoomSession) {
        throw ApiError.BadRequest('This session not be created');
    }

    return createdZoomSession;
}

const deleteZoomSession = async (id) => {
    const zoomSession = await ZoomSessionsModel.findOne({ where: { id } });
    if (!zoomSession) {
        throw ApiError.BadRequest('This session not fined');
    }

    await zoomSession.destroy();

    return {
        message: 'Zomm session has been deleted'
    }
}

const getOneZoomSession = async (id) => {
    const zoomSession = await ZoomSessionsModel.findOne({ where: { id } });
    if (!zoomSession) {
        throw ApiError.BadRequest('This session not fined');
    }

    return zoomSession
}

const getAllZoomSessions = async (pagination) => {
    const { limit, offset } = pagination;
    const sessions = await ZoomSessionsModel.findAndCountAll({ limit, offset });

    return sessions;
}


export {
    createZoomSessions,
    getAllZoomSessions,
    getOneZoomSession,
    deleteZoomSession
}
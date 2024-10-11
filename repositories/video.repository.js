import ApiError from "../exeptions/api.error.js";
import VideoModel from '../models/videos.model.js';

const createVideo = async (data) => {
    const createdVideo = await VideoModel.create(data);
    if (!createVideo) {
        throw ApiError.BadRequest('This video not be created')
    }

    return createdVideo;
}

const deleteVideo = async (id) => {
    const video = await VideoModel.findOne({ where: { id } });
    if (!video) {
        throw ApiError.BadRequest('Video is not fined');
    }

    await video.destroy();
    return {
        message: 'This video has been deleted'
    }
}

const getOneVideo = async (id) => {
    const video = await VideoModel.findOne({ where: { id } });
    if (!video) {
        throw ApiError.BadRequest('Video is not fined');
    }

    return video
}

const getAllVideo = async (offset, limit) => {
    const videos = await VideoModel.findAndCountAll(offset, limit);
    return videos;
}

export {
    createVideo,
    deleteVideo,
    getAllVideo,
    getOneVideo
}
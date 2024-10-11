import {
    createVideo,
    deleteVideo,
    getAllVideo,
    getOneVideo
} from '../repositories/video.repository.js';

class VideoService {
    async createVideo (data) {
        const createdVideo = await createVideo(data);
        return createdVideo;
    }

    async deleteVideo (id) {
        const deletedVideo = await deleteVideo(id);
        return deletedVideo; 
    }

    async getOneVideo (id) {
        const video = await getOneVideo(id);
        return video;
    }

    async getAllVideo (pagination) {

    }
}

export default new VideoService();
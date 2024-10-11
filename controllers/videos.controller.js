import videoService from "../services/video.service.js";

import path from "path";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class VideosController {
    async createVideo (req, res, next) {
        try {
            const { course_id } = req.params.course_id;
            const { name } = req.body;

            const path = req.file.filename;
            const time = req.file.duration || '30m';
            

            const data = { name, path, time, course_id };

            const createdVideo = await videoService.createVideo(data);
            return res.json(createdVideo);
        }
        catch (error) {
            next(error);
        }
    }

    async deleteVideo(req, res, next) {
        try {
            const { id } = req.params;

            const deletedVideo = await videoService.deleteVideo(id);

            return deletedVideo;
        }
        catch (error) {
            next(error);
        }
    }

    async getAllVideo(req, res, next) {
        try {

        }
        catch (error) {
            next(error);
        }
    }

    async getOneVideo(req, res, next) {
        try {
            const { id } = req.params;
            const video = await videoService.getOneVideo(id);       

            const videoFilePath = path.join(__dirname, '..', 'uploads', 'videos', video.path);
            
            return res.sendFile(videoFilePath);
        }
        catch (error) {
            next(error);
        }
    }
}

export default new VideosController;
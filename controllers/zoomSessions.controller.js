import zoomSessionsService from "../services/zoomSessions.service.js";

class ZoomSessionsController {
    async createZoomSessions (req, res, next) {
        try {
            const user = req.user;

            const startTime = req.body.start_time;
            const duration = req.body.duration;
            const mentor = req.body.mentor;

            const session = { startTime, duration, mentor };

            const newZommSession = await zoomSessionsService.createZoomSessions(user, session);

            return res.json(newZommSession);
        }
        catch (error) {
            next(error);
        }
    }

    async deleteZoomSessions(req, res, next) {
        try {

        }
        catch (error) {
            next(error);
        }
    }

    async getAllZoomSessions(req, res, next) {
        try {

        }
        catch (error) {
            next(error);
        }
    }

    async getOneZoomSessions(req, res, next) {
        try {

        }
        catch (error) {
            next(error);
        }
    }
}

export default new ZoomSessionsController();
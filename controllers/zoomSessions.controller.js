import zoomSessionsService from "../services/zoomSessions.service.js";

class ZoomSessionsController {
    async createZoomSessions (req, res, next) {
        try {
            const user = req.user;

            const startTime = req.body.start_time;
            const duration = req.body.duration;
            const mentorId = req.body.mentor_id;
            
            const session = { startTime, duration, mentorId };

            const newZommSession = await zoomSessionsService.createZoomSessions(user, session);

            return res.json(newZommSession);
        }
        catch (error) {
            next(error);
        }
    }

    async deleteZoomSessions(req, res, next) {
        try {
            const { id } = req.params;
            const deletedZoomSession = await zoomSessionsService.deleteZoomSession(id);

            return res.json(deletedZoomSession);
        }
        catch (error) {
            next(error);
        }
    }

    async getAllZoomSessions(req, res, next) {
        try {
            const page = req.query.page || 1;
            const limit = req.query.limit || 10;

            const sessions = await zoomSessionsService.getAllZoomSessions({ page, limit });
            return res.json(sessions);
        }
        catch (error) {
            next(error);
        }
    }

    async getOneZoomSessions(req, res, next) {
        try {
            const { id } = req.params;
            const session = await zoomSessionsService.getOneZoomSession(id);

            return res.json(session);
        }
        catch (error) {
            next(error);
        }
    }
}

export default new ZoomSessionsController();
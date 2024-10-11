import eventService from "../services/event.service.js";

class EventsController {
    async createEvent (req, res, next) {
        try {
            const { title, content } = req.body;
            const images = req.files;

            const views = 0; // значение по дефолту

            const createdEvent = await eventService.createEvent(title, content, views, images);

            return res.json(createdEvent);
        }
        catch (error) {
            next(error)
        }
    }

    async deleteEvent (req, res, next) {
        try {
            const { id } = req.params;

            const deletedEvent = await eventService.deleteEvent(id);
            return res.json(deletedEvent);
        }
        catch (error) {
            next(error)
        }
    }

    async updateEvent (req, res, next) {
        try {
            const { title, content, views } = req.body;

            const { id } = req.params;
            const { changePreview } = req.query;

            const images = req.files;

            const updatedEvent = await eventService.updateEvent(id, title, views, content, images, changePreview);
            return res.json(updatedEvent);
        }
        catch (error) {
            next(error)
        }
    }

    async editeEvent (req, res, next) {
        try {
            const { title, content, views } = req.body;

            const { id } = req.params;
            const { changePreview } = req.query;

            const images = req.files;

            const editedEvent = await eventService.editeEvent(id, title, views, content, images, changePreview);
            return res.json(editedEvent);
        }
        catch (error) {
            next(error)
        }
    }

    async getOneEvent(req, res, next) {
        try {
            const { name, id } = req.query;

            if (id && name) name = null;

            const event = await eventService.getOneEvent(id, name);
            return res.json(event);
        }
        catch (error) {
            next(error)
        }
    }

    async getAllEvents(req, res, next) {
        try {
            const limit = req.query.limit || 10;
            const page = req.query.page || 0;

            const where = req.query.where;
            const whereField = req.query.whereField;

            const ordering = req.query.ordering;
            const orderingType = req.query.orderingType;

            const search = req.query.search;
            const execlude = req.query.execlude; // boolean

            const pagination = { limit, page };
            const filters = { where, whereField, ordering, orderingType, search, execlude }

            const events = await eventService.getAllEvent(pagination, filters);
            return res.json(events);
        }
        catch (error) {
            next(error)
        }
    }
}

export default new EventsController;
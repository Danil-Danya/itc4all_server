import ApiError from "../exeptions/api.error.js";
import EventsModel from '../models/events.model.js';

const createEvent = async (data) => {
    const createdEvent = await EventsModel.create(data);
    if (!createdEvent) {
        throw ApiError.BadRequest('This event not be created');
    }

    return createdEvent;
}

const deleteEvent = async (id) => {
    const event = await EventsModel.findOne({ where: { id } });
    if (!event) {
        throw ApiError.BadRequest('This event is not fined');
    }

    await event.destroy();
    return {
        message: 'Event has been destroyed'
    }
}

const updateEvent = async (id, data) => {
    const event = await EventsModel.findOne({ where: { id } });
    if (!event) {
        throw ApiError.BadRequest('This event is not fined');
    }

    const updatedEvent = await event.update(data);
    if (!updatedEvent) {
        throw ApiError.BadRequest('This event not be updeted');
    }

    return updatedEvent;
}

const editeEvent = async (id, data) => {
    const event = await EventsModel.findOne({ where: { id } });
    if (!event) {
        throw ApiError.BadRequest('This event is not fined');
    }

    Object.keys(data).forEach((key) => {
        if (event[key] !== undefined) {
            event[key] = data[key];
        }
    });

    const editedEvent = await event.save();
    return editedEvent;
}

const getOneEvent = async (id, name) => {
    let event;

    if (id) event = await EventsModel.findOne({ where: { id } });

    if (name) event = await EventsModel.findOne({ where: { title: name } });

    if (!event) {
        throw ApiError.BadRequest('This event is not defined');
    }

    return event;

}

const getAllEvent = async (pagination, where, order, exclude=[]) => {
    const { limit, offset } = pagination;
    const events = await EventsModel.findAndCountAll({ limit, offset, where, order, attributes: { exclude } });

    return events;
}

export {
    createEvent,
    deleteEvent,
    updateEvent,
    editeEvent,
    getOneEvent,
    getAllEvent
}
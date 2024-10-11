import ApiError from '../exeptions/api.error.js';

import {
    createEvent,
    deleteEvent,
    updateEvent,
    editeEvent,
    getAllEvent,
    getOneEvent
} from '../repositories/events.repository.js';

import { Op } from 'sequelize';


class EventService {
    constructor () {
        this.execlude = ['content'];
    }

    async createEvent (title, content, views, images) {
        const preview = images[0].filename;

        if (images.length > 1) {
            content.forEach(section, index => {
                if (section.image) {
                    section.image = images[index + 1].filename;
                }
            });
        }

        const eventData = { title, content, preview, views };
        const createdEvent = await createEvent(eventData);

        return createdEvent;
    }

    async deleteEvent (id) {
        const deletedEvent = await deleteEvent(id);
        return deletedEvent;
    }

    async updateEvent(id, title, views, content, images, changePreview=false) {
        const event = await getOneEvent(id);

        let preview = event.preview;
        if (images.length > 0 && changePreview) {
            preview = images[0].filename;
        }

        const nowContent = [...event.content];
        let updatedContent = [...content];

        if (images.length > 1) {
            updatedContent = updatedContent.map((section, index) => {
                const imageIndex = index + 1;

                if (section.image && images[imageIndex]) {
                    section.image = images[imageIndex].filename;
                }

                return section;
            });
        }

        const updatedEventData = {
            title: title || event.title,
            content: updatedContent,
            views: views || 0,
            preview,
        };

        const updatedEvent = await updateEvent(id, updatedEventData);
        return updatedEvent;
    }

    async editeEvent(id, title, views, content, images, changePreview=false) {
        const event = await getOneEvent(id);

        let preview = event.preview;
        if (images.length > 0 && changePreview) {
            preview = images[0].filename;
        }

        const nowContent = [...event.content];
        let updatedContent = [...content];

        if (images.length > 1) {
            updatedContent = updatedContent.map((section, index) => {
                const imageIndex = index + 1; 

                if (section.image && images[imageIndex]) {
                    section.image = images[imageIndex].filename;
                }

                return section;
            });
        }

        const editedEventData = {
            title: title || event.title,
            content: updatedContent,
            views: views || 0,
            preview,
        };

        const editedEvent = await editeEvent(id, editedEventData);
        return editedEvent;
    }

    async getOneEvent(id, name) {
        const searchMethod = name ? name : id;
        
        const event = searchMethod === id ? await getOneEvent(id, null) : await getAllEvent(null, id);

        return event;
    }

    async getAllEvent(pagination, filters, whereClause={}) {
        const { page, limit } = pagination;
        const { ordering, execlude, where, whereField, search, orderingType } = filters;

        if (whereField && where !== undefined) {
            whereClause[whereField] = where;
        }

        const offset = page * limit - limit;
        const order = ordering ? [[ordering, orderingType ? orderingType : 'ACS']] : [];

        if (search) {
            whereClause.title = { [Op.like]: `%${search}%` };
        }

        const events = await getAllEvent({ limit, offset }, whereClause, order, execlude);
        return events;
    }
}

export default new EventService;


// json for test data

// const comtent = {
//     title: '',
//     preview: '/image/path',
//     views: 0,
//     content: [
//         {
//             subtitle: '',
//             description: '',
//             list: '',
//             image: '',
//         },
//         {
//             subtitle: '',
//             description: '',
//             list: '',
//             image: '',
//         },
//     ]
// }
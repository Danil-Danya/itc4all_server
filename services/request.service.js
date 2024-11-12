import ApiError from "../exeptions/api.error.js";
import { createRequest, deleteRequest, getOneRequest, getAllRequests } from "../repositories/request.repository.js";

import bot from "../plugins/telegram.js";

class RequestService {
    async createRequest (phone, name, message) {
        const createdRequest = await createRequest(phone, name, message);

        const textName = `Имя пользователя: ${createdRequest.name} \n`;
        const textPhone = `Телефон пользователя: ${createdRequest.phone} \n`;
        const textMessage = `Сообщение пользователя: ${createdRequest.message} \n`;
        const textAlert = `Вам поступило новое сообщение: \n`;

        const fullMessage = textAlert + textName + textPhone + textMessage;
        await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, fullMessage);

        return createdRequest;
    }

    async getAllRequests(pagination) {
        const { page, limit } = pagination;
        const offset = limit * page - limit;

        const requests = await getAllRequests({ limit, offset });
        return requests;
    }

    async getOneRequest (id) {
        const request = await getOneRequest(id);
        return request;
    }

    async deleteRequest (id) {
        const deletedRequest = await deleteRequest(id);
        return deletedRequest;
    }
}

export default new RequestService();
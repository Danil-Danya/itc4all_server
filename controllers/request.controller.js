import requestService from "../services/request.service.js";

class RequestController {
    async sendRequest (req, res, next) {
        try {
            const { phone, name, message } = req.body;
            const newRequest = await requestService.createRequest(phone, name, message);

            return res.json(newRequest)
        }
        catch (error) {
            next(error);
        }
    }

    async getRequest (req, res, next) {
        try {
            const id = req.params.id;
            const request = await requestService.getOneRequest(id);

            return res.json(request);
        }
        catch (error) {
            next(error)
        }
    }

    async deleteRequest (req, res, next) {
        try {
            const id = req.params.id;
            const deletedRequest = await requestService.deleteRequest(id);

            return res.json({ message: 'This request has been deleted' });
        }
        catch (error) {
            next(error)
        }
    }
}

export default new RequestController
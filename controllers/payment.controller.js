import paymeService from "../services/payme.service.js";



class PaymentController {
    async payme (req, res, next) {
        try {
            const { method, params, id } = req.body;

            switch (method) {
                case 'CheckPerformTransaction': {
                    const result = await paymeService.CheckPerformTransaction(params, id);
                    return res.json(result)
                }

                case 'CreateTransaction': {
                    const result = await paymeService.CreateTransaction(params, id);
                    return res.json(result);
                }

                case 'PerformTransaction': {
                    const result = await paymeService.PerformTransaction(params, id);
                    return res.json(result);
                }

                case 'CancelTransaction': {
                    const result = await paymeService.CancelTransaction(params, id);
                    return res.json(result);
                }

                case 'CheckTransaction': {
                    const result = await paymeService.CheckTransaction(params, id);
                    return res.json(result);
                }

                case 'GetStatement': {
                    const result = await paymeService.GetStatement(params, id);
                    return res.json(result);
                }
            }
        }
        catch (error) {
            next(error)
        }
    }

    async click (req, res, next) {
        try {

        }
        catch (error) {
            next(error)
        }
    }
}

export default new PaymentController();
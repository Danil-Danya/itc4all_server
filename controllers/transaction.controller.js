import ApiError from '../exeptions/api.error.js';
import transactionService from '../services/transaction.service.js';

class TransactionsController {
    async getOneTransaction (req, res, next) {
        try {
            const id = req.params.id;
            const transaction = await transactionService.getOneTransaction(id);

            return res.json(transaction);
        }
        catch (error) {
            next(error)
        }
    }

    async getAllTransaction (req, res, next) {
        try {
            const page = req.query.page;
            const limit = req.query.limit;

            const where = req.query.where;
            const whereField = req.query.whereField;
            const ordering = req.query.oreder;
            const orederingType = req.query.orederingType;

            const pagination = { limit, page };
            const filters = { where, whereField, orederingType, ordering };

            const transactions = await transactionService.getAllTransaction(pagination, filters);
            return res.json(transactions);
        }
        catch (error) {
            next(error)
        }
    }

    async updateTransaction (req, res, next) {
        try {
            const id = req.params.id;
            const data = req.body;

            const updatedTransaction = await transactionService.updateTransaction(id, data);
            return res.json(updatedTransaction);
        }
        catch (error) {
            next(error)
        }
    }

    async editeTransaction (req, res, next) {
        try {
            const id = req.params.id;
            const data = req.body;

            const editedTransaction = await transactionService.editeTransaction(id, data);
            return res.json(editedTransaction);
        }
        catch (error) {
            next
        }
    }

    async deleteTransaction (req, res, next) {
        try {
            const id = req.params.id;
            const deletedTransaction = await transactionService.deleteTransaction(id);

            return res.json(deletedTransaction);
        }
        catch (error) {
            next(error)
        }
    }
}

export default new TransactionsController()
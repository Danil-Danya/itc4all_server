import ApiError from '../exeptions/api.error.js';
import {
    getAllTransacrion,
    getOneTransaction,
    deleteTransaction,
    editeTransaction,
    updateTransaction
} from '../repositories/transactions.repository.js';

class TransactionsService {
    async getAllTransaction (pagination, filters, whereClause={}) {
        const { page, limit } = pagination;
        const { where, whereFiled, ordering, orderingType } = filters;

        if (where && whereFiled) {
            whereClause[whereFiled] = where;
        }

        const offset = page * limit - limit;
        const order = ordering ? [[ordering, orderingType ? orderingType : 'ACS']] : [];

        const transactions = await getAllTransacrion({ limit, offset }, order, where);
    }

    async getOneTransaction (id) {
        const transaction = await getOneTransaction(id);
        return transaction;
    }

    async deleteTransaction (id) {
        const deletedTransaction = await deleteTransaction(id);
        return {
            message: 'This transaction has been deleted'
        }
    }

   async updateTransaction (id, transactionData) {
        const updatedTransaction = await updateTransaction(id, transactionData);
        return updatedTransaction;
    }

    async editeTransaction (id, data) {
        const editedTransaction = await editeTransaction(id, data);
        return editedTransaction;
    }
}

export default new TransactionsService();
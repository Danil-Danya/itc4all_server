import ApiError from '../exeptions/api.error.js';
import TransactionModel from '../models/transactions.model.js';

const createTransaction = async (data) => {
    const newTrasaction = await TransactionModel.create(data);
    if (!newTrasaction) {
        throw ApiError.BadRequest('This user is not created');
    }

    return newTrasaction;
}

const deleteTransaction = async (id, include=[]) => {
    const transaction = await TransactionModel.findOne({ where: { id }, include });
    if (!transaction) {
        throw ApiError.BadRequest('This transaction not found');
    }

    const deletedTransaction = await transaction.destroy();
    if (!deletedTransaction) {
        throw ApiError.BadRequest('This transaction not found');
    }

    return deleteTransaction;
}

const updateTransaction = async (id, transactionData) => {
    const transaction = await TransactionModel.findOne({ where: { id }});
    if (!transaction) {
        throw ApiError.BadRequest('This transaction is not found');
    }

    const updatedTransaction = await transaction.update(transaction);
    return updatedTransaction;
}

const editeTransaction = async (id, data) => {
    const transaction = await TransactionModel.findOne({ where: { id } });
    if (!transaction) {
        throw ApiError.BadRequest('This transaction not found');
    }

    Object.keys(data).forEach((key) => {
        if (transaction[key] !== undefined) {
            transaction[key] = data[key];
        }
    });

    const editedTransaction = await transaction.save();
    return editedTransaction;
}

const getAllTransacrion = async (pagination, order=[], where={}, include=[]) => {
    const { limit, offset } = pagination;
    const transactions = await TransactionModel.findAndCountAll(limit, offset, order, where, include);

    return transactions;
}

const getOneTransaction = async (where) => {
    const transaction = await TransactionModel.findOne({ where });
    if (!transaction) {
        throw ApiError.BadRequest('This transaction is not found');
    }

    return transaction;
}

export {
    createTransaction,
    deleteTransaction,
    updateTransaction,
    editeTransaction,
    getAllTransacrion,
    getOneTransaction
}
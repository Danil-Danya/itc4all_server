import ApiError from "../exeptions/api.error.js";
import TransactionsPaymeModel from "../models/transactionsPayme";

const createTransactionPayme = async (data) => {
    const newTransaction = await TransactionsPaymeModel.create(data);
    if (!newTransaction) {
        throw ApiError.BadRequest('This transaction could not be created');
    }
    return newTransaction;
};

const deleteTransactionPayme = async (id, include = []) => {
    const transaction = await TransactionsPaymeModel.findOne({ where: { id }, include });
    if (!transaction) {
        throw ApiError.BadRequest('This transaction was not found');
    }
    await transaction.destroy();
    return transaction;
};

const updateTransactionPayme = async (id, transactionData) => {
    const transaction = await TransactionsPaymeModel.findOne({ where: { id } });
    if (!transaction) {
        throw ApiError.BadRequest('This transaction was not found');
    }
    const updatedTransaction = await transaction.update(transactionData);
    return updatedTransaction;
};

const editTransactionPayme = async (id, data) => {
    const transaction = await TransactionsPaymeModel.findOne({ where: { id } });
    if (!transaction) {
        throw ApiError.BadRequest('This transaction was not found');
    }

    Object.keys(data).forEach((key) => {
        if (transaction[key] !== undefined) {
            transaction[key] = data[key];
        }
    });

    const editedTransaction = await transaction.save();
    return editedTransaction;
};

const getAllTransactionsPayme = async (where = {}, include = []) => {
    const { limit, offset } = pagination;
    const transactions = await TransactionsPaymeModel.findAndCountAll({
        limit,
        offset,
        order,
        where,
        include
    });
    return transactions;
};

const getOneTransactionPayme = async (where) => {
    const transaction = await TransactionsPaymeModel.findOne({ where });
    if (!transaction) {
        throw ApiError.BadRequest('This transaction was not found');
    }
    return transaction;
};

export {
    createTransactionPayme,
    deleteTransactionPayme,
    updateTransactionPayme,
    editTransactionPayme,
    getAllTransactionsPayme,
    getOneTransactionPayme
};

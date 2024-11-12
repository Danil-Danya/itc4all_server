import ApiError from "../exeptions/api.error.js";

import ProfilesModel from "../models/profile.model.js";

import { getOneUser } from '../repositories/user.repository.js';
import { getOneCourse } from "../repositories/course.repository.js";
import { getOneZoomSession } from "../repositories/zoomSessions.repository.js";

import { createTransaction, getOneTransaction, editeTransaction } from "../repositories/transactions.repository.js";
import { createTransactionPayme, getOneTransactionPayme, editTransactionPayme } from "../repositories/transavtionPayme.repository.js";

class PaymeService {
    async CheckPerformTransaction (params, id) {
        const { user_email, product_type, product_id } = params.account;
        const amount = Math.floor(params.amount / 100);

        if (!product_id || !user_email) {
            throw ApiError.MernchatError(-31050, 'The parametr user_email and product_id is required');
        }

        if (!product_type) {
            throw ApiError.MernchatError(-31050, 'The parametr product_type is required');
        }

        if (!amount) {
            throw ApiError.MernchatError(-31001, 'The parametr amount is required');
        }

        const user = await getOneUser({ email: user_email });
        if (!user) {
            throw ApiError.MernchatError(-31050, 'This user is not defined');
        }

        const product = product_type === 'COURSE' ? await getOneCourse(product_id) : product_type === 'ZOOM_SESSION' ? await getOneZoom(product_id) : null;
        if (!product) {
            throw ApiError.MernchatError(-31050, 'The product is not defined');
        }

        if (product.price !== amount) {
            throw ApiError.MernchatError(-31001, 'The quantity parameter does not match the price of the found product');
        }

        return {
            'result': {
                "allow": true
            }
        }
    }

    async CreateTransaction(params, id) {
        const { user_email, product_id, product_type } = params.account;
        const amount = params.amount / 100;

        await this.CheckPerformTransaction(params, id);

        const currentTime = Date.now();

        const paymeTransaction = await paymeTransactionData({ account: params.account });
        if (paymeTransaction) {
            throw ApiError.MernchatError(-31099, 'Transaction with the requested account data already exists')
        }

        const transaction = await getOneTransaction({ operator_unical_id: params.id });
        if (transaction) {
            if (transaction.state !== 1) {
                throw ApiError.MernchatError(-31008, 'Transactions has been deleted');
            }

            const transactionTime = new Date(transaction.createdAt).getTime();
            const differenceTime = (currentTime - transactionTime) / (1000 * 60);
            
            console.log(process.env.WAITING_TRANSACTIONS_MINUTES);
            
            if (differenceTime > process.env.WAITING_TRANSACTIONS_MINUTES) {
                throw ApiError.MernchatError(-31008, 'Transaction timed out');
            }

            return { 
                "result": {
                    "create_time": transactionTime,
                    "transaction": transaction.operator_unical_id,
                    "state": transaction.state
                }
            }
        }

        const user = await getOneUser({ email: user_email }, [{ model: ProfilesModel, as: 'profile' }]);
        console.log(user);
        
        if (!user) {
            throw ApiError.MernchatError(-31050, 'This user is not defined');
        }

        const product = product_type === 'COURSE' ? await getOneCourse(product_id) : product_type === 'ZOOM_SESSION' ? await getOneZoomSession(product_id) : null;
        if (!product) {
            throw ApiError.MernchatError(-31050, 'The product is not defined');
        }

        const transactionData = {
            user_first_name: user.profile.first_name,
            user_last_name: user.profile.last_name,
            product_name: product.name,
            operator_unical_id: params.id,
            payment_method: 'PAYME',
            createdAt: currentTime,
            state: 1,
            amount,
        }

        const paymeTransactionData = {
            time: currentTime,
            amount,
            account: params.account,
            create_time: currentTime,
            cancel_time: 0,
            transaction: params.id,
            state: 1,
            reason: null,
            receivers: []
        }

        const newTrasaction = await createTransaction(transactionData);
        if (!newTrasaction) {
            throw ApiError.MernchatError(-31008, 'Transaction does not be created');
        }

        const newPaymeTransaction = await createTransactionPayme(paymeTransactionData);
        if (!newPaymeTransaction) {
            throw ApiError.MernchatError(-31008, 'Transaction does not be created');
        }

        return {
            "result": {
                "create_time": new Date(newTrasaction.createdAt).getTime(),
                "transaction": newTrasaction.operator_unical_id,
                "state": newTrasaction.state
            }
        }
    }

    async PerformTransaction(params) {
        const { id } = params;
        if (!id) {
            throw ApiError.MernchatError(-31008, 'Id parametr is required')
        }

        const transaction = await getOneTransaction({ operator_unical_id: id });
        if (!transaction) {
            throw ApiError.MernchatError(-31003, 'Transactions is not defined');
        }

        if (transaction.state !== 1) {
            throw ApiError.MernchatError(-31008, 'Transactions has been deleted');
        }

        const editedTransaction = await editeTransaction({ operator_unical_id: id }, { state: 2 });
        if (!editedTransaction) {
            throw ApiError.MernchatError(-31008, 'Transactions does not be edited');
        }

        return {
            "result": {
                "transaction": transaction.operator_unical_id,
                "perform_time": Date.now(),
                "state": editedTransaction.state
            }
        }
    }

    async CheckTransaction (params) {
        const id = params.id;
        const transaction = await getOneTransactionPayme({ transaction: id });

        if (!transaction) {
            throw ApiError.MernchatError(-31003, 'Transaction is not found')
        }

        return transaction;
    }

    async CancelTransaction(params) {
        const { id } = params.id;
        if (!id) {
            throw ApiError.MernchatError(-31008, 'Id parametr is required')
        }

        const transaction = getOneTransaction({ operator_unical_id: id });
        if (!transaction) {
            throw ApiError.MernchatError(-31003, 'Transactions is not defined');
        }

        if (transaction.state < 0) {
            throw ApiError.MernchatError(-31008, 'Transaction has been deleted')
        }
        //const editedTransaction 
    }
}

export default new PaymeService();
import ApiError from "../exeptions/api.error";

import { getOneUser } from '../repositories/user.repository.js';
import { getOneCourse } from "../repositories/course.repository.js";
import { getOneZoom } from "../repositories/zoom.repository.js";

import { createTransaction, getOneTransaction, editeTransaction } from "../repositories/transactions.repository.js";

class PaymeService {
    async CheckPerformTransaction (params, id) {
        const { user_email, product_type, product_id } = params.account;
        const { amount } = params.amount;

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

        const transactionData = {
            amount,
            user_first_name: user.first_name,
            user_last_name: user.last_name,
            product_name: product.name,
            payment_method: 'PAYME',
            operator_unical_id: params.id,
            state: 0
        }

        const transaction = await createTransaction(transactionData);
        if (!transaction) {
            throw ApiError.MernchatError(-31050, 'The client transaction does not be created');
        }

        return {
            "allow": true
        }
    }

    async CreateTransaction(params, id) {
        
    }

    async PerformTransaction(params, id) {

    }

    async CancelTransaction(params, id) {

    }

    async CheckTransaction(params, id) {

    }

    async GetStatement(params, id) {

    }
}

export default new PaymeService();
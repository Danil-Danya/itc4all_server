import ApiError from '../exeptions/api.error.js';

export default (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message, errors: err.erros });
    }

    console.log(err);
    return res.status(500).json({ message: 'Unexpected error' });
}
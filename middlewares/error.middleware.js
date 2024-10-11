import ApiError from '../exeptions/api.error.js';

export default (err, req, res, next) => {
    if (err instanceof ApiError) {
        console.log(err.status);
        
        if (err.status > 600 || err.status < 0) {
            return res.status(200).json({ error: { code: err.status, message: err.message } });
        }
        return res.status(err.status).json({ message: err.message, errors: err.erros });
    }

    console.log(err);
    return res.status(500).json({ message: 'Unexpected error', });
}
import base64 from 'base-64';

const paymeCheckToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const paymeKey = process.env.PAYME_KEY;

        const error = {
            code: -32504,
            message: 'Auth is not valid'
        }

        if (!token) {
            return res.status(200).json({
                error
            });
        }
        
        const data = base64.decode(token);
        if (!data.includes(paymeKey)) {
            return res.status(200).json({
                error
            });
        }

        next();
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            error: {
                code: -32504,
                message: 'Auth is not valid'
            },
            other: error
        });
    }
}

export default paymeCheckToken;
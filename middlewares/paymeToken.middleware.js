import base64 from 'base-64';

const paymeCheckToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split();
        const paymeKey = process.env.PAYME_KEY;

        if (!token) {
            return res.status(401).message("You didn't send the mernchat token");
        }
        
        const data = base64.decode(token);
        if (!data.includes(paymeKey)) {
            return res.status(401).message("Mernchat token does not match the client side token");
        }

        next();
    }
    catch (error) {
        console.log(error);
        return res.status(401).message('Unxpected payment error');
    }
}

export default paymeCheckToken;
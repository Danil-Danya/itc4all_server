import jsonwebtoken from 'jsonwebtoken';

const checkJwt = async (req, res, next) => {
    if (req.method === 'OPTIONS') next();

    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'User is not authorised' });
        }

        const decoted = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoted;

        next();
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'User is not authorised' });
    }
}

export default checkJwt;
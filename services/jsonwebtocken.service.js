import jwt from 'jsonwebtoken';

class JsonwebtockenService {
    generateTockens (payload) {
        const accessTocken = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '12d' });
        const refreshTocken = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '40d' });

        return { accessTocken, refreshTocken };
    }
}

export default new JsonwebtockenService();
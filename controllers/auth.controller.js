import UserModel from '../models/user.model';
import authificationService from '../services/authification.service';

class AuthorisationController {
    async registraion (req, res, next) {
        try {
            const { email, password, first_name, last_name } = req.body;
            const registeredUser = authificationService(email, password, first_name, last_name);

            return res.json(registeredUser);
        }
        catch (error) {
            next(error)
        }
    }

    async login(req, res, next) {
        try {

        }
        catch (error) {
            next(error)
        }
    }

    async profile(req, res, next) {
        try {

        }
        catch (error) {
            next(error)
        }
    }

    async activate(req, res, next) {
        try {

        }
        catch (error) {
            next(error)
        }
    }
}

export default new AuthorisationController();
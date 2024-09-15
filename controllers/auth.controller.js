import authificationService from '../services/authification.service.js';

class AuthorisationController {
    async registraion (req, res, next) {
        try {
            const { email, password, first_name, last_name } = req.body;
            const registeredUser = await authificationService.registration(email, password, first_name, last_name);

            return res.json(registeredUser);
        }
        catch (error) {
            next(error)
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            console.log(email, password);
            
            const loginData = await authificationService.login(email, password);

            return res.json(loginData);
        }
        catch (error) {
            next(error)
        }
    }

    async profile(req, res, next) {
        try {
            const user = req.user;
            const profile = await authificationService.profile(user);

            return res.json(profile);
        }
        catch (error) {
            next(error)
        }
    }

    async activate(req, res, next) {
        try {
            const activationId = req.params.active_link;
            const activateLink = await authificationService.active(activationId);

            res.redirect(activateLink);
        }
        catch (error) {
            next(error)
        }
    }
}

export default new AuthorisationController();
import userService from '../services/user.service.js';

class UserController {
    async getOneUser (req, res, next) {
        try {
            const { id } = req.params;
            const user = await userService.getOneUser(id);

            return res.json(user);
        }
        catch (error) {
            next(error);
        }
    }

    async getAllUser (req, res, next) {
        try {
            const page = req.query.page || 1;
            const limit = req.query.limit || 10;

            const searchField = req.query.searchField;
            const searchValue = req.query.searchValue;

            const pagination = { page, limit };
            const search = { searchField, searchValue };

            const users = await userService.getAllUsers(pagination, search);
            return res.json(users);
        }
        catch (error) {
            next(error);
        }
    }

    async editeUser (req, res, next) {
        try {
            const { id } = req.params;
            const data = req.body;

            const editedUser = await userService.editeUser(id, data);
            return res.json(editedUser);
        }
        catch (error) {
            next(error);
        }
    }

    async updateUser (req, res, next) {
        try {
            const { id } = req.params;
            const data = req.body;

            const updatedUser = await userService.updateUser(id, data);
            return res.json(updatedUser);
        }
        catch (error) {
            next(error);
        }
    }

    async deleteUser (req, res, next) {
        try {
            const { id } = req.params;
            const deletedUser = await userService.deleteUser(id);

            return res.json(deletedUser);
        }
        catch (error) {
            next(error);
        }
    }
}

export default new UserController();
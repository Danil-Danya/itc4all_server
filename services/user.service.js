import ApiError from '../exeptions/api.error.js';

import ProfileModel from '../models/profile.model.js';
import AvatarsModel from '../models/avatar.model.js';

import { 
    getOneUser, 
    getAllUsers,
    updateUser,
    editeUser,
    deleteUser
} from '../repositories/user.repository.js';
import { Op } from 'sequelize';

class UserService {
    constructor () {
        this.include = [
            { model: ProfileModel, as: 'profile' },
            { model: AvatarsModel, as: 'avatar' }
        ];
    }

    async getOneUser (id) {
        const user = await getOneUser({ id: id }, this.include);
        return user;
    }

    async getAllUsers (pagination, search, where={}) {
        const { page, limit } = pagination;
        const { searchValue, searchField } = search;

        const offset = page * limit - limit;

        if (searchValue && searchField) {
            where[searchField] = {
                [Op.like]: `%${searchValue}%`
            }
        }

        const users = await getAllUsers({limit, offset}, where, this.include);
        return users;
    }

    async updateUser (id, data) {
        const updatedUser = await updateUser(id, data);
        return updatedUser;
    }

    async editeUser (id, data) {
        const editedUser = await editeUser(id, data);
        return editedUser;
    }

    async deleteUser (id) {
        const deletedUser = await deleteUser(id, this.include);
        return deletedUser;
    }
}

export default new UserService();
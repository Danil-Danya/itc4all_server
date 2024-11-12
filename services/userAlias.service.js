import { editeUserAvatar, editeUserProfile, createUserAvatar, getUserAvatar } from '../repositories/userAlias.repository.js';


class UserAliasService {
    async editeUserAvatar (id, data) {
        const avatar = await getUserAvatar(id);
        if (!avatar) {
            const createdAvatar = await createUserAvatar(data.path, id);
            return createdAvatar;
        }

        const editedAvatar = await editeUserAvatar(id, data);
        return editedAvatar;
    }

    async editeUserProfile (id, data) {
        const editedProfile = await editeUserProfile(id, data);
        return editedProfile;
    }
}

export default new UserAliasService();
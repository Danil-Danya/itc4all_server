import userAliasServices from "../services/userAlias.service.js";

class UserAliasController {
    async editeUserAvatar (req, res, next) {
        try {
            const { id } = req.params;
            const path = req.file.filename;

            const editedAvatar = await userAliasServices.editeUserAvatar(id, { path });
            return res.json(editedAvatar);
        }
        catch (error) {
            next(error);
        }
    }

    async editeUserProfile (req, res, next) {
        try {
            const { id } = req.params;
            const data = req.body;

            const editedProfile = await userAliasServices.editeUserProfile(id, data);
            return res.json(editedProfile);
        }
        catch (error) {
            next(error)
        }
    }
}

export default new UserAliasController();
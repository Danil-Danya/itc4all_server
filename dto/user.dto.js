class UserDTO {
    constructor (model) {
        this.id = model.id;
        this.isActivated = model.is_activated;
    }
}

export default UserDTO;
class ApiError extends Error {
    status; errors;

    constructor (status, message, errors) {
        super(message);

        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError () {
        return new ApiError(401, 'User is not authorised');
    }

    static BadRequest (message, errors=[]) {
        return new ApiError(400, message, errors);
    }

    static MernchatError(status, message, errors=[]) {
        status ? status : status = -32400;
        return new ApiError(status, message, errors);
    }
}

export default ApiError;
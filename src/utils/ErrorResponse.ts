class ErrorResponse extends Error {
    readonly statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, ErrorResponse.prototype)
    }
}

export default ErrorResponse;
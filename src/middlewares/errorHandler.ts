import {Request, Response, NextFunction} from 'express';
import ErrorResponse from '../utils/ErrorResponse';

export const errorHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
    let statusCode = 500;
    let message = 'Something went wrong';

    if (error instanceof ErrorResponse) {
        statusCode = error.statusCode;
        message = error.message;
    }

    response.status(statusCode).send({ message });
};

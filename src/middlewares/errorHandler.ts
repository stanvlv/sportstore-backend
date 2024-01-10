import {Request, Response, NextFunction} from 'express';
import ErrorResponse from '../utils/ErrorResponse';

export const errorHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
    let statusCode: number = 500;
    let message: string = 'Something went wrong';

    if (error instanceof ErrorResponse) {
        statusCode = error.statusCode;
        message = error.message;
    }

    response.status(statusCode).send({ message });
};

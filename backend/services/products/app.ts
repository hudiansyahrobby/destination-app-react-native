import compression from 'compression';
import cors from 'cors';
import { config } from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import AppError from './errorHandler/AppError';
import { sendErrorDev, sendErrorProd } from './errorHandler/errorResponse';
import initDB from './helpers/initDB';
import { logger } from './helpers/logger';

// ROUTES
import productRoute from './routes/product.route';
import commentRoute from './routes/comment.route';

config();
const app = express();

initDB();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    }),
);

app.use(compression());

app.use(helmet());

app.use('/api/v1', productRoute);
app.use('/api/v1', commentRoute);

// Swagger Documentatios

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Microservices API',
            description: 'API for Microservices',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:8080/api/v1',
            },
        ],
    },
    apis: ['./docs/*.yaml'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/products/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404, 'not-found'));
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV === 'development') {
        if (err?.response) {
            logger.log({ level: 'error', message: err.response.data.message });
            sendErrorDev(err.response.data, res);
        } else {
            logger.log({ level: 'error', message: err.message });
            err.status = err.status || 500;
            sendErrorDev(err, res);
        }
    } else if (process.env.NODE_ENV === 'production') {
        if (err?.response) {
            logger.log({ level: 'error', message: err.response.data.message });
            sendErrorProd(err.response.data, res);
        } else {
            logger.log({ level: 'error', message: err.message });
            err.status = err.status || 500;
            sendErrorProd(err, res);
        }
    }
});

process.on('unhandledRejection', (err: any) => {
    logger.log({
        level: 'error',
        message: `${err.name} - ${err.message}`,
    });
    logger.log({
        level: 'info',
        message: 'UNHANDLED REJECTION! ???? Shutting down...',
    });
    process.exit(1);
});

process.on('uncaughtException', (err) => {
    logger.log({
        level: 'error',
        message: `${err.name} - ${err.message}`,
    });
    logger.log({
        level: 'info',
        message: 'UNHANDLED REJECTION! ???? Shutting down...',
    });

    process.exit(1);
});

export default app;

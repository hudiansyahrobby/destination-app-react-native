import app from './app';
import { logger } from './helpers/logger';

const PORT = process.env.PORT || 8087;

app.listen(PORT, () =>
    logger.log({
        level: 'info',
        message: `Listening on port: ${PORT}`,
    }),
);

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import 'dotenv/config';

import AppRouter from './routes';
import connectDB from './config/database';
import options from './config/cors.config';
import { errorHandlingMiddleware } from './middlewares/error-handle.middleware';
import { authGuardMiddleware } from './middlewares/auth-guard.middleware';

const app = express();
const router = new AppRouter(app);
connectDB();

app.set('port', process.env.PORT || 4200);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(options));

app.use(authGuardMiddleware);
router.init();
app.use(errorHandlingMiddleware);

const port = app.get('port');
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;

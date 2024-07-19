import 'dotenv/config';
import express from 'express';
import UserRouter from './routes/userRoutes.js';

const app = express();

app.use('/users', UserRouter);

app.listen(4000, () => console.log('API de Ecommerce está online'));

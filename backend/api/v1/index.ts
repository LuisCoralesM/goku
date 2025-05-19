import { Router } from 'express';
import { authRouter } from './auth';
import { dataRouter } from './data';
import { usersRouter } from './users';

export const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/data', dataRouter);
v1Router.use('/users', usersRouter);

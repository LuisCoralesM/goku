import { Router } from 'express';
import { handler as userMe } from './api-user-get-own/handler';
import { handler as userGet } from './api-user-get/handler';
import { handler as userList } from './api-user-list/handler';

export const usersRouter = Router();

usersRouter.get('/me', userList); // Get own user
usersRouter.get('/:id', userGet); // Get specific user by id
usersRouter.get('/', userMe); // List users

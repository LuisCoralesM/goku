import { Request, RequestHandler, Response } from 'express';
import { users } from '../../../../../catalog/users';

export const handler: RequestHandler = async (req: Request, res: Response) => {
  res.status(200).json(users);
};

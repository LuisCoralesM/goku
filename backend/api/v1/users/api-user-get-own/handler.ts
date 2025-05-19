import { Request, RequestHandler, Response } from 'express';
import { users } from '../../../../../catalog/users/entities';

export const handler: RequestHandler = async (req: Request, res: Response) => {
  res.status(200).json(users[0]);
};

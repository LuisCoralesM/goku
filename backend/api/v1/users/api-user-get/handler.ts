import { Request, RequestHandler, Response } from 'express';
import { users } from '../../../../../catalog/users/entities';

export const handler: RequestHandler = async (req: Request, res: Response) => {
  const user = users.find(user => user.id === req.params.id);

  res.status(200).json(user);
};

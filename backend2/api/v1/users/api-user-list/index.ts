import { Request, Response } from "express";
import { prisma } from "../../../../prisma";

export const handler = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();

  console.log(users);

  res.status(200).json(users);
};

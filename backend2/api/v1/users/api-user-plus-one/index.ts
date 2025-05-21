import { Request, Response } from "express";
import { prisma } from "../../../../prisma";

export const handler = async (req: Request, res: Response) => {
  try {
    const { username } = req.body;

    if (!username) {
      throw new Error("Username is required");
    }

    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (!user) {
      throw new Error(`User ${username} not found`);
    }

    if (
      user.plusOneDate &&
      user.plusOneDate.toLocaleDateString("en-CA") === new Date().toLocaleDateString("en-CA")
    ) {
      throw new Error("Cannot plus one two times a day");
    }

    const isNewLevel = user.exp + user.expPerDay >= user.expToNextLevel;

    const level = isNewLevel ? user.level + 1 : user.level;
    const expToNextLevel = isNewLevel ? user.expPerDay * level : user.expToNextLevel - user.exp;
    const randomInt = getRandomInt(1, 4);
    const random = randomInt === 1 ? "" : randomInt;

    const toUpdate = {
      streak: user.streak + 1,
      exp: user.exp + user.expPerDay,
      expToNextLevel,
      level,
      plusOneDate: new Date(),
      imageUrl: `https://dragonball-api.com/transformaciones/goku_ssj${random}.webp`,
    };

    const userUpdated = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: toUpdate,
    });

    res.status(200).json(userUpdated);
  } catch (error: any) {
    res.status(500).json({ message: error.toString() });
  }
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

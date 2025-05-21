import { prisma } from "./prisma";
import { Prisma } from "./prisma/generated/prisma";

async function seed() {
  // Verify database connection
  try {
    await prisma.$connect();
    console.log("Database connection successful");
  } catch (error) {
    console.error("Failed to connect to database:", error);
    throw error;
  }

  const today = new Date();
  const goal = new Date();
  goal.setDate(goal.getDate() + 100);

  const users: Prisma.UserCreateInput[] = [
    {
      username: "Gatuso",
      level: 1,
      exp: 0,
      expToNextLevel: 100,
      expPerDay: 100,
      startDay: today,
      goalDay: goal,
      streak: 0,
      missingDays: 0,
      imageUrl: "",
    },
    {
      username: "ValtrX",
      level: 1,
      exp: 0,
      expToNextLevel: 100,
      expPerDay: 100,
      startDay: today,
      goalDay: goal,
      streak: 0,
      missingDays: 0,
      imageUrl: "",
    },
  ];

  try {
    // Create users one at a time
    for (const user of users) {
      await prisma.user.create({
        data: user,
      });
      console.log(`Created user: ${user.username}`);
    }
    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error during seeding:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

seed().catch(error => {
  console.error("Seeding failed:", error);
  process.exit(1);
});

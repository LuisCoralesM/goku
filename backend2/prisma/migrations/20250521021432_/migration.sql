-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "done" BOOLEAN NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "exp" INTEGER NOT NULL,
    "expToNextLevel" INTEGER NOT NULL,
    "expPerDay" INTEGER NOT NULL,
    "startDay" TIMESTAMP(3) NOT NULL,
    "goalDay" TIMESTAMP(3) NOT NULL,
    "streak" INTEGER NOT NULL,
    "missingDays" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

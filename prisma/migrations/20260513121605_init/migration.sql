-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habits" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Habits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habit_logs" (
    "id" SERIAL NOT NULL,
    "log_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "habitId" INTEGER NOT NULL,

    CONSTRAINT "Habit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Habits" ADD CONSTRAINT "Habits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit_logs" ADD CONSTRAINT "Habit_logs_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

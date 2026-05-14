-- DropForeignKey
ALTER TABLE "Habit_logs" DROP CONSTRAINT "Habit_logs_habitId_fkey";

-- DropForeignKey
ALTER TABLE "Habits" DROP CONSTRAINT "Habits_userId_fkey";

-- CreateTable
CREATE TABLE "Sessions" (
    "session_id" SERIAL NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Sessions_pkey" PRIMARY KEY ("session_id")
);

-- AddForeignKey
ALTER TABLE "Sessions" ADD CONSTRAINT "Sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habits" ADD CONSTRAINT "Habits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit_logs" ADD CONSTRAINT "Habit_logs_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

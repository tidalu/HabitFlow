-- AlterTable
ALTER TABLE "Habit_logs" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Habit_logs" ADD CONSTRAINT "Habit_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

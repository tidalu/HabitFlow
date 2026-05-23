/*
  Warnings:

  - You are about to drop the column `email` on the `Habit_logs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Habit_logs" DROP COLUMN "email",
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Habit_logs" ADD CONSTRAINT "Habit_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

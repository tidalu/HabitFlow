/*
  Warnings:

  - You are about to drop the column `userId` on the `Habit_logs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Habit_logs" DROP CONSTRAINT "Habit_logs_userId_fkey";

-- AlterTable
ALTER TABLE "Habit_logs" DROP COLUMN "userId",
ADD COLUMN     "email" TEXT;

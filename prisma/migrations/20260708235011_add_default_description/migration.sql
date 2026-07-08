/*
  Warnings:

  - Made the column `description` on table `Habits` required. This step will fail if there are existing NULL values in that column.

*/

-- Backfill existing NULLs before enforcing NOT NULL
UPDATE "Habits" SET "description" = 'Habit description [id]' WHERE "description" IS NULL;

-- AlterTable
ALTER TABLE "Habits" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT 'Habit description';

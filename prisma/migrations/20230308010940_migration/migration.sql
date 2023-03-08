/*
  Warnings:

  - Made the column `is_use` on table `category` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `is_use` BOOLEAN NOT NULL DEFAULT true;

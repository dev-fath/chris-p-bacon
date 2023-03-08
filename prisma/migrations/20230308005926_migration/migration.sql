/*
  Warnings:

  - Added the required column `board_code` to the `boards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `boards` ADD COLUMN `board_code` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `boards` ADD CONSTRAINT `boards_board_code_fkey` FOREIGN KEY (`board_code`) REFERENCES `category`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

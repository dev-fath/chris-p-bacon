-- DropForeignKey
ALTER TABLE `category`
    DROP FOREIGN KEY `category_parent_id_fkey`;

-- AlterTable
ALTER TABLE `boards`
    MODIFY `modified_at` DATETIME(3) NULL,
    MODIFY `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `category`
    MODIFY `parent_id` INTEGER NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `modified_at` DATETIME(3) NULL,
    MODIFY `deleted_at` DATETIME(3) NULL;

-- AddForeignKey
ALTER TABLE `category`
    ADD CONSTRAINT `category_parent_id_fkey` FOREIGN KEY (`parent_id`) REFERENCES `category` (`category_id`) ON DELETE SET NULL ON UPDATE CASCADE;

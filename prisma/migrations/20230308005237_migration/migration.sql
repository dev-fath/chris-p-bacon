-- AlterTable
ALTER TABLE `category` MODIFY `is_use` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `user` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `modified_at` DATETIME(3) NULL,
    MODIFY `deleted_at` DATETIME(3) NULL;

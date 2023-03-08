-- CreateTable
CREATE TABLE `category` (
    `category_id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_group` VARCHAR(191) NOT NULL,
    `category_name` VARCHAR(191) NOT NULL,
    `parent_id` INTEGER NOT NULL,
    `createad_at` DATETIME(3) NOT NULL,
    `modified_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NOT NULL,
    `is_use` BOOLEAN NOT NULL,

    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `category` ADD CONSTRAINT `category_parent_id_fkey` FOREIGN KEY (`parent_id`) REFERENCES `category`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

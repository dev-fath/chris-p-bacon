-- CreateTable
CREATE TABLE `board_entity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `userId` INTEGER NULL,

    INDEX `FK_6b0ae2f186480df1ea3bb52eebd`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_entity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `password` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `IDX_9b998bada7cff93fcb953b0c37`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `board_entity` ADD CONSTRAINT `FK_6b0ae2f186480df1ea3bb52eebd` FOREIGN KEY (`userId`) REFERENCES `user_entity`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;


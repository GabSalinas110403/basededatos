-- CreateTable
CREATE TABLE `staff_view` (
    `staff_id` INTEGER NOT NULL,
    `rfc_staff` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `paternal_surname` VARCHAR(191) NOT NULL,
    `maternal_surname` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `zip_code` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`staff_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

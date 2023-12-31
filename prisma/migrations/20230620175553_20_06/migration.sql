-- CreateTable
CREATE TABLE `product_view` (
    `product_id` INTEGER NOT NULL,
    `product_name` VARCHAR(191) NOT NULL,
    `product_description` VARCHAR(191) NOT NULL,
    `list_price` DOUBLE NOT NULL,
    `brand_name` VARCHAR(191) NOT NULL,
    `category_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

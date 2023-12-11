/*
  Warnings:

  - You are about to alter the column `price` on the `MovieCatalog` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `rating` on the `MovieCatalog` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `price` on the `MovieDetails` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `rating` on the `MovieDetails` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `totalPrice` on the `OrderDetails` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `amountPaid` on the `PaymentDetails` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "MovieCatalog" ALTER COLUMN "price" SET DATA TYPE INTEGER,
ALTER COLUMN "rating" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "MovieDetails" ALTER COLUMN "price" SET DATA TYPE INTEGER,
ALTER COLUMN "rating" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "OrderDetails" ALTER COLUMN "totalPrice" SET DEFAULT 0,
ALTER COLUMN "totalPrice" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "PaymentDetails" ALTER COLUMN "amountPaid" SET DEFAULT 0,
ALTER COLUMN "amountPaid" SET DATA TYPE INTEGER;

-- CreateEnum
CREATE TYPE "Occasion" AS ENUM ('BIRTHDAY', 'ANNIVERSARY', 'APOLOGY', 'THANK_YOU', 'SYMPATHY', 'WEDDING', 'JUST_BECAUSE');

-- CreateEnum
CREATE TYPE "Palette" AS ENUM ('PASTEL', 'BRIGHT', 'WHITE', 'WARM');

-- CreateEnum
CREATE TYPE "BouquetSize" AS ENUM ('CLASSIC', 'DELUXE', 'GRAND');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageAlt" TEXT NOT NULL,
    "palette" "Palette" NOT NULL,
    "occasions" "Occasion"[],
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariant" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "size" "BouquetSize" NOT NULL,
    "stems" INTEGER NOT NULL,
    "priceCents" INTEGER NOT NULL,

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_productId_size_key" ON "ProductVariant"("productId", "size");

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

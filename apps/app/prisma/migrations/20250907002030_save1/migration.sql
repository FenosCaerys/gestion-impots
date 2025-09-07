/*
  Warnings:

  - A unique constraint covering the columns `[parcelId]` on the table `Property` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "ParcelUsage" AS ENUM ('TERRAIN_NU', 'TERRAIN_BATI', 'COMMERCE', 'PROJET_EN_COURS', 'EXPLOITATION_AGRICOLE', 'AUTRE');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('M', 'F');

-- CreateEnum
CREATE TYPE "AdminAction" AS ENUM ('CREATE', 'UPDATE', 'DELETE', 'VIEW', 'EXPORT', 'IMPORT', 'LOGIN', 'LOGOUT');

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "parcelId" TEXT;

-- CreateTable
CREATE TABLE "Parcel" (
    "id" TEXT NOT NULL,
    "parcelNumber" TEXT NOT NULL,
    "lotNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "district" "District" NOT NULL,
    "arrondissement" TEXT,
    "ownerId" TEXT,
    "area" DOUBLE PRECISION NOT NULL,
    "shape" TEXT,
    "usage" "ParcelUsage" NOT NULL,
    "legalStatus" "LegalStatus" NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "estimatedTax" DOUBLE PRECISION,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Parcel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Owner" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "nationality" TEXT NOT NULL DEFAULT 'Ivoirienne',
    "birthDate" TIMESTAMP(3),
    "gender" "Gender",
    "ifu" TEXT,
    "npi" TEXT,
    "profession" TEXT,
    "phoneNumber" TEXT,
    "email" TEXT,
    "address" TEXT,
    "userId" TEXT,
    "totalParcels" INTEGER NOT NULL DEFAULT 0,
    "totalTaxAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminLog" (
    "id" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "action" "AdminAction" NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "oldValues" JSONB,
    "newValues" JSONB,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdminLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DashboardStats" (
    "id" TEXT NOT NULL,
    "period" TIMESTAMP(3) NOT NULL,
    "totalParcels" INTEGER NOT NULL DEFAULT 0,
    "totalOwners" INTEGER NOT NULL DEFAULT 0,
    "totalUsers" INTEGER NOT NULL DEFAULT 0,
    "totalPayments" INTEGER NOT NULL DEFAULT 0,
    "totalTaxAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalPaidAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalPendingAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "statsPerDistrict" JSONB,
    "statsPerPropertyType" JSONB,
    "growthRate" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DashboardStats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Parcel_district_idx" ON "Parcel"("district");

-- CreateIndex
CREATE INDEX "Parcel_ownerId_idx" ON "Parcel"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "Parcel_parcelNumber_lotNumber_key" ON "Parcel"("parcelNumber", "lotNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Owner_ifu_key" ON "Owner"("ifu");

-- CreateIndex
CREATE UNIQUE INDEX "Owner_npi_key" ON "Owner"("npi");

-- CreateIndex
CREATE UNIQUE INDEX "Owner_userId_key" ON "Owner"("userId");

-- CreateIndex
CREATE INDEX "Owner_nationality_idx" ON "Owner"("nationality");

-- CreateIndex
CREATE INDEX "Owner_ifu_idx" ON "Owner"("ifu");

-- CreateIndex
CREATE INDEX "Owner_npi_idx" ON "Owner"("npi");

-- CreateIndex
CREATE INDEX "AdminLog_adminId_idx" ON "AdminLog"("adminId");

-- CreateIndex
CREATE INDEX "AdminLog_action_idx" ON "AdminLog"("action");

-- CreateIndex
CREATE INDEX "AdminLog_entity_idx" ON "AdminLog"("entity");

-- CreateIndex
CREATE INDEX "AdminLog_createdAt_idx" ON "AdminLog"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "DashboardStats_period_key" ON "DashboardStats"("period");

-- CreateIndex
CREATE INDEX "DashboardStats_period_idx" ON "DashboardStats"("period");

-- CreateIndex
CREATE UNIQUE INDEX "Property_parcelId_key" ON "Property"("parcelId");

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_parcelId_fkey" FOREIGN KEY ("parcelId") REFERENCES "Parcel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parcel" ADD CONSTRAINT "Parcel_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Owner" ADD CONSTRAINT "Owner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminLog" ADD CONSTRAINT "AdminLog_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

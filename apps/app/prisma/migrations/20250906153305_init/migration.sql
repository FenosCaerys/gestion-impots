-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('BATI', 'COMMERCIAL', 'INDUSTRIEL', 'AGRICOLE', 'TERRAIN_NU');

-- CreateEnum
CREATE TYPE "PropertyUsage" AS ENUM ('RESIDENCE_PRINCIPALE', 'RESIDENCE_SECONDAIRE', 'LOCATION', 'COMMERCIAL', 'INDUSTRIEL', 'AGRICOLE');

-- CreateEnum
CREATE TYPE "LegalStatus" AS ENUM ('TITRE_FONCIER', 'CERTIFICAT_PROPRIETE', 'ACTE_VENTE', 'HERITAGE');

-- CreateEnum
CREATE TYPE "District" AS ENUM ('PLATEAU', 'COCODY', 'YOPOUGON', 'ABOBO', 'ADJAME', 'ATTECOUBE', 'TREICHVILLE', 'MARCORY', 'KOUMASSI', 'PORT_BOUET', 'BINGERVILLE', 'SONGON');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('MTN_MOMO', 'ORANGE_MONEY', 'MOOV_MONEY', 'WAVE', 'BANK_TRANSFER', 'CASH');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('PAYMENT_DUE', 'PAYMENT_SUCCESS', 'PAYMENT_FAILED', 'TAX_REMINDER', 'PROFILE_INCOMPLETE', 'SYSTEM');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "profilePictureId" TEXT,
    "image" TEXT,
    "username" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "password" TEXT,
    "hasPassword" BOOLEAN NOT NULL DEFAULT false,
    "lastLocale" TEXT,
    "otpSecret" TEXT NOT NULL DEFAULT '',
    "otpMnemonic" TEXT NOT NULL DEFAULT '',
    "otpVerified" BOOLEAN NOT NULL DEFAULT false,
    "npi" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "phoneNumber" TEXT,
    "address" TEXT,
    "city" TEXT,
    "postalCode" TEXT,
    "profileCompletionStep" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "address" TEXT NOT NULL,
    "district" "District" NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "propertyType" "PropertyType" NOT NULL,
    "usage" "PropertyUsage" NOT NULL,
    "legalStatus" "LegalStatus" NOT NULL,
    "estimatedValue" DOUBLE PRECISION,
    "purchasePrice" DOUBLE PRECISION,
    "purchaseDate" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "propertyId" TEXT,
    "taxCalculationId" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'XOF',
    "paymentMethod" "PaymentMethod" NOT NULL,
    "paymentReference" TEXT NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "paidAt" TIMESTAMP(3),
    "taxYear" INTEGER NOT NULL,
    "externalId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaxCalculation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "propertyId" TEXT,
    "taxYear" INTEGER NOT NULL,
    "baseAmount" DOUBLE PRECISION NOT NULL DEFAULT 50000,
    "districtMultiplier" DOUBLE PRECISION NOT NULL,
    "areaMultiplier" DOUBLE PRECISION NOT NULL,
    "usageMultiplier" DOUBLE PRECISION NOT NULL,
    "statusMultiplier" DOUBLE PRECISION NOT NULL,
    "calculatedAmount" DOUBLE PRECISION NOT NULL,
    "finalAmount" DOUBLE PRECISION NOT NULL,
    "calculationData" JSONB,
    "isEstimate" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TaxCalculation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "paymentId" TEXT,
    "propertyId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaxConfig" (
    "id" TEXT NOT NULL,
    "baseAmount" DOUBLE PRECISION NOT NULL DEFAULT 50000,
    "taxYear" INTEGER NOT NULL,
    "plateauMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.4,
    "cocodyMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.3,
    "yopougonMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.1,
    "aboboMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "adjameMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.1,
    "attecoubeMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.2,
    "treichvilleMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.3,
    "marcoryMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.2,
    "koumassiMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.1,
    "portBouetMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.5,
    "bingervilleMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "songonMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 0.9,
    "area0to200Multiplier" DOUBLE PRECISION NOT NULL DEFAULT 0.8,
    "area200to500Multiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "area500to800Multiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.2,
    "area800to1200Multiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.4,
    "area1200to2000Multiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.6,
    "area2000PlusMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 2.0,
    "residencePrincipaleMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "residenceSecondaireMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.1,
    "locationMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.2,
    "commercialMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 2.0,
    "industrielMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.8,
    "agricoleMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 0.7,
    "titreFoncierMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.2,
    "certificatMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.1,
    "acteVenteMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "heritageMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 0.9,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TaxConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_profilePictureId_key" ON "User"("profilePictureId");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_npi_key" ON "User"("npi");

-- CreateIndex
CREATE INDEX "Property_userId_idx" ON "Property"("userId");

-- CreateIndex
CREATE INDEX "Property_district_idx" ON "Property"("district");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_paymentReference_key" ON "Payment"("paymentReference");

-- CreateIndex
CREATE INDEX "Payment_userId_idx" ON "Payment"("userId");

-- CreateIndex
CREATE INDEX "Payment_status_idx" ON "Payment"("status");

-- CreateIndex
CREATE INDEX "Payment_taxYear_idx" ON "Payment"("taxYear");

-- CreateIndex
CREATE INDEX "Payment_paymentReference_idx" ON "Payment"("paymentReference");

-- CreateIndex
CREATE INDEX "TaxCalculation_userId_idx" ON "TaxCalculation"("userId");

-- CreateIndex
CREATE INDEX "TaxCalculation_taxYear_idx" ON "TaxCalculation"("taxYear");

-- CreateIndex
CREATE UNIQUE INDEX "TaxCalculation_userId_propertyId_taxYear_key" ON "TaxCalculation"("userId", "propertyId", "taxYear");

-- CreateIndex
CREATE INDEX "Notification_userId_idx" ON "Notification"("userId");

-- CreateIndex
CREATE INDEX "Notification_isRead_idx" ON "Notification"("isRead");

-- CreateIndex
CREATE INDEX "Notification_type_idx" ON "Notification"("type");

-- CreateIndex
CREATE UNIQUE INDEX "TaxConfig_taxYear_key" ON "TaxConfig"("taxYear");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_taxCalculationId_fkey" FOREIGN KEY ("taxCalculationId") REFERENCES "TaxCalculation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaxCalculation" ADD CONSTRAINT "TaxCalculation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaxCalculation" ADD CONSTRAINT "TaxCalculation_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

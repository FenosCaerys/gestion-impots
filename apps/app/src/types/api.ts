// Types pour les API routes
import { District, PropertyType, PropertyUsage, LegalStatus, PaymentMethod, PaymentStatus } from "@prisma/client"

export interface CreatePropertyRequest {
  userId: string
  title: string
  address: string
  district: District
  area: number
  propertyType: PropertyType
  usage: PropertyUsage
  legalStatus: LegalStatus
  description?: string
}

export interface UpdatePropertyRequest {
  id: string
  title?: string
  address?: string
  district?: District
  area?: number
  propertyType?: PropertyType
  usage?: PropertyUsage
  legalStatus?: LegalStatus
  description?: string
}

export interface CreateTaxCalculationRequest {
  propertyId: string
  taxYear: number
  baseAmount?: number
  districtMultiplier?: number
  areaMultiplier?: number
  usageMultiplier?: number
  statusMultiplier?: number
  calculatedAmount: number
  finalAmount: number
  isEstimate?: boolean
}

export interface UpdateTaxCalculationRequest {
  id: string
  taxYear?: number
  baseAmount?: number
  districtMultiplier?: number
  areaMultiplier?: number
  usageMultiplier?: number
  statusMultiplier?: number
  calculatedAmount?: number
  finalAmount?: number
  isEstimate?: boolean
}

export interface CreatePaymentRequest {
  userId: string
  taxCalculationId: string
  amount: number
  paymentMethod: PaymentMethod
  paymentReference: string
  status: PaymentStatus
  paidAt?: string
  taxYear: number
}

export interface UpdatePaymentRequest {
  id: string
  amount?: number
  paymentMethod?: PaymentMethod
  paymentReference?: string
  status?: PaymentStatus
  paidAt?: string
  taxYear?: number
}

export interface UpdateUserRequest {
  firstName?: string
  lastName?: string
  phoneNumber?: string
  npi?: string
  profileCompletionStep?: number
}

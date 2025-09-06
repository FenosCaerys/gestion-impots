export interface PaymentProfileFormData {
  firstName: string
  lastName: string
  email: string
  birthday: string // Format YYYY-MM-DD
  nationality: string
  countryOfResidence: string
  address: {
    addressLine1: string
    addressLine2?: string
    city: string
    region?: string
    postalCode: string
    country: string
  }
  termsAccepted: boolean
}

export interface CountryOption {
  code: string
  name: string
}

export const COUNTRIES: CountryOption[] = []

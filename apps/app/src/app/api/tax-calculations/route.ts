import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { CreateTaxCalculationRequest, UpdateTaxCalculationRequest } from "@/types/api"

const prisma = new PrismaClient()

// GET /api/tax-calculations - Récupérer les calculs d'impôts d'une propriété
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const propertyId = searchParams.get("propertyId")
    const userId = searchParams.get("userId")

    if (!propertyId && !userId) {
      return NextResponse.json(
        { error: "ID de propriété ou ID utilisateur requis" },
        { status: 400 }
      )
    }

    let taxCalculations

    if (propertyId) {
      taxCalculations = await prisma.taxCalculation.findMany({
        where: {
          propertyId: propertyId || undefined,
        },
        include: {
          property: true,
          payments: {
            orderBy: {
              createdAt: "desc",
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      })
    } else if (userId) {
      taxCalculations = await prisma.taxCalculation.findMany({
        where: {
          userId: userId || undefined,
        },
        include: {
          property: true,
          payments: {
            orderBy: {
              createdAt: "desc",
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      })
    }

    return NextResponse.json(taxCalculations)
  } catch (error) {
    console.error("Erreur lors de la récupération des calculs d'impôts:", error)
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    )
  }
}

// POST /api/tax-calculations - Créer un nouveau calcul d'impôt
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as CreateTaxCalculationRequest
    const {
      propertyId,
      taxYear,
      baseAmount,
      districtMultiplier,
      areaMultiplier,
      usageMultiplier,
      statusMultiplier,
      calculatedAmount,
      finalAmount,
      isEstimate,
    } = body

    // Validation des champs requis
    if (!propertyId || !taxYear || !calculatedAmount || !finalAmount) {
      return NextResponse.json(
        { error: "Propriété, année et montants requis" },
        { status: 400 }
      )
    }

    const taxCalculation = await prisma.taxCalculation.create({
      data: {
        userId: propertyId, // Temporary - should get from property
        propertyId,
        taxYear,
        baseAmount: parseFloat(baseAmount?.toString() || "50000"),
        districtMultiplier: parseFloat(districtMultiplier?.toString() || "1"),
        areaMultiplier: parseFloat(areaMultiplier?.toString() || "1"),
        usageMultiplier: parseFloat(usageMultiplier?.toString() || "1"),
        statusMultiplier: parseFloat(statusMultiplier?.toString() || "1"),
        calculatedAmount: parseFloat(calculatedAmount.toString()),
        finalAmount: parseFloat(finalAmount.toString()),
        isEstimate: isEstimate ?? true,
      },
    })

    return NextResponse.json(taxCalculation, { status: 201 })
  } catch (error) {
    console.error("Erreur lors de la création du calcul d'impôt:", error)
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    )
  }
}

// PUT /api/tax-calculations - Mettre à jour un calcul d'impôt
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json() as UpdateTaxCalculationRequest
    const { id, ...updateData } = body

    if (!id) {
      return NextResponse.json(
        { error: "ID du calcul d'impôt requis" },
        { status: 400 }
      )
    }

    const taxCalculation = await prisma.taxCalculation.update({
      where: { id },
      data: updateData,
    })

    return NextResponse.json(taxCalculation)
  } catch (error) {
    console.error("Erreur lors de la mise à jour du calcul d'impôt:", error)
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { CreatePropertyRequest, UpdatePropertyRequest } from "@/types/api"

const prisma = new PrismaClient()

// GET /api/properties - Récupérer les propriétés d'un utilisateur
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json(
        { error: "ID utilisateur requis" },
        { status: 400 }
      )
    }

    const properties = await prisma.property.findMany({
      where: {
        userId: userId,
      },
      include: {
        taxCalculations: {
          orderBy: {
            createdAt: "desc",
          },
          take: 1,
          include: {
            payments: {
              orderBy: {
                createdAt: "desc",
              },
              take: 1,
            },
          },
        },
      },
    })

    return NextResponse.json(properties)
  } catch (error) {
    console.error("Erreur lors de la récupération des propriétés:", error)
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    )
  }
}

// POST /api/properties - Créer une nouvelle propriété
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as CreatePropertyRequest
    const {
      userId,
      title,
      address,
      district,
      area,
      propertyType,
      usage,
      legalStatus,
      description,
    } = body

    // Validation des champs requis
    if (!userId || !title || !address || !district || !area || !propertyType || !usage || !legalStatus) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis" },
        { status: 400 }
      )
    }

    const property = await prisma.property.create({
      data: {
        userId,
        title,
        address,
        district,
        area: parseFloat(area.toString()),
        propertyType,
        usage,
        legalStatus,
        description,
      },
    })

    return NextResponse.json(property, { status: 201 })
  } catch (error) {
    console.error("Erreur lors de la création de la propriété:", error)
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    )
  }
}

// PUT /api/properties - Mettre à jour une propriété
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json() as UpdatePropertyRequest
    const { id, ...updateData } = body

    if (!id) {
      return NextResponse.json(
        { error: "ID de la propriété requis" },
        { status: 400 }
      )
    }

    const property = await prisma.property.update({
      where: { id },
      data: updateData,
    })

    return NextResponse.json(property)
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la propriété:", error)
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    )
  }
}

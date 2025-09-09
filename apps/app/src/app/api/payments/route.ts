import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { CreatePaymentRequest, UpdatePaymentRequest } from "@/types/api"

const prisma = new PrismaClient()

// GET /api/payments - Récupérer les paiements d'un utilisateur
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")
    const taxCalculationId = searchParams.get("taxCalculationId")

    if (!userId && !taxCalculationId) {
      return NextResponse.json(
        { error: "ID utilisateur ou ID calcul d'impôt requis" },
        { status: 400 }
      )
    }

    let payments: any[]

    if (taxCalculationId) {
      payments = await prisma.payment.findMany({
        where: {
          taxCalculationId: taxCalculationId,
        },
        include: {
          taxCalculation: {
            include: {
              property: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      })
    } else if (userId) {
      payments = await prisma.payment.findMany({
        where: {
          taxCalculation: {
            property: {
              userId: userId,
            },
          },
        },
        include: {
          taxCalculation: {
            include: {
              property: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      })
    } else {
      // This case should not happen due to the check above, but TypeScript needs it
      payments = []
    }

    return NextResponse.json(payments)
  } catch (error) {
    console.error("Erreur lors de la récupération des paiements:", error)
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    )
  }
}

// POST /api/payments - Créer un nouveau paiement (géré manuellement par l'admin)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as CreatePaymentRequest
    const {
      userId,
      taxCalculationId,
      amount,
      paymentMethod,
      paymentReference,
      status,
      paidAt,
      taxYear,
    } = body

    // Validation des champs requis
    if (!userId || !taxCalculationId || !amount || !paymentMethod || !paymentReference || !taxYear) {
      return NextResponse.json(
        { error: "Utilisateur, calcul d'impôt, montant, méthode, référence et année requis" },
        { status: 400 }
      )
    }

    const payment = await prisma.payment.create({
      data: {
        userId,
        taxCalculationId,
        amount: parseFloat(amount.toString()),
        paymentMethod,
        paymentReference,
        status,
        paidAt: paidAt ? new Date(paidAt) : null,
        taxYear,
      },
    })

    return NextResponse.json(payment, { status: 201 })
  } catch (error) {
    console.error("Erreur lors de la création du paiement:", error)
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    )
  }
}

// PUT /api/payments - Mettre à jour un paiement (pour changer le statut manuellement)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json() as UpdatePaymentRequest
    const { id, ...updateData } = body

    if (!id) {
      return NextResponse.json(
        { error: "ID du paiement requis" },
        { status: 400 }
      )
    }

    // Si le statut passe à COMPLETED et qu'il n'y a pas de date de paiement, l'ajouter
    if (updateData.status === "COMPLETED" && !updateData.paidAt) {
      updateData.paidAt = new Date().toISOString()
    }

    const payment = await prisma.payment.update({
      where: { id },
      data: {
        ...updateData,
        paidAt: updateData.paidAt ? new Date(updateData.paidAt) : undefined,
      },
    })

    return NextResponse.json(payment)
  } catch (error) {
    console.error("Erreur lors de la mise à jour du paiement:", error)
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    )
  }
}

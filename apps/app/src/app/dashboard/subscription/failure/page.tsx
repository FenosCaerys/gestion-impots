"use client"

import React, { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { AlertTriangle, ArrowLeft } from "lucide-react"

import { Button } from "@nextui-org/button"
import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Divider } from "@nextui-org/divider"
import { Spinner } from "@nextui-org/spinner"

function SubscriptionFailureContent() {
  const searchParams = useSearchParams()
  const reason = searchParams.get("reason")

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-10rem)] max-w-2xl items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <Card className="w-full overflow-hidden border-t-4 border-danger shadow-xl">
        <CardHeader className="justify-center bg-danger-50 p-6">
          <AlertTriangle className="size-16 text-danger" strokeWidth={1.5} />
        </CardHeader>
        <CardBody className="flex flex-col items-center p-8 text-center sm:p-12">
          <h1 className="mb-3 text-3xl font-semibold text-gray-800">Paiement échoué</h1>
          <p className="mb-6 text-lg font-medium text-danger-700">
            Nous n&apos;avons pas pu finaliser votre abonnement.
          </p>

          {reason && (
            <div className="mb-6 rounded-lg bg-danger-50 p-4 text-danger-700">
              <p className="font-medium">Raison :</p>
              <p>{reason}</p>
            </div>
          )}

          <p className="mb-10 max-w-md text-default-600">
            Votre carte n&apos;a pas été débitée. Vous pouvez réessayer avec une autre méthode de paiement ou contacter
            notre support si le problème persiste.
          </p>

          <Divider className="mx-auto my-6 w-1/2" />

          <div className="mt-6 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link href="/dashboard/plans" passHref>
              <Button color="primary" startContent={<ArrowLeft size={18} />} className="w-full sm:w-auto">
                Retour aux plans
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default function SubscriptionFailurePage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto flex min-h-[calc(100vh-10rem)] max-w-2xl items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
          <Card className="w-full shadow-xl">
            <CardBody className="flex flex-col items-center justify-center space-y-4 p-6">
              <Spinner size="lg" color="primary" />
              <p className="text-center text-gray-600">Chargement...</p>
            </CardBody>
          </Card>
        </div>
      }
    >
      <SubscriptionFailureContent />
    </Suspense>
  )
}

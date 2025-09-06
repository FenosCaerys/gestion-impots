import React from "react"
import Link from "next/link"
import { Clock, Home } from "lucide-react"

import { Button } from "@nextui-org/button"
import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Divider } from "@nextui-org/divider"
import { Spinner } from "@nextui-org/spinner"

export default function SubscriptionPendingPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-10rem)] max-w-2xl items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <Card className="w-full overflow-hidden border-t-4 border-warning shadow-xl">
        <CardHeader className="justify-center bg-warning-50 p-6">
          <Clock className="size-16 text-warning" strokeWidth={1.5} />
        </CardHeader>
        <CardBody className="flex flex-col items-center p-8 text-center sm:p-12">
          <h1 className="mb-3 text-3xl font-semibold text-gray-800">Paiement en cours</h1>
          <div className="mb-6 flex items-center justify-center">
            <Spinner color="warning" size="lg" className="mr-2" />
            <p className="text-lg font-medium text-warning-700">Traitement en cours...</p>
          </div>

          <p className="mb-10 max-w-md text-default-600">
            Votre paiement est en cours de traitement. Cela peut prendre quelques minutes. Vous recevrez un email dès
            que votre abonnement sera activé.
          </p>

          <Divider className="mx-auto my-6 w-1/2" />

          <div className="mt-6 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link href="/dashboard" passHref>
              <Button color="primary" startContent={<Home size={18} />} className="w-full sm:w-auto">
                Retour à l&apos;accueil
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

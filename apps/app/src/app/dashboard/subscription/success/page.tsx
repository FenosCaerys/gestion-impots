import React from "react"
import Link from "next/link"
import { CheckCircle2, Rocket, Settings } from "lucide-react"

import { Button } from "@nextui-org/button"
import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Divider } from "@nextui-org/divider"

export default function SubscriptionSuccessPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-10rem)] max-w-2xl items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <Card className="w-full overflow-hidden border-t-4 border-success shadow-xl">
        <CardHeader className="justify-center bg-success-50 p-6">
          <CheckCircle2 className="size-16 text-success" strokeWidth={1.5} />
        </CardHeader>
        <CardBody className="flex flex-col items-center p-8 text-center sm:p-12">
          <h1 className="mb-3 text-3xl font-semibold text-gray-800">Félicitations !</h1>
          <p className="mb-6 text-lg font-medium text-success-700">Votre abonnement est activé.</p>

          <p className="mb-10 max-w-md text-default-600">
            Vous avez maintenant accès à toutes les fonctionnalités premium incluses dans votre plan. Prêt à démarrer ?
          </p>

          <Divider className="mx-auto my-6 w-1/2" />

          <div className="mt-6 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link href="/dashboard" passHref>
              <Button color="primary" startContent={<Rocket size={18} />} className="w-full sm:w-auto">
                Accéder à mon espace
              </Button>
            </Link>
            <Link href="/dashboard/plans" passHref>
              <Button variant="ghost" startContent={<Settings size={18} />} className="w-full sm:w-auto">
                Gérer mon abonnement
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

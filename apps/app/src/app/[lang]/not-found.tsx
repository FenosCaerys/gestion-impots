import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"

import { i18n } from "@/lib/i18n-config"

import UIProvider from "./ui-provider"

export const dynamic = "force-dynamic"

export default function NotFound({ params }: { params?: { lang: string } }) {
  return (
    <html lang={params?.lang ?? i18n.defaultLocale}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <UIProvider>
          <main className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-6 px-4">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-foreground">404</h1>
              <h2 className="mt-4 text-2xl font-semibold text-foreground">Page non trouvée</h2>
              <p className="mt-2 text-lg text-foreground/60">
                La page que vous recherchez n'existe pas.
              </p>
            </div>
            <Button as={Link} href="/" color="primary" size="lg">
              Retour à l'accueil
            </Button>
          </main>
        </UIProvider>
      </body>
    </html>
  )
}

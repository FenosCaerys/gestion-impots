import { ReactNode } from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cada-Terra",
  description: "Application de gestion des impôts fonciers",
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}

import { ReactNode } from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cada-Terra",
  description: "Application de gestion des impôts fonciers",
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return children
}

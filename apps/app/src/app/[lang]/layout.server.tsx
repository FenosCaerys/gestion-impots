import { Metadata } from "next"

import { i18n, Locale } from "@/lib/i18n-config"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  if (!i18n.locales.includes(params.lang)) {
    params.lang = i18n.defaultLocale
  }
  return {
    title: "Cada-Terra",
    description: "Application de gestion des impôts fonciers",
  } 
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

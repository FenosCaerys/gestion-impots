import React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"

import { fontSans } from "@/lib/fonts"
import { i18n } from "@/lib/i18n-config"
import { cn } from "@/lib/utils"
import { logger } from "@gestion-impots/lib"

import "../globals.css"


export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  //? If locale is not found, return 404
  if (!i18n.locales.includes(params.lang)) {
    if (params.lang !== "_next") {
      logger.debug(`Locale not found: ${params.lang}`)
    }
    return notFound()
  }

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body
        className={cn("h-dvh min-h-dvh bg-background font-sans antialiased", fontSans.variable, fontSans.className)}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}

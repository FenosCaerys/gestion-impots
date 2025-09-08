"use client"
import React from "react"

import { NextAuthProvider } from "@/components/auth/provider"
import { ThemeProvider } from "@/components/theme/theme-provider"

import Toaster from "./toaster"
import UIProvider from "./ui-provider"

// RootProviders wraps the app with common client-side providers (theme, UI, toaster …).
// It is used by `client-providers.tsx` (and layouts) and must accept `lang` even if it
// does not use it directly yet — this leaves the door open for future i18n-aware
// providers.

export default function RootProviders({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  lang,
}: {
  children: React.ReactNode
  lang: string
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <NextAuthProvider>
        <UIProvider>
          {children}
          <Toaster />
        </UIProvider>
      </NextAuthProvider>
    </ThemeProvider>
  )
}

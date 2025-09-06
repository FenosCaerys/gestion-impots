"use client"

import NavSettings from "@/components/nav-settings"
import { Locale } from "@/lib/i18n-config"

export function ClientNavSettings({ lang }: { lang: Locale }) {
  return <NavSettings lang={lang} />
}

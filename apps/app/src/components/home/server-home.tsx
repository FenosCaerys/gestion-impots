"use client"

import { Locale } from "@/lib/i18n-config"

import { ClientHome } from "./client-home"

interface ServerHomeProps {
  dictionary: {
    homePage: {
      title: string
    }
    profile: string
  }
  lang: Locale
}

export function ServerHome({ dictionary, lang }: ServerHomeProps) {
  return <ClientHome dictionary={dictionary} lang={lang} />
}

"use client"

import NavSettings from "@/components/nav-settings"
import { Locale } from "@/lib/i18n-config"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"

interface ClientHomeProps {
  dictionary: {
    homePage: {
      title: string
    }
    profile: string
  }
  lang: Locale
}

export function ClientHome({ dictionary, lang }: ClientHomeProps) {
  return (
    <main className="container m-auto flex min-h-screen flex-1 flex-col items-center justify-center gap-3">
      <NavSettings lang={lang} />
      <h1 className="text-4xl font-bold">{dictionary.homePage.title}</h1>
      <nav className="flex flex-col items-center justify-center">
        <ul className="flex flex-row items-center justify-center gap-2">
          <li>
            <Button as={Link} href="/examples/profile" color="primary" variant="flat">
              {dictionary.profile}
            </Button>
          </li>
        </ul>
      </nav>
    </main>
  )
}

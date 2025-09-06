import { Locale } from "@/lib/i18n-config"

import { ClientButton } from "./client-button"
import { ClientNavSettings } from "./client-nav-settings"

interface HomePageProps {
  dictionary: {
    homePage: {
      title: string
    }
    profile: string
  }
  lang: Locale
}

export function HomePage({ dictionary, lang }: HomePageProps) {
  return (
    <main className="container m-auto flex min-h-screen flex-1 flex-col items-center justify-center gap-3">
      <ClientNavSettings lang={lang} />
      <h1 className="text-4xl font-bold">{dictionary.homePage.title}</h1>
      <nav className="flex flex-col items-center justify-center">
        <ul className="flex flex-row items-center justify-center gap-2">
          <li>
            <ClientButton href="/examples/profile" color="primary">
              {dictionary.profile}
            </ClientButton>
          </li>
        </ul>
      </nav>
    </main>
  )
}

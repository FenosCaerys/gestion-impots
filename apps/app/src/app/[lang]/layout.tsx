import React from "react"

import "../globals.css"

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className="h-dvh min-h-dvh bg-background font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

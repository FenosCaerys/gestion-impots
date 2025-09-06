import localFont from "next/font/local"

// Utiliser des polices locales au lieu de Google Fonts
export const fontSans = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
})

export const fontMono = localFont({
  src: [
    {
      path: "../../public/fonts/FiraCode-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/FiraCode-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
})

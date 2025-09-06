const path = require("path")

const { nextui } = require("@nextui-org/theme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ...["pages/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "app/**/*.{ts,tsx}", "src/**/*.{ts,tsx}"].map((p) =>
      path.join(__dirname, p)
    ),
    path.join(__dirname, "../..", "node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {
      colors: {
        muted: "hsl(var(--nextui-default-100))",
        "muted-foreground": "hsl(var(--nextui-default-500))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {},
      themes: {
        light: {
          layout: {},
          colors: {},
        },
      },
    }),
    // Removed tailwind-scrollbar-hide to use custom CSS solution instead
  ],
}


// import { ThemeSwitch } from "@/components/theme/theme-switch"

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="min-h-screen">
      {/* <nav className="fixed right-0 top-0 z-50 p-4">
        <ThemeSwitch />
      </nav> */}
      {children}
    </div>
  )
}

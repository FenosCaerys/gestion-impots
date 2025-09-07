// import { ThemeSwitch } from "@/components/theme/theme-switch"
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen">
        {/* <nav className="fixed right-0 top-0 z-50 p-4">
          <ThemeSwitch />
        </nav> */}
        {children}
      </div>
    </ProtectedRoute>
  );
}

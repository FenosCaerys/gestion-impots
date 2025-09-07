"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface SidebarContextType {
  isCollapsed: boolean
  toggleSidebar: () => void
  sidebarWidth: number
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

interface SidebarProviderProps {
  children: ReactNode | ((context: SidebarContextType) => ReactNode)
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const sidebarWidth = isCollapsed ? 64 : 256 // 16px * 4 = 64px, 64px * 4 = 256px

  const contextValue = { isCollapsed, toggleSidebar, sidebarWidth }

  return (
    <SidebarContext.Provider value={contextValue}>
      {typeof children === "function" ? children(contextValue) : children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

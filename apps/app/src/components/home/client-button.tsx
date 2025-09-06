"use client"

import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"

interface ClientButtonProps {
  href: string
  color: "primary" | "secondary" | "success" | "warning" | "danger"
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost"
  children: React.ReactNode
}

export function ClientButton({ href, color, variant = "flat", children }: ClientButtonProps) {
  return (
    <Button as={Link} href={href} color={color} variant={variant}>
      {children}
    </Button>
  )
}

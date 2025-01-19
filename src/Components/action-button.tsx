import React from 'react';
import { Button } from "./ui/button"
import { cn } from "../lib/utils"

interface ActionButtonProps {
  icon: React.ReactNode
  label: string
  onClick?: () => void
  variant?: "default" | "purple" | "red"
  className?: string
  subtitle?: string
}

declare global {
  interface Window {
    electronAPI?: {
      openFile: () => Promise<string | null>;
    }
  }
}

export function ActionButton({
  icon,
  label,
  onClick,
  variant = "default",
  className,
  subtitle
}: ActionButtonProps) {
  const baseStyles = "flex items-center space-x-3 px-6 py-4 rounded-lg w-full max-w-md"
  const variantStyles = {
    default: "bg-gray-100 hover:bg-gray-200",
    purple: "bg-purple-100 hover:bg-purple-200",
    red: "bg-red-50 hover:bg-red-100"
  }

  const handleClick = async () => {
    if (label === "Connect to File") {
      if (window.electronAPI && window.electronAPI.openFile) {
        try {
          const filePath = await window.electronAPI.openFile();
          if (filePath) {
            console.log("Selected file:", filePath);
            // Here you would typically update your app state with the file path
          }
        } catch (error) {
          console.error("Error opening file:", error);
        }
      } else {
        console.error("Electron API is not available");
      }
    }
    onClick?.();
  }

  return (
    <Button
      variant="ghost"
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={handleClick}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="text-left">
        <div className="font-medium">{label}</div>
        {subtitle && (
          <div className="text-xs text-muted-foreground">{subtitle}</div>
        )}
      </div>
    </Button>
  )
}


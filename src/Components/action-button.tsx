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

  return (
    <Button
      variant="ghost"
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="text-left border:white">
        <div className="font-medium">{label}</div>
        {subtitle && (
          <div className="text-xs text-muted-foreground">{subtitle}</div>
        )}
      </div>
    </Button>
  )
}


import React from 'react';
import  { useState } from "react";
import { Button } from "./ui/button"
import { cn } from "../lib/utils"

interface ActionButtonProps {
  icon: React.ReactNode
  label: string
  onClick?: (filePath?: string) => void
  variant?: "default" | "purple" | "red"
  className?: string
  subtitle?: string
  subtitleClassName?: string
}

export function ActionButton({
  icon,
  label,
  onClick,
  variant = "default",
  className,
  subtitle,
  subtitleClassName,
}: ActionButtonProps) {
  const baseStyles = "flex items-center space-x-3 px-6 py-4 rounded-lg w-full max-w-md"
  const variantStyles = {
    default: "bg-gray-100 hover:bg-gray-200",
    purple: "bg-purple-100 hover:bg-purple-200",
    red: "bg-red-50 hover:bg-red-100"
  }

  const [filePath, setFilePath] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [input, setInput] = useState('');

  let socket;
  const handleClick = async () => {
    if (label === "Connect to File") {
      socket = new WebSocket("ws://localhost:8080");

      socket.onopen = () => {
        console.log("Connected to WebSocket server");

        // Send message to Electron to open file dialog only when the button is clicked
        socket.send(JSON.stringify({ action: "openFile" }));
      };

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.filePath) {
          // If a file path is returned, store and display it
          setFilePath(data.filePath);
          setErrorMessage(null); // Clear previous error if any
          console.log("Selected file path:", data.filePath);
          if (onClick) {
            onClick(data.filePath);
          }
        } else if (data.error) {
          console.error("Error:", data.error);
          setErrorMessage(data.error);
        }
      };

      socket.onerror = (error) => {
        console.error("WebSocket error:", error);
        setErrorMessage("WebSocket connection error.");
      };

      socket.onclose = () => {
        console.log("Disconnected from WebSocket server");
      };
  }
  };
  

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
          <span className={`text-xs ${subtitleClassName || "text-muted-foreground"}`}>
          {subtitle}
          </span>
        )}
      </div>
    </Button>
  )
}


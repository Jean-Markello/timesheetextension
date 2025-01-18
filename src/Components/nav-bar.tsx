'use client'

import { Folder, FileSpreadsheet, Calendar } from 'lucide-react'
import { Link, useLocation } from "react-router-dom"
import { cn } from "../lib/utils"

export function NavBar() {
  const location = useLocation()

  return (
    <nav className="bg-[#B5D5E3] p-4 rounded-lg shadow-lg relative">
      <div className="flex space-x-4 relative">
        {/* Highlight Border */}
        <div
          className="absolute -top-[35.73%] -bottom-[35.43%] -left-[3.73%] right-[67.63%] rounded-lg border-2 border-blue-800 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${getActiveTabIndex(location.pathname) * 100}%)`
          }}
        />
        <NavLink to="/home" icon={<Folder className="w-5 h-5" />} label="HOME" currentPath={location.pathname} />
        <NavLink to="/fields" icon={<FileSpreadsheet className="w-5 h-5" />} label="Fields" currentPath={location.pathname} />
        <NavLink to="/scheduling" icon={<Calendar className="w-5 h-5" />} label="Scheduling" currentPath={location.pathname} />
      </div>
    </nav>
  )
}

interface NavLinkProps {
  to: string
  icon: React.ReactNode
  label: string
  currentPath: string
}

function NavLink({ to, icon, label, currentPath }: NavLinkProps) {
  const isActive = currentPath === to

  return (
    <Link
      to={to}
      className={cn(
        "relative flex items-center justify-center space-x-2 px-6 py-3 rounded-lg z-10 flex-1",
        "transition-all duration-300 ease-in-out",
        "hover:bg-[#B7C7E8]/20",
        isActive ? "bg-transparent" : "hover:shadow-md"
      )}
    >
      <div className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className={cn(
        "font-medium relative z-10 transition-colors duration-300",
        isActive ? "text-blue-800" : "text-blue-900"
      )}>
        {label}
      </span>
    </Link>
  )
}

function getActiveTabIndex(pathname: string) {
  switch (pathname) {
    case "/home": return 0;
    case "/fields": return 1;
    case "/scheduling": return 2;
    default: return 0;
  }
}

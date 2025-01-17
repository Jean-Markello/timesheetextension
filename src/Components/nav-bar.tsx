import { Folder, FileSpreadsheet, Calendar } from 'lucide-react'
import { Link } from "react-router-dom"

export function NavBar() {
  return (
    <nav className="bg-[#B5D5E3] p-4 rounded-lg">
      <div className="flex space-x-4">
        <Link
          to="/home"
          className="flex items-center space-x-2 bg-[#B7C7E8] px-6 py-3 rounded-lg"
        >
          <Folder className="w-5 h-5" />
          <span className="font-medium">HOME</span>
        </Link>
        <Link
          to="/fields"
          className="flex items-center space-x-2 px-6 py-3"
        >
          <FileSpreadsheet className="w-5 h-5" />
          <span className="font-large">Fields</span>
        </Link>
        <Link
          to="/scheduling"
          className="flex items-center space-x-2 px-6 py-3"
        >
          <Calendar className="w-5 h-5" />
          <span className="font-medium">Scheduling</span>
        </Link>
      </div>
    </nav>
  )
}


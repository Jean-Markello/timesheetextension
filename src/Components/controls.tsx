import { Pause, Play, Trash2 } from 'lucide-react'
import { Button } from "./ui/button"

export function Controls() {
  return (
    <div className="flex items-center justify-center space-x-6 mt-8">
      <Button
        variant="ghost"
        size="icon"
        className="w-12 h-12 rounded-full bg-red-100 hover:bg-red-200"
      >
        <Pause className="w-6 h-6 text-red-500" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="w-16 h-16 rounded-full bg-red hover:bg-gray-800"
      >
        <Play className="w-8 h-8 text-[#98E5D7] ml-1" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="w-12 h-12 rounded-full bg-red-100 hover:bg-red-200"
      >
        <Trash2 className="w-6 h-6 text-red-500" />
      </Button>
    </div>
  )
}
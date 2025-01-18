import { Pause, Play, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

export function Controls() {
  return (
    <div className="flex items-center justify-center space-y-5 space-x-6 mt-8">
      <Button
        variant="ghost"
        size="icon"
        className="w-12 h-12 mt-4 rounded-full bg-red-100 hover:bg-red-200 hover:scale-110 transition-transform duration-200 ease-out active:scale-95"
      >
        <Pause className="w-6 h-6 text-red-500 transition-colors duration-200 hover:text-red-700" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="w-16 h-16 rounded-full bg-gray-600 hover:bg-gray-800 hover:scale-110 transition-transform duration-200 ease-out active:scale-95"
      >
        <Play className="w-8 h-8 text-[#98E5D7] ml-1 transition-transform duration-200 hover:rotate-90" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="w-12 h-12 rounded-full bg-red-100 hover:bg-red-200 hover:scale-110 transition-transform duration-200 ease-out active:scale-95"
      >
        <Trash2 className="w-6 h-6 text-red-500 transition-colors duration-200 hover:text-red-700" />
      </Button>
    </div>
  );
}

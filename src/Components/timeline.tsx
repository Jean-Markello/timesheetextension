import { Folder, FileSpreadsheet, FileText, Mic } from 'lucide-react'
import { ActionButton } from "./action-button"

export function Timeline() {
  return (
    <div className="relative py-8">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200" />
      
      <div className="space-y-12">
        {/* Step 1 */}
        <div className="flex items-center">
          <div className="w-1/2 pr-8">
            <ActionButton
              icon={<Folder className="w-6 h-6" />}
              label="Connect to File"
              subtitle="No file selected"
            />
          </div>
          <div className="relative z-10">
            <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
              1
            </div>
          </div>
          <div className="w-1/2" />
        </div>

        {/* Step 2 */}
        <div className="flex items-center">
          <div className="w-1/2" />
          <div className="relative z-10">
            <div className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center">
              2
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <ActionButton
              icon={<FileSpreadsheet className="w-6 h-6" />}
              label="Add fields to Excel"
              subtitle="4 Current Fields"
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-center">
          <div className="w-1/2 pr-8">
            <ActionButton
              icon={<FileText className="w-6 h-6" />}
              label="Preview File"
              variant="purple"
            />
          </div>
          <div className="relative z-10">
            <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center">
              3
            </div>
          </div>
          <div className="w-1/2" />
        </div>

        {/* Step 4 */}
        <div className="flex items-center">
          <div className="w-1/2" />
          <div className="relative z-10">
            <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
              4
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <ActionButton
              icon={<Mic className="w-6 h-6" />}
              label="Connect Microphone"
              variant="default"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

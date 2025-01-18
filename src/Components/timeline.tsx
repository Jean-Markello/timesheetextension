import React, { useState } from "react";
import { Folder, FileSpreadsheet, FileText } from "lucide-react";
import { ActionButton } from "./action-button";

export function Timeline() {
  const [hoveredStep, setHoveredStep] = useState(null);

  const handleMouseEnter = (step) => {
    setHoveredStep(step);
  };

  const handleMouseLeave = () => {
    setHoveredStep(null);
  };

  return (
    <div className="relative py-1">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-2 bottom-10 h-[268px] w-0.5 bg-blue-200" />

      <div className="space-y-12 text-black">
        {/* Step 1 */}
        <div className="flex items-center">
          <div
            className="w-1/2 pr-4 text-black"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <ActionButton
              icon={<Folder className="w-6 h-6" />}
              label="Connect to File"
              subtitle=""
              className="transform hover:scale-105 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            />
          </div>
          <div className="relative z-10">
            <div
              className={`w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center transform transition duration-300 ease-in-out ${
                hoveredStep === 1 ? "scale-125 shadow-lg" : ""
              }`}
            >
              1
            </div>
          </div>
          <div className="w-1/2" />
        </div>

        {/* Step 2 */}
        <div className="flex items-center">
          <div className="w-1/2" />
          <div
            className="relative z-10"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`w-8 h-8 bg-red-200 rounded-full flex items-center justify-center transform transition duration-300 ease-in-out ${
                hoveredStep === 2 ? "scale-125 shadow-lg" : ""
              }`}
            >
              2
            </div>
          </div>
          <div
            className="w-1/2 pl-4"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <ActionButton
              icon={<FileSpreadsheet className="w-6 h-6" />}
              label="Add fields"
              subtitle=""
              className="transform hover:scale-105 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-center">
          <div
            className="w-1/2 pr-4"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <ActionButton
              icon={<FileText className="w-6 h-6" />}
              label="Preview File"
              variant="purple"
              className="transform hover:scale-105 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            />
          </div>
          <div className="relative z-10">
            <div
              className={`w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center transform transition duration-300 ease-in-out ${
                hoveredStep === 3 ? "scale-125 shadow-lg" : ""
              }`}
            >
              3
            </div>
          </div>
          <div className="w-1/2" />
        </div>
      </div>
    </div>
  );
}

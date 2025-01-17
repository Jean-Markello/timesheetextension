// src/Home.tsx
//import { useState } from 'react';
//import { UserOutlined } from "@ant-design/icons";
import { Button } from "./ui/button"
//import { Flex } from 'reflexbox';
import { NavBar } from "./nav-bar"
import { Timeline } from "./timeline"
import { Controls } from "./controls"
import { Bell, Settings, User } from 'lucide-react'


function Home() {
/*   const [segment, setSegment] = useState("user1");
  const [filePath, setFilePath] = useState('');
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const setStartDateHandler = () => {
    const value = new Date();
    setStartDate(value);
    console.log("Start date:", value);
  }

  const setEndDateHandler = () => {  
    const value = new Date();
    setEndDate(value);
    console.log("Start End:", value);
  }

  const { TextArea } = Input;

  const fileChangeHandler = (value: string) => {
    setFilePath(value);
  }

  //Will create a service to handle fetch requests if there are more than one needed
  const sendPath = async () => {
    if(!filePath){
      alert('Please enter a file path');
      return;
    }
    
    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ filePath })
      });

      if (response.ok) {
        const data = await response.json();
        console.log("File path received successfully:", data.fullPath);
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.error);
        //need to review this section
      }
    } catch (error) {   // The handling of the error should be in the backend
    console.error("Error occurred while sending the file path:", error);
  }

  };

  const segmentChangeHandler = (value: string) => {
    setSegment(value);
  }; */

    return (
      <div className="min-h-screen bg-white p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header Icons */}
          <div className="flex justify-end space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5 text-yellow-400" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5 text-purple-500" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5 text-blue-400" />
            </Button>
          </div>
  
          {/* Navigation */}
          <NavBar />
  
          {/* Main Content */}
          <main className="bg-white rounded-lg p-6">
            <Timeline />
            <Controls />
          </main>
        </div>
      </div>
    )
}

export default Home;

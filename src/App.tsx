import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { NavBar } from "./Components/nav-bar"
import { Timeline } from "./Components/timeline"
import { Controls } from "./Components/controls"
import { Bell, Settings, User } from 'lucide-react'
import { Button } from "./Components/ui/button"
import { FieldsConfiguration} from "./Components/fields-config"

function Home() {
  return (
    <main className="bg-white rounded-lg p-6">
      <Timeline />
      <Controls />
    </main>
  )
}

function Scheduling() {
  return <div>Scheduling Page</div>
}

export default function App() {
  return (
    <Router>
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
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/fields" element={<FieldsConfiguration />} />
            <Route path="/scheduling" element={<Scheduling />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}


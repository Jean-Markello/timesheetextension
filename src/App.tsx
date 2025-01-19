import { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, useNavigate, useLocation } from "react-router-dom";
import { NavBar } from "./Components/nav-bar";
import { Timeline } from "./Components/timeline";
import { Controls } from "./Components/controls";
import { Bell, Settings, User } from 'lucide-react';
import { Button } from "./Components/ui/button";
import { FieldsConfiguration } from "./Components/fields-config";

function Home() {
  return (
    <main className="bg-white rounded-lg p-1">
      <Timeline />
      <Controls />
    </main>
  );
}

function Scheduling() {
  return <div>Scheduling Page</div>;
}

// Component to handle initial redirection
function RedirectOnMount() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate('/home'); // Redirect to /home only if at root
    }
  }, [location.pathname, navigate]);

  return null; // This component doesn't render anything
}

export default function App() {
  return (
    <Router>
      {/* Redirect component to ensure navigation */}
      <RedirectOnMount />

      <div className="min-h-screen bg-white p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header Icons */}
          <div className="flex justify-end space-x-4">
            <Button variant="ghost">
              <Bell className="w-5 h-5 text-yellow-400" />
            </Button>
            <Button variant="ghost">
              <Settings className="w-5 h-5 text-purple-500" />
            </Button>
            <Button variant="ghost">
              <User className="w-5 h-5 text-blue-400" />
            </Button>
          </div>

          {/* Navigation */}
          <NavBar />

          {/* Main Content */}
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/fields" element={<FieldsConfiguration />} />
            <Route path="/scheduling" element={<Scheduling />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

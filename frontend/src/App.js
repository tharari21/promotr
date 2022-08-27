import { useState, useEffect } from "react";
import Home from './pages';
import {Routes, Route} from 'react-router-dom'
import AuthForm from './components/Auth'
import './App.css'
import CityPage from './pages/CityPage'
import ClubPage from "./pages/ClubPage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState({})
  
  const toggleSidebar = () => setIsSidebarOpen((isOpen) => !isOpen);
  return (
    <div className="App">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<AuthForm type="login" />} />
        <Route path="/signup" element={<AuthForm type="signup" />} />
        <Route path="/city/:cityId" element={<CityPage />} />
        <Route path="/club/:clubId" element={<ClubPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

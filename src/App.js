import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar 
        isAuthenticated={isAuthenticated} 
        setIsAuthenticated={setIsAuthenticated}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <div className="container mx-auto px-4 py-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/dashboard" /> : 
            <Login setIsAuthenticated={setIsAuthenticated} />
          } />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
          } />
          <Route path="/users" element={
            isAuthenticated ? <Users /> : <Navigate to="/login" />
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;


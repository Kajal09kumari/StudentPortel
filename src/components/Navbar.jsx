import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setIsAuthenticated, darkMode, toggleDarkMode }) => {
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Student Portal
          </Link>
          {isAuthenticated && (
            <>
              <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Dashboard
              </Link>
              <Link to="/users" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Users
              </Link>
            </>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
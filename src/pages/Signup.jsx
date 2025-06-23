import { motion } from 'framer-motion';
import { FaUserGraduate, FaLock, FaEnvelope, FaUser } from 'react-icons/fa';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="bg-indigo-600 p-6 text-center">
          <div className="flex justify-center mb-4">
            <FaUserGraduate className="text-4xl text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Create Your Account</h2>
          <p className="text-indigo-100">Join our student community today</p>
        </div>

        <div className="p-8">
          <form>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                <FaUser className="mr-2 text-indigo-600" />
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                <FaEnvelope className="mr-2 text-indigo-600" />
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                <FaLock className="mr-2 text-indigo-600" />
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                placeholder="••••••••"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-all shadow-md"
            >
              Sign Up
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Already have an account?{' '}
              <a href="/login" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
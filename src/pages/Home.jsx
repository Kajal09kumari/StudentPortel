import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaChartLine } from 'react-icons/fa';
// import heroImage from '../assets/hero-image.jpg'; // Add your image

const Home = () => {
  const features = [
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Academic Tracking",
      description: "Monitor your grades and progress in real-time"
    },
    {
      icon: <FaBook className="text-3xl" />,
      title: "Course Management",
      description: "Organize your subjects and assignments"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Performance Analytics",
      description: "Get insights into your learning patterns"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Your <span className="text-indigo-600">Academic</span> Journey Starts Here
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              The ultimate platform to manage your student life, track progress, 
              and connect with your educational community.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
                Get Started
              </button>
              <button className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all">
                Learn More
              </button>
            </div>
          </div>
          {/* <div className="lg:w-1/2">
            <motion.img 
              src={heroImage} 
              alt="Students learning"
              className="rounded-xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div> */}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Why Choose Our Portal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
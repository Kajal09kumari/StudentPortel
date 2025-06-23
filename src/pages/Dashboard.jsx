import SummaryCard from '../components/SummaryCard';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SummaryCard 
          title="GPA" 
          value="9.85" 
          icon="📊" 
          color="bg-green-100 dark:bg-green-900" 
        />
        <SummaryCard 
          title="Attendance" 
          value="90%" 
          icon="✅" 
          color="bg-blue-100 dark:bg-blue-900" 
        />
        <SummaryCard 
          title="Subjects" 
          value="12/15" 
          icon="📚" 
          color="bg-purple-100 dark:bg-purple-900" 
        />
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Recent Activities</h2>
        <ul className="space-y-3">
          <li className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition">
            <span className="mr-3">📝</span>
            <span className="text-gray-700 dark:text-gray-300">Submitted Math assignment</span>
          </li>
          <li className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition">
            <span className="mr-3">🎯</span>
            <span className="text-gray-700 dark:text-gray-300">Achieved 95% in Science test</span>
          </li>
          <li className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition">
            <span className="mr-3">📅</span>
            <span className="text-gray-700 dark:text-gray-300">Upcoming History exam on Friday</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
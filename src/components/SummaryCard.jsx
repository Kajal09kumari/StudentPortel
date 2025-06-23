const SummaryCard = ({ title, value, icon, color }) => {
  return (
    <div className={`${color} p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-600 dark:text-gray-300">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{value}</h3>
        </div>
        <span className="text-3xl">{icon}</span>
      </div>
    </div>
  );
};

export default SummaryCard;
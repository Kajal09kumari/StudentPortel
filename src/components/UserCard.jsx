const UserCard = ({ user }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-1">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{user.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-1">
        <span className="font-medium">Email:</span> {user.email}
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-1">
        <span className="font-medium">Phone:</span> {user.phone}
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        <span className="font-medium">Website:</span>{' '}
        <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {user.website}
        </a>
      </p>
    </div>
  );
};

export default UserCard;
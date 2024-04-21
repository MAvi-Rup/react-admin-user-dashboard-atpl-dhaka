import userData from "../../data/data.json";

const UserListPage = () => {
  const users = userData.users;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users List</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="odd:bg-gray-100 even:bg-white">
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserListPage;


import { useState, useEffect } from "react";
function StaffMngmnt() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("Fetching users")
        let fetchTimeout = setTimeout(() => {
            fetch("http://192.168.13.155/test/fakeAPI.php")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
        }
        , 1000);

        return () => clearTimeout(fetchTimeout);
    });


  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        User Management
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">ID: {user.id}</span>
              <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-semibold">
                {user.role}
              </span>
            </div>

            <h2 className="text-xl font-semibold text-gray-800">
              {user.name}
            </h2>

            <p className="text-gray-600 mt-2 break-all">
              {user.email}
            </p>

            <button className="mt-6 w-full bg-gray-900 text-white py-2 rounded-xl hover:bg-gray-800 transition">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StaffMngmnt;
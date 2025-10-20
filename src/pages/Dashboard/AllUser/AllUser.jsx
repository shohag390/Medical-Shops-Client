import { useEffect } from "react";
import { useState } from "react";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // ✅ Delete User by ID
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deleted) {
          alert("User deleted successfully!");
          fetchUsers(); // refresh list
        } else {
          alert("Failed to delete the user!");
        }
      });
  };

  return (
    <div className="lg:px-[20px] md:px-[50px] px-[20px] py-[20px]">
      <h4 className="text-[18px] font-medium pb-[12px]">All Users</h4>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-left text-sm text-gray-600">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{item.email}</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded-full">
                    {item.role}
                  </span>
                </td>
                <td className="py-3 px-4 text-center flex justify-center gap-3">
                  <button
                    onClick={() => handleDelete(users._id)}
                    className="text-red-500 hover:underline"
                  >
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

export default AllUser;

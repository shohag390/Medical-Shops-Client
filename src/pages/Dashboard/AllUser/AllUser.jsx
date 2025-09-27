const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "Admin",
        status: "Active",
        avatar: "https://i.pravatar.cc/100?img=1"
    },
    {
        id: 2,
        name: "Emma Watson",
        email: "emma@example.com",
        role: "User",
        status: "Banned",
        avatar: "https://i.pravatar.cc/100?img=2"
    },
    {
        id: 3,
        name: "Michael Lee",
        email: "michael@example.com",
        role: "Seller",
        status: "Active",
        avatar: "https://i.pravatar.cc/100?img=3"
    },
];

const AllUser = () => {
    return (
        <div className='lg:px-[20px] md:px-[50px] px-[20px] py-[20px]'>
            <h4 className='text-[18px] font-medium pb-[12px]'>All Users</h4>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr className="text-left text-sm text-gray-600">
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Avatar</th>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Email</th>
                            <th className="py-3 px-4">Role</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((item, index) => (
                            <tr key={index} className="border-t hover:bg-gray-50">
                                <td className="py-3 px-4">{index + 1}</td>
                                <td className="py-3 px-4">
                                    <img className="w-[40px] h-[40px] rounded-full object-cover" src={item.avatar} alt={item.name} />
                                </td>
                                <td className="py-3 px-4 font-medium">{item.name}</td>
                                <td className="py-3 px-4">{item.email}</td>
                                <td className="py-3 px-4">
                                    <span className="px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded-full">
                                        {item.role}
                                    </span>
                                </td>
                                <td className="py-3 px-4">
                                    <span className={`px-2 py-1 text-xs rounded-full ${item.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                                        }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center flex justify-center gap-3">
                                    <button className="text-blue-500 hover:underline">Promote</button>
                                    <button className="text-red-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUser;

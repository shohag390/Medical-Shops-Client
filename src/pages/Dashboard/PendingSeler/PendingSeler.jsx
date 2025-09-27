const sellers = [
    { id: 1, name: "John Doe", email: "john@sellers.com", shop: "HealthPlus Pharmacy", status: "Active" },
    { id: 2, name: "Sarah Smith", email: "sarah@sellers.com", shop: "MediZone Store", status: "Pending" },
    { id: 3, name: "David Lee", email: "david@sellers.com", shop: "LifeCare Hub", status: "Pending" },
];

const PendingSellers = () => {

    const handleApprove = (id) => {
        console.log("Approve Seller with ID:", id);
        // Call API or update state
    };

    const handleDelete = (id) => {
        console.log("Delete Seller with ID:", id);
        // Call API or update state
    };

    const pendingSellers = sellers.filter(seller => seller.status === "Pending");

    return (
        <div className='lg:px-[20px] md:px-[50px] px-[20px] py-[20px]'>
            <h4 className='text-[18px] font-medium pb-[12px]'>Pending Sellers</h4>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr className="text-left text-sm text-gray-600">
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Seller Name</th>
                            <th className="py-3 px-4">Email</th>
                            <th className="py-3 px-4">Shop Name</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {pendingSellers.map((seller, index) => (
                            <tr key={seller.id} className="border-t hover:bg-gray-50">
                                <td className="py-3 px-4">{index + 1}</td>
                                <td className="py-3 px-4 font-medium">{seller.name}</td>
                                <td className="py-3 px-4">{seller.email}</td>
                                <td className="py-3 px-4">{seller.shop}</td>
                                <td className="py-3 px-4">
                                    <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-600 rounded-full">
                                        {seller.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center flex justify-center gap-3">
                                    <button onClick={() => handleApprove(seller.id)} className="text-green-500 hover:underline">Approve</button>
                                    <button onClick={() => handleDelete(seller.id)} className="text-red-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PendingSellers;

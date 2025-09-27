const categories = [
    { id: 1, name: "Medicine", image: "https://i.ibb.co/Y2YV6Gp/medicine.jpg" },
    { id: 2, name: "Medical Equipment", image: "https://i.ibb.co/1ngqf3J/equipment.jpg" },
    { id: 3, name: "Masks & Gloves", image: "https://i.ibb.co/6wQmYG3/mask.jpg" },
];

const AllCategories = () => {

    const handleEdit = (id) => {
        console.log("Edit category with ID:", id);
        // Navigate to edit page or open edit modal
    };

    const handleDelete = (id) => {
        console.log("Delete category with ID:", id);
        // Call delete API or update state
    };

    return (
        <div className='lg:px-[20px] md:px-[50px] px-[20px] py-[20px]'>
            <h4 className='text-[18px] font-medium pb-[12px]'>All Categories</h4>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr className="text-left text-sm text-gray-600">
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Image</th>
                            <th className="py-3 px-4">Category Name</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {categories.map((item) => (
                            <tr key={item.id} className="border-t hover:bg-gray-50">
                                <td className="py-3 px-4">{item.id}</td>
                                <td className="py-3 px-4">
                                    <img className="w-[45px] h-[45px] rounded-md object-cover" src={item.image} alt={item.name} />
                                </td>
                                <td className="py-3 px-4 font-medium">{item.name}</td>
                                <td className="py-3 px-4 text-center flex justify-center gap-3">
                                    <button
                                        onClick={() => handleEdit(item.id)}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
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
    )
}

export default AllCategories;
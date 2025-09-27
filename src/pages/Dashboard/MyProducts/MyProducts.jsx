import photo1 from '../../../assets/images/shop-4-4.jpg'
import photo2 from '../../../assets/images/shop-5-3.jpg'
import photo3 from '../../../assets/images/shop-4-16.jpg'

const mypersel = [
    { name: "Vitamin Bottol", categoris: "Surap", photo: photo1, price: 18 },
    { name: "ECG Messin", categoris: "Messin", photo: photo2, price: 12 },
    { name: "Surgary Mask", categoris: "Mask", photo: photo3, price: 20 },
    { name: "Surgary Mask", categoris: "Mask", photo: photo3, price: 20 },
    { name: "Surgary Mask", categoris: "Mask", photo: photo3, price: 20 }
];

const MyProducts = () => {
    return (
        <div className='lg:px-[20px] md:px-[50px] px-[20px] py-[20px]'>
            <h4 className='text-[18px] font-medium pb-[12px]'>My Product</h4>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr className="text-left text-sm text-gray-600">
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Image</th>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Category</th>
                            <th className="py-3 px-4">Price</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {mypersel.map((item, index) => (
                            <tr key={index} className="border-t hover:bg-gray-50">
                                <td className="py-3 px-4">{index + 1}</td>
                                <td className="py-3 px-4">
                                    <img className="w-[40px] h-[40px] rounded-md object-cover" src={item.photo} alt={item.name} />
                                </td>
                                <td className="py-3 px-4 font-medium">{item.name}</td>
                                <td className="py-3 px-4">
                                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                                        {item.categoris}
                                    </span>
                                </td>
                                <td className="py-3 px-4 font-semibold">${item.price}</td>
                                <td className="py-3 px-4 text-center flex justify-center gap-3">
                                    <button className="text-blue-500 hover:underline">Edit</button>
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

export default MyProducts;

import photo1 from '../../../assets/images/shop-4-4.jpg'
import photo2 from '../../../assets/images/shop-5-3.jpg'
import photo3 from '../../../assets/images/shop-4-16.jpg'

const orders = [
    {
        orderId: "ORD-1001",
        product: "Vitamin Bottle",
        customer: "John Doe",
        status: "Pending",
        total: 18,
        date: "2025-09-26",
        photo: photo1
    },
    {
        orderId: "ORD-1002",
        product: "ECG Machine",
        customer: "Alice Smith",
        status: "Shipped",
        total: 12,
        date: "2025-09-25",
        photo: photo2
    },
    {
        orderId: "ORD-1003",
        product: "Surgical Mask",
        customer: "Michael Lee",
        status: "Delivered",
        total: 20,
        date: "2025-09-24",
        photo: photo3
    },
];

const OrdersPage = () => {
    return (
        <div className='lg:px-[20px] md:px-[50px] px-[20px] py-[20px]'>
            <h4 className='text-[18px] font-medium pb-[12px]'>My Orders</h4>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr className="text-left text-sm text-gray-600">
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Order ID</th>
                            <th className="py-3 px-4">Product</th>
                            <th className="py-3 px-4">Customer</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Total</th>
                            <th className="py-3 px-4">Date</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((item, index) => (
                            <tr key={index} className="border-t hover:bg-gray-50">
                                <td className="py-3 px-4">{index + 1}</td>
                                <td className="py-3 px-4 font-medium">{item.orderId}</td>
                                <td className="py-3 px-4 flex items-center gap-2">
                                    <img className="w-[35px] h-[35px] rounded-md object-cover" src={item.photo} alt={item.product} />
                                    {item.product}
                                </td>
                                <td className="py-3 px-4">{item.customer}</td>
                                <td className="py-3 px-4">
                                    <span className={`px-2 py-1 text-xs rounded-full ${item.status === "Pending" ? "bg-yellow-100 text-yellow-600" :
                                        item.status === "Shipped" ? "bg-blue-100 text-blue-600" :
                                            "bg-green-100 text-green-600"
                                        }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 font-semibold">${item.total}</td>
                                <td className="py-3 px-4">{item.date}</td>
                                <td className="py-3 px-4 text-center flex justify-center gap-3">
                                    <button className="text-blue-500 hover:underline">View</button>
                                    <button className="text-red-500 hover:underline">Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrdersPage;

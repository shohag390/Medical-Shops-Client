const payments = [
    {
        transactionId: "TXN-988721",
        method: "Stripe",
        amount: 49.99,
        status: "Paid",
        date: "2025-09-24 14:30",
        customer: "John Doe"
    },
    {
        transactionId: "TXN-988722",
        method: "PayPal",
        amount: 19.99,
        status: "Pending",
        date: "2025-09-23 11:15",
        customer: "Emma Watson"
    },
    {
        transactionId: "TXN-988723",
        method: "Credit Card",
        amount: 29.99,
        status: "Failed",
        date: "2025-09-21 09:45",
        customer: "Alice Lee"
    },
];

const PaymentHistory = () => {
    return (
        <div className='lg:px-[20px] md:px-[50px] px-[20px] py-[20px]'>
            <h4 className='text-[18px] font-medium pb-[12px]'>Payment History</h4>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr className="text-left text-sm text-gray-600">
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Transaction ID</th>
                            <th className="py-3 px-4">Customer</th>
                            <th className="py-3 px-4">Method</th>
                            <th className="py-3 px-4">Amount</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Date</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {payments.map((item, index) => (
                            <tr key={index} className="border-t hover:bg-gray-50">
                                <td className="py-3 px-4">{index + 1}</td>
                                <td className="py-3 px-4 font-medium">{item.transactionId}</td>
                                <td className="py-3 px-4">{item.customer}</td>
                                <td className="py-3 px-4">{item.method}</td>
                                <td className="py-3 px-4 font-semibold">${item.amount}</td>
                                <td className="py-3 px-4">
                                    <span className={`px-2 py-1 text-xs rounded-full ${item.status === "Paid" ? "bg-green-100 text-green-600" :
                                            item.status === "Pending" ? "bg-yellow-100 text-yellow-600" :
                                                "bg-red-100 text-red-600"
                                        }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4">{item.date}</td>
                                <td className="py-3 px-4 text-center flex justify-center gap-3">
                                    <button className="text-blue-500 hover:underline">Invoice</button>
                                    <button className="text-red-500 hover:underline">Refund</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PaymentHistory;

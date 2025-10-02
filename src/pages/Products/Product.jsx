import React from 'react'

const Product = ({ product }) => {
    return (
        <div
            className="border rounded-lg shadow-lg p-4 flex flex-col justify-between hover:shadow-2xl transition duration-300"
        >
            <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded-md mb-4"
            />
            <div className="flex-1">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.description.substring(0, 60)}...</p>
                <p className="font-bold text-blue-600 mb-2">${product.price.toFixed(2)}</p>
            </div>
            <div className="flex gap-2 mt-2">
                <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition">
                    Add to Cart
                </button>
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition">
                    View More
                </button>
            </div>
        </div>
    )
}

export default Product;
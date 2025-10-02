import { useState } from "react";
import productsData from "../../../public/product.json";
import Product from "./Product";

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    // Pagination calculation
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(productsData.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="w-full container mx-auto lg:px-[100px] md:px-[50px] px-[20px]">
            <h1 className="text-2xl font-bold mb-6">All Products</h1>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentProducts.map((product, index) => <Product key={index} product={product} />)}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-2 items-center">
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
                >
                    Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-4 py-2 rounded-md ${currentPage === i + 1
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 hover:bg-gray-300"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-md ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Products;
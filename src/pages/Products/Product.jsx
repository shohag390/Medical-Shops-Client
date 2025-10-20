import { FaRegHeart, FaStar } from 'react-icons/fa';
import { MdOutlineZoomOutMap } from 'react-icons/md';
import Rating from 'react-rating';
import { Link } from 'react-router';

const Product = ({ product }) => {
    return (
        <div className='border-[1px] border-[#f0f0f0] hover:border-[#00a297] duration-500 p-[10px] rounded-md group cursor-pointer shadow relative'>
            {/* 👇 Make this parent container relative */}

            {/* Image */}
            <div className='flex items-center justify-center'>
                <img
                    className='h-[150px] group-hover:scale-[1.1] duration-500'
                    src={product?.image}
                    alt="image"
                />
            </div>

            {/* Action Buttons - Zoom & Wishlist */}
            <div className='absolute top-[10px] right-[10px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col gap-[8px]'>
                <Link
                    className='h-[28px] w-[28px] bg-[#fff] shadow hover:bg-[#d6f0ef] flex items-center justify-center rounded-full text-[#1a1a1a]'
                    to={`/product_details/${product?._id}`}
                >
                    <MdOutlineZoomOutMap className='text-[16px]' />
                </Link>
                <button className='h-[28px] w-[28px] bg-[#fff] shadow hover:bg-[#d6f0ef] flex items-center justify-center rounded-full text-[#1a1a1a]'>
                    <FaRegHeart className='text-[16px]' />
                </button>
            </div>

            {/* Product Name */}
            <h4 className='text-[#1a1a1a] group-hover:text-[#00a297] font-medium line-clamp-1 duration-500 mt-2'>
                {product?.name}
            </h4>

            {/* Rating */}
            <div className='pb-[2px]'>
                <Rating
                    readonly
                    initialRating={product?.rating}
                    emptySymbol={<FaStar className='text-gray-400' />}
                    fullSymbol={<FaStar className='text-yellow-500' />}
                />
            </div>

            {/* Price */}
            <div className='flex items-center gap-[8px] pb-[12px]'>
                <p className='text-[#6f6f6f] font-bold line-through text-[17px]'>
                    ${product?.price}
                </p>
                <p className='text-[#00a297] font-bold text-[17px]'>
                    ${product?.discountPrice}
                </p>
            </div>

            {/* Add to Cart */}
            <button className='w-full py-[8px] rounded-md bg-[#f0f0f0] hover:bg-[#00a287] duration-500 uppercase font-medium hover:text-[#fff]'>
                Add To Cart
            </button>
        </div>
    )
}

export default Product;
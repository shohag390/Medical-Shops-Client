import { FaCloudUploadAlt, FaHome, FaLuggageCart, FaUserAlt, FaUsers } from 'react-icons/fa';
import logo from '../../../assets/images/logo.webp';
import profilePic from '../../../assets/images/profilePic.png';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Link } from 'react-router';
import { MdCategory, MdOutlinePayment, MdPendingActions, MdProductionQuantityLimits } from 'react-icons/md';
import { GiSellCard } from 'react-icons/gi';
import { HiOutlineLogout } from 'react-icons/hi';

const DashboardNav = ({ setOpen, open }) => {
    console.log(open);


    return (
        <div className='h-[10vh] flex items-center justify-between sticky top-0 bg-gray-100 border-b-[1px] border-gray-200 lg:px-[20px] md:px-[50px] px-[20px]'>
            <div className=''>
                <Link className='lg:hidden' to="/">
                    <img className='lg:h-[40px] md:h-[35px] h-[30px]' src={logo} alt="" />
                </Link>
            </div>
            <div className='flex items-center gap-[20px]'>
                <img
                    className="h-[40px] w-[40px] rounded-full border border-gray-200"
                    src={profilePic}
                    alt="profile"
                />
                <button className='lg:hidden' onClick={() => setOpen(!open)}>
                    {
                        !open ? <IoMenu className='text-[25px]' /> : <IoClose className='text-[25px]' />
                    }
                </button>
            </div>


            {/* Phone Menu */}
            <nav className={`w-[60%] lg:hidden h-[90vh] bg-gray-100 flex flex-col justify-between absolute top-[10vh] duration-500 z-50 ${!open ? "-left-[100%]" : "left-0"}`}>
                <div className='h-[90vh] flex flex-col gap-[10px] lg:p-[20px] md:p-[50px] p-[20px]'>
                    <Link className='flex items-center gap-[20px] text-gray-700' to="/">
                        <FaHome />
                        <span>
                            Home
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-gray-700' to="myProduct">
                        <MdProductionQuantityLimits />
                        <span>
                            My Product
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-gray-700' to="order">
                        <FaLuggageCart />
                        <span>
                            Order
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-gray-700' to="paymentHistory">
                        <MdOutlinePayment />
                        <span>
                            Payment History
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-gray-700' to="bannerUpload">
                        <FaCloudUploadAlt />
                        <span>
                            Banner Upload
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-gray-700' to="allUser">
                        <FaUsers />
                        <span>
                            All User
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-gray-700' to="seller">
                        <GiSellCard />
                        <span>
                            Seller
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-gray-700' to="postCategoris">
                        <FaCloudUploadAlt />
                        <span>
                            Upload Categoris
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-gray-700' to="allCategoris">
                        <MdCategory />
                        <span>
                            All Categoris
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-gray-700' to="uploadProduct">
                        <FaCloudUploadAlt />
                        <span>
                            Upload Product
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-[#fff]' to="pendingSeler">
                        <MdPendingActions />
                        <span>
                            Pending Seler
                        </span>
                    </Link>
                </div>
                <div className='h-[10vh] flex items-center lg:px-[20px] md:px-[50px] px-[20px] border-t-[1px] border-gray-400'>
                    <button className='flex items-center justify-between w-full text-gray-700 font-medium'>
                        <span>
                            Logout
                        </span>
                        <HiOutlineLogout />
                    </button>
                </div>
            </nav>
        </div >
    )
}

export default DashboardNav;
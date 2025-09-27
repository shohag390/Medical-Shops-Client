import logo from '../assets/images/light-logo.webp';
import { Link, Outlet } from 'react-router';
import DashboardNav from '../pages/Dashboard/DashboardNav/DashboardNav';
import { FaCcAmazonPay, FaCloudUploadAlt, FaHome, FaLuggageCart, FaUserAlt, FaUsers } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import { MdCategory, MdOutlinePayment, MdPendingActions, MdProductionQuantityLimits } from 'react-icons/md';
import { GiSellCard } from 'react-icons/gi';
import { useState } from 'react';

const DashboardLayout = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='flex justify-between w-full'>
            <nav className="lg:w-[20%] hidden h-[100vh] bg-gray-700 lg:flex flex-col justify-between sticky top-0 left-0 z-50">
                <div className='h-[10vh] flex items-center px-[20px] border-b-[1px] border-gray-400'>
                    <Link to="/">
                        <img className='lg:h-[40px] md:h-[35px] h-[30px]' src={logo} alt="" />
                    </Link>
                </div>
                <div className='h-[80vh] flex flex-col gap-[10px] p-[20px]'>
                    <Link className='flex items-center gap-[20px] text-[#fff]' to="/">
                        <FaHome />
                        <span>
                            Home
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-[#fff]' to="myProduct">
                        <MdProductionQuantityLimits />
                        <span>
                            My Product
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-[#fff]' to="order">
                        <FaLuggageCart />
                        <span>
                            Order
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-[#fff]' to="paymentHistory">
                        <MdOutlinePayment />
                        <span>
                            Payment History
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-[#fff]' to="bannerUpload">
                        <FaCloudUploadAlt />
                        <span>
                            Banner Upload
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-[#fff]' to="allUser">
                        <FaUsers />
                        <span>
                            All User
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-[#fff]' to="seller">
                        <GiSellCard />
                        <span>
                            Seller
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-[#fff]' to="postCategoris">
                        <FaCloudUploadAlt />
                        <span>
                            Upload Categoris
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-[#fff]' to="allCategoris">
                        <MdCategory />
                        <span>
                            All Categoris
                        </span>
                    </Link>
                    <Link className='flex items-center gap-[20px] text-[#fff]' to="uploadProduct">
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
                <div className='h-[10vh] flex items-center px-[20px] border-t-[1px] border-gray-400'>
                    <button className='flex items-center justify-between w-full text-[#fff] font-medium'>
                        <span>
                            Logout
                        </span>
                        <HiOutlineLogout />
                    </button>
                </div>
            </nav>
            <div className='lg:w-[80%] w-full'>
                <DashboardNav setOpen={setOpen} open={open} />
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout;
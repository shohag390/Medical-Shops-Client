import logo from '../../assets/images/logo.webp';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdMarkEmailUnread, MdSettingsPhone } from 'react-icons/md';
import { Link } from 'react-router';
import { AiFillInstagram } from 'react-icons/ai';



const menu = [
    {
        id: 1,
        path: "/",
        name: "Home"
    },
    {
        id: 2,
        path: "/collection",
        name: "Collection"
    },
    {
        id: 3,
        path: "/blog",
        name: "Blog"
    },
    {
        id: 4,
        path: "/contacts",
        name: "Contact Us"
    },
]

const Navbar = () => {
    return (
        <header className='lg:h-[14vh] md:h-[12vh] h-[10vh] w-full container mx-auto'>
            <div className='bg-[#076cec] lg:h-[5vh] h-[4vh] flex items-center justify-between lg:px-[100px] md:px-[50px] px-[20px]'>
                <div className='flex items-center gap-[20px] text-[#fff]'>
                    <div className='md:flex md:items-center gap-[8px] hidden'>
                        <MdSettingsPhone className='text-[15px]' />
                        <p>+880 13153 90470</p>
                    </div>
                    <p className='md:flex hidden'>|</p>
                    <div className='md:flex md:items-center gap-[8px] hidden'>
                        <MdMarkEmailUnread className='text-[15px]' />
                        <p>shohag.webdev@gmail.com</p>
                    </div>
                    <p className='md:flex hidden'>|</p>
                    <Link to="/beASeller">
                        Be A Seller
                    </Link>
                </div>
                <div className='flex items-center md:gap-[20px] gap-[15px]'>
                    <div>
                        <a href="#">
                            <AiFillInstagram className='text-[18px] text-[#fff]' />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <FaTwitter className='text-[18px] text-[#fff]' />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <FaFacebook className='text-[18px] text-[#fff]' />
                        </a>
                    </div>
                </div>
            </div>
            <nav className='lg:h-[9vh] h-[8vh] border-b-[1px] border-gray-200 lg:px-[100px] md:px-[50px] px-[20px] flex items-center justify-between'>
                <Link to="/">
                    <img className='h-[40px]' src={logo} alt="" />
                </Link>

                {/* Manu Link */}

            </nav>
        </header>
    )
}

export default Navbar;
import logo from '../../assets/images/logo.webp';
import profilePic from '../../assets/images/profilePic.png';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdMarkEmailUnread, MdSettingsPhone } from 'react-icons/md';
import { Link, NavLink } from 'react-router';
import { AiFillInstagram } from 'react-icons/ai';
import { FaCartShopping } from 'react-icons/fa6';
import { useEffect, useRef, useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import useAuth from '../../hooks/useAuth';



const menu = [
    {
        id: 1,
        path: "/",
        name: "Home"
    },
    {
        id: 2,
        path: "/products",
        name: "Products"
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
    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [selected, setSelected] = useState("EN");
    const [openProfile, setOpenProfile] = useState(false);
    const menuRef = useRef(null);
    const { user, logOut } = useAuth();

    const handleSelect = (lang) => {
        setSelected(lang);
        setOpen(false);
    };

    const handleLogOut = () => {
        logOut()
            .then(result => { console.log(result) })
            .catch(error => console.log(error))
    }

    // Outside click handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenProfile(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className='lg:h-[14vh] md:h-[12vh] h-[11vh] w-full container mx-auto sticky top-0 left-0 z-50 bg-[#fff]'>
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
            <nav className='lg:h-[9vh] md:h-[8vh] h-[7vh] border-b-[1px] border-gray-200 lg:px-[100px] md:px-[50px] px-[20px] flex items-center justify-between'>
                {/* Logo Section */}
                <Link to="/">
                    <img className='lg:h-[40px] md:h-[35px] h-[30px]' src={logo} alt="" />
                </Link>
                {/* Manu Section */}
                <ul className='lg:flex lg:items-center lg:gap-[30px] hidden'>
                    {
                        menu?.map((link) => (
                            <li key={link?.id}>
                                <NavLink className={(className) => className?.isActive ? "text-[#076cec]" : "text-gray-700"} to={link?.path}>
                                    {link?.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                {/* Phone Manu Section */}
                <ul className={`md:h-[88vh] h-[89vh] w-full flex flex-col items-center justify-center gap-[20px] absolute md:top-[12vh] top-[11vh] bg-[#fff] lg:hidden duration-500 ${menuOpen ? "left-0" : "-left-[100%]"}`}>
                    {
                        menu?.map((link) => (
                            <li key={link?.id}>
                                <NavLink to={link?.path}>
                                    {link?.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                {/* Auth Section */}
                <div className='flex items-center lg:gap-[20px] gap-[15px]'>
                    <Link to="/cart">
                        <FaCartShopping className='lg:text-[23px] text-[20px] text-gray-700' />
                    </Link>
                    {/* English & Bangla */}
                    <div className="md:relative hidden md:inline-block text-left">
                        {/* Dropdown Button */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="inline-flex justify-center w-full rounded-md border-[1px] border-gray-200 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            {selected}
                            <svg
                                className="ml-2 -mr-1 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.18l3.71-3.95a.75.75 0 111.08 1.04l-4.25 4.52a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {/* Dropdown Menu */}
                        {open && (
                            <div className="absolute right-0 mt-2 w-28 rounded-md bg-white ring-1 ring-gray-200 ring-opacity-5">
                                <div className="py-1">
                                    <button
                                        onClick={() => handleSelect("EN")}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                    >
                                        English
                                    </button>
                                    <button
                                        onClick={() => handleSelect("BA")}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                    >
                                        বাংলা
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Login & Logout Button */}
                    {
                        !user ? (<div>
                            <Link to="/login">
                                <button className='flex justify-center rounded-md border-[1px] border-[#fff] md:px-[30px] px-[20px] py-2 bg-[#076cec] text-sm font-medium text-[#fff] hover:bg-[#0153bf] duration-500 shadow'>Join Us</button>
                            </Link>
                        </div>) : (
                            <div ref={menuRef} className="relative inline-block text-left">
                                {/* Profile Picture Button */}
                                <button
                                    onClick={() => setOpenProfile(!openProfile)}
                                    className="flex items-center"
                                >
                                    <img
                                        className="h-[40px] w-[40px] rounded-full border border-gray-200"
                                        src={user?.photoURL}
                                        alt="profile"
                                    />
                                </button>
                                {/* Dropdown Menu */}
                                {openProfile && (
                                    <div className="absolute right-0 mt-2 w-44 rounded-md bg-white ring-1 ring-gray-200 ring-opacity-5 z-50">
                                        <div className="py-1">
                                            <Link
                                                to="/update-profile"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={() => setOpenProfile(false)}
                                            >
                                                Update Profile
                                            </Link>
                                            <Link
                                                to="/dashboard"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={() => setOpenProfile(false)}
                                            >
                                                Dashboard
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    handleLogOut();
                                                    setOpenProfile(false);
                                                }}
                                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    }
                    {/* Mobile Menu */}
                    <button className='lg:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                        {
                            !menuOpen ? <IoMenu className='text-[25px]' /> : <IoClose className='text-[25px]' />
                        }
                    </button>
                </div>
            </nav>
        </header >
    )
}

export default Navbar;
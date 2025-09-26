import React, { useState } from 'react'
import profilePic from '../../../assets/images/profilePic.png';
import { IoClose, IoMenu } from 'react-icons/io5';

const DashboardNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='h-[10vh] flex items-center justify-between sticky top-0 bg-[#fff] border-b-[1px] border-gray-200 px-[20px]'>
            <div>
                <button className='' onClick={() => setMenuOpen(!menuOpen)}>
                    {
                        !menuOpen ? <IoMenu className='text-[25px]' /> : <IoClose className='text-[25px]' />
                    }
                </button>
            </div>
            <div>
                <img
                    className="h-[40px] w-[40px] rounded-full border border-gray-200"
                    src={profilePic}
                    alt="profile"
                />
            </div>
        </div>
    )
}

export default DashboardNav;
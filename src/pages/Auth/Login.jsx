import React from 'react'
import SocailLogin from './SocailLogin';
import { Link } from 'react-router';
import login from '../../assets/images/login.png';

const Login = () => {
    return (
        <div className='flex items-center justify-center lg:py-[40px] md:py-[30px] py-[20px] container mx-auto lg:px-[100px] md:px-[50px] px-[20px]'>
            <div className='h-[full] lg:w-[70%] w-full flex lg:flex-row flex-col justify-between shadow shadow-blue-400 rounded-md'>
                <div className='w-[50%] lg:p-[40px] md:p-[30px] p-[20px] rounded-l-md bg-[#076aec] flex items-center justify-center'>
                    <img src={login} alt="" />
                </div>
                <div className='w-[50%] lg:p-[30px] md:p-[25px] p-[18px]'>
                    <div className='flex items-center'>
                        <h4 className='font-bold text-[20px] text-gray-600'>Login Account</h4>
                    </div>
                    <form className='pt-[10px] flex gap-[10px] flex-col'>
                        <div className='flex flex-col gap-[5px] text-gray-700'>
                            <label>Your Email</label>
                            <input className='px-[14px] py-[8px] bg-[#076aec29] shadow shadow-blue-400 outline-0' type="text" placeholder='Enter Your Email' />
                        </div>
                        <div className='flex flex-col gap-[5px] text-gray-700'>
                            <label>Your Password</label>
                            <input className='px-[14px] py-[8px] bg-[#076aec29] shadow shadow-blue-400 outline-0' type="text" placeholder='Enter Your Password' />
                        </div>

                        <button className='py-[8px] bg-[#076aec] rounded-md w-full text-[#ffff] mt-[15px]' type='submit'>
                            Login Now
                        </button>
                    </form>

                    <div className='py-[15px] flex items-center justify-between gap-[15px]'>
                        <div className='h-[1px] w-full bg-gray-300'></div>
                        <p>Or</p>
                        <div className='h-[1px] w-full bg-gray-300'></div>
                    </div>

                    <SocailLogin />

                    <p className='text-center pt-[15px] text-gray-700'>Don't have an account? <Link className='hover:text-red-500 hover:underline' to="/register">register</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;
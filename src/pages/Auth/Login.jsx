import React from 'react'
import SocailLogin from './SocailLogin';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import image from '../../assets/images/login.png';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';  // ✅ Import SweetAlert2

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';

    const onSubmit = data => {
        login(data.email, data.password)
            .then(result => {
                console.log(result.user);

                // ✅ Show Success Alert
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: `Welcome back, ${result.user.email}!`,
                    timer: 2000,
                    showConfirmButton: false
                });

                navigate(from);
            })
            .catch(error => {
                console.log(error);

                // ❌ Show Error Alert
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message || 'Invalid email or password',
                });
            })
    }

    return (
        <div className='flex items-center justify-center lg:py-[40px] md:py-[30px] py-[20px] container mx-auto lg:px-[100px] md:px-[50px] px-[20px]'>
            <div className='h-[full] lg:w-[70%] w-full flex lg:flex-row flex-col justify-between shadow shadow-blue-400 rounded-md'>
                <div className='w-[50%] lg:p-[40px] md:p-[30px] p-[20px] rounded-l-md bg-[#076aec] flex items-center justify-center'>
                    <img src={image} alt="" />
                </div>
                <div className='w-[50%] lg:p-[30px] md:p-[25px] p-[18px]'>
                    <div className='flex items-center'>
                        <h4 className='font-bold text-[20px] text-gray-600'>Login Account</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='pt-[10px] flex gap-[10px] flex-col'>
                        <div className='flex flex-col gap-[5px] text-gray-700'>
                            <label>Your Email</label>
                            <input
                                {...register('email', { required: true })}
                                className='px-[14px] py-[8px] bg-[#076aec29] shadow shadow-blue-400 outline-0'
                                type="text"
                                placeholder='Enter Your Email' />
                            {errors.email && <p className='text-red-500'>Email is required</p>}
                        </div>
                        <div className='flex flex-col gap-[5px] text-gray-700'>
                            <label>Your Password</label>
                            <input
                                {...register('password', {
                                    required: true,
                                    minLength: 6
                                })}
                                className='px-[14px] py-[8px] bg-[#076aec29] shadow shadow-blue-400 outline-0'
                                type="password"
                                placeholder='Enter Your Password' />
                            {
                                errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
                            }
                            {
                                errors.password?.type === 'minLength' && <p className='text-red-500'>Password Must be 6 characters or longer</p>
                            }
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
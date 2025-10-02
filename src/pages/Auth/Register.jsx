import { useState } from 'react';
import image from '../../assets/images/register.png';
import { Link, useLocation, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import axios from 'axios';
import Swal from 'sweetalert2'; // ✅ SweetAlert2

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const [profilePic, setProfilePic] = useState("");
    const axiosInstance = useAxios();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || "/";

    const onSubmit = async (data) => {
        try {
            // 1. Create user in Firebase
            await createUser(data.email, data.password);

            // 2. Store user in backend
            const userInfo = {
                email: data.email,
                role: "user",
                displayName: data.name,
                photoURL: profilePic,
                created_at: new Date().toISOString(),
                last_log_in: new Date().toISOString(),
            };

            await axiosInstance.post("/users", userInfo);

            // 3. Update Firebase profile
            await updateUserProfile({
                displayName: data.name,
                photoURL: profilePic,
            });

            // ✅ SweetAlert2 success
            Swal.fire({
                title: "Registration Successful!",
                text: "Your account has been created.",
                icon: "success",
                confirmButtonText: "Continue"
            }).then(() => navigate(from));

        } catch (error) {
            console.error(error);
            // ✅ SweetAlert2 error
            Swal.fire({
                title: "Registration Failed!",
                text: error.message || "Something went wrong.",
                icon: "error",
                confirmButtonText: "Try Again"
            });
        }
    };

    const handleImageUpload = async (e) => {
        try {
            const imageFile = e.target.files[0];
            if (!imageFile) return;

            // Optional: show uploading alert
            Swal.fire({
                title: "Uploading Image...",
                text: "Please wait",
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading(),
            });

            const formData = new FormData();
            formData.append("image", imageFile);

            const uploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`;
            const res = await axios.post(uploadUrl, formData);
            setProfilePic(res.data.data.url);

            Swal.fire({
                title: "Image Uploaded!",
                text: "Profile picture added successfully.",
                icon: "success"
            });

        } catch (error) {
            console.error(error);
            Swal.fire({
                title: "Image Upload Failed!",
                text: "Could not upload image.",
                icon: "error"
            });
        }
    };

    return (
        <div className='flex items-center justify-center lg:py-[40px] md:py-[30px] py-[20px] container mx-auto lg:px-[100px] md:px-[50px] px-[20px]'>
            <div className='h-[full] lg:w-[70%] w-full flex lg:flex-row flex-col justify-between shadow shadow-blue-400 rounded-md'>
                <div className='w-[50%] lg:p-[40px] md:p-[30px] p-[20px] rounded-l-md bg-[#076aec] flex items-center justify-center'>
                    <img src={image} alt="Register" />
                </div>
                <div className='w-[50%] lg:p-[30px] md:p-[25px] p-[18px]'>
                    <h4 className='font-bold text-[20px] text-gray-600'>Register Account</h4>
                    <form onSubmit={handleSubmit(onSubmit)} className='pt-[10px] flex gap-[10px] flex-col'>
                        {/* Name */}
                        <div className='flex flex-col gap-[5px] text-gray-700'>
                            <label>Your Name</label>
                            <input
                                {...register('name', { required: true })}
                                className='px-[14px] py-[8px] bg-[#076aec29] shadow shadow-blue-400 outline-0'
                                type="text"
                                placeholder='Enter Your Name' />
                            {errors.name && <p className='text-red-500'>Name is required</p>}
                        </div>

                        {/* Email */}
                        <div className='flex flex-col gap-[5px] text-gray-700'>
                            <label>Your Email</label>
                            <input
                                {...register('email', { required: true })}
                                className='px-[14px] py-[8px] bg-[#076aec29] shadow shadow-blue-400 outline-0'
                                type="text"
                                placeholder='Enter Your Email' />
                            {errors.email && <p className='text-red-500'>Email is required</p>}
                        </div>

                        {/* Password */}
                        <div className='flex flex-col gap-[5px] text-gray-700'>
                            <label>Your Password</label>
                            <input
                                {...register('password', { required: true, minLength: 6 })}
                                className='px-[14px] py-[8px] bg-[#076aec29] shadow shadow-blue-400 outline-0'
                                type="password"
                                placeholder='Enter Your Password' />
                            {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters or longer</p>}
                        </div>

                        {/* Photo Upload */}
                        <div className='flex flex-col gap-[5px] text-gray-700'>
                            <label>Your Photo</label>
                            <input
                                onChange={handleImageUpload}
                                className='px-[14px] py-[8px] bg-[#076aec29] shadow shadow-blue-400 outline-0'
                                type="file" />
                        </div>

                        <button className='py-[8px] bg-[#076aec] rounded-md w-full text-[#ffff] mt-[15px]' type='submit'>
                            Register Now
                        </button>
                    </form>

                    <p className='text-center pt-[15px] text-gray-700'>
                        Already have an account? <Link className='hover:text-red-500 hover:underline' to="/login">login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register;
import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router'; // fixed import
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';

const SocailLogin = () => {
    const { signinWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';
    const axiosInstance = useAxios();

    const handleGoogleSignIn = async () => {
        try {
            const result = await signinWithGoogle();
            const user = result.user;
            console.log(result.user);

            // update user info in the backend
            const userInfo = {
                email: user.email,
                role: 'user',
                created_at: new Date().toISOString(),
                last_log_in: new Date().toISOString()
            };

            const res = await axiosInstance.post('/users', userInfo);
            console.log('User info updated:', res.data);

            // ✅ SweetAlert2 Success
            Swal.fire({
                title: "Login Successful!",
                text: `Welcome ${user.displayName || user.email}`,
                icon: "success",
                confirmButtonText: "Continue"
            }).then(() => navigate(from));

        } catch (error) {
            console.error(error);
            // ✅ SweetAlert2 Error
            Swal.fire({
                title: "Login Failed!",
                text: error.message || "Something went wrong with Google Sign-In.",
                icon: "error",
                confirmButtonText: "Try Again"
            });
        }
    };

    return (
        <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center rounded-md px-[14px] py-[8px] border-1 border-[#076aec29] w-full mt-3"
        >
            <div className='flex items-center gap-[8px]'>
                <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google"
                    className="w-5 h-5"
                />
                <span className="text-gray-700 font-medium">Sign in with Google</span>
            </div>
        </button>
    );
};

export default SocailLogin;
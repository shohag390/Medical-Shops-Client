import React from 'react'

const SocailLogin = () => {
    return (
        <button
            className="flex items-center justify-center rounded-md px-[14px] py-[8px] border-1 border-[#076aec29] w-full"
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
    )
}

export default SocailLogin;
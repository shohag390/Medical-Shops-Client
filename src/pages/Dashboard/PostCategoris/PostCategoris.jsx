import React from 'react';
import { useForm } from 'react-hook-form';

const PostCategories = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log('Form Data:', data);

        // Upload image to ImgBB
        const formData = new FormData();
        formData.append('image', data.image[0]);

        const imgbbApiKey = 'b396d4970a8ed48bef57bf314b50dbea'; // Replace with your key
        const res = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
            method: 'POST',
            body: formData,
        });
        const result = await res.json();
        console.log('ImgBB URL:', result.data.url);

        // You can now send { name: data.name, image: result.data.url } to backend
    };

    return (
        <div className='lg:px-[20px] md:px-[50px] px-[20px] py-[20px]'>
            <h4 className='text-[18px] font-medium pb-[12px]'>Upload Categoris</h4>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* Category Name */}
                <div>
                    <label className="block mb-1 font-medium">Category Name</label>
                    <input
                        type="text"
                        placeholder="Enter category name"
                        {...register('name', { required: 'Category name is required' })}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                {/* Category Image */}
                <div>
                    <label className="block mb-1 font-medium">Category Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        {...register('image', { required: 'Category image is required' })}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                    {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    >
                        Post Category
                    </button>
                </div>

            </form>
        </div>
    );
};

export default PostCategories;

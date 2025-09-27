import { useForm } from "react-hook-form";

const categories = ["Surap", "Mask", "Medical Equipment", "Other"];
const brands = ["Brand A", "Brand B", "Brand C"];

const UploadProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            if (key === "image") {
                formData.append(key, data[key][0]); // file
            } else {
                formData.append(key, data[key]);
            }
        });
        // send formData to backend API
    };

    return (
        <div className='lg:px-[20px] md:px-[50px] px-[20px] py-[20px]'>
            <h4 className='text-[18px] font-medium pb-[12px]'>Upload Products</h4>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">

                <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between w-full lg:gap-[30px] gap-[15px]">
                    {/*  Product Name */}
                    <div className="lg:w-[50%] w-full">
                        <label className="block mb-1 font-medium">Product Name</label>
                        <input
                            placeholder="Enter Product Name"
                            type="text"
                            {...register("name", { required: "Product name is required" })}
                            className="w-full border p-2 rounded-md"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/*  Category */}
                    <div className="lg:w-[50%] w-full">
                        <label className="block mb-1 font-medium">Category</label>
                        <select {...register("category", { required: "Category is required" })} className="w-full border p-2 rounded-md">
                            <option value="">Select Category</option>
                            {categories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
                        </select>
                        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between w-full lg:gap-[30px] gap-[15px]">
                    {/*  Brand */}
                    <div className="lg:w-[50%] w-full">
                        <label className="block mb-1 font-medium">Brand</label>
                        <select {...register("brand", { required: "Brand is required" })} className="w-full border p-2 rounded-md">
                            <option value="">Select Brand</option>
                            {brands.map((b, i) => <option key={i} value={b}>{b}</option>)}
                        </select>
                        {errors.brand && <p className="text-red-500 text-sm">{errors.brand.message}</p>}
                    </div>

                    {/* Price */}
                    <div className="lg:w-[50%] w-full">
                        <label className="block mb-1 font-medium">Price ($)</label>
                        <input
                            placeholder="Enter Price"
                            type="number"
                            step="0.01"
                            {...register("price", { required: "Price is required", min: 0 })}
                            className="w-full border p-2 rounded-md"
                        />
                        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between w-full lg:gap-[30px] gap-[15px]">
                    {/*  Quantity */}
                    <div className="lg:w-[50%] w-full">
                        <label className="block mb-1 font-medium">Quantity</label>
                        <input
                            placeholder="Enter Your Product Quantity"
                            type="number"
                            {...register("quantity", { required: "Quantity is required", min: 0 })}
                            className="w-full border p-2 rounded-md"
                        />
                        {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
                    </div>

                    {/*  SKU */}
                    <div className="lg:w-[50%] w-full">
                        <label className="block mb-1 font-medium">SKU</label>
                        <input
                            placeholder="Enter Product Sku"
                            type="text"
                            {...register("sku")}
                            className="w-full border p-2 rounded-md"
                        />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between w-full lg:gap-[30px] gap-[15px]">
                    {/*  Expiration Date */}
                    <div className="lg:w-[50%] w-full">
                        <label className="block mb-1 font-medium">Expiration Date</label>
                        <input
                            type="date"
                            {...register("expiry_date")}
                            className="w-full border p-2 rounded-md"
                        />
                    </div>

                    {/*  Manufacturer */}
                    <div className="lg:w-[50%] w-full">
                        <label className="block mb-1 font-medium">Manufacturer</label>
                        <input
                            placeholder="Enter manufacturer"
                            type="text"
                            {...register("manufacturer")}
                            className="w-full border p-2 rounded-md"
                        />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between w-full lg:gap-[30px] gap-[15px]">
                    {/*  Country of Origin */}
                    <div className="lg:w-[50%] w-full">
                        <label className="block mb-1 font-medium">Country of Origin</label>
                        <input
                            placeholder="Enter Your Country"
                            type="text"
                            {...register("origin")}
                            className="w-full border p-2 rounded-md"
                        />
                    </div>

                    {/*  Dosage Form */}
                    <div className="lg:w-[50%] w-full">
                        <label className="block mb-1 font-medium">Dosage Form</label>
                        <input
                            placeholder="Enter Dosage Form"
                            type="text"
                            {...register("dosage_form")}
                            className="w-full border p-2 rounded-md"
                        />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between w-full lg:gap-[30px] gap-[15px]">
                    {/*  Ingredients */}
                    <div className="lg:w-[50%] w-full">
                        <label className="block mb-1 font-medium">Ingredients</label>
                        <input
                            placeholder="Enter Ingredients"
                            type="text"
                            {...register("ingredients")}
                            className="w-full border p-2 rounded-md"
                        />
                    </div>

                    {/* Side Effects */}
                    <div className="lg:w-[50%] w-full">
                        <label className="block mb-1 font-medium">Side Effects</label>
                        <input
                            placeholder="Enter Side Effects"
                            type="text"
                            {...register("side_effects")}
                            className="w-full border p-2 rounded-md"
                        />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between w-full lg:gap-[30px] gap-[15px]">
                    {/*  Product Image */}
                    <div className="lg:w-[50%] w-full">
                        <label className="block mb-1 font-medium">Product Image</label>
                        <input
                            type="file"
                            {...register("image", { required: "Product image is required" })}
                            className="w-full border p-2 rounded-md"
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                    </div>

                    {/*  Prescription Required */}
                    <div className="lg:w-[50%] w-full">
                        <label className="block mb-1 font-medium">Prescription Required</label>
                        <select {...register("prescription_required")} className="w-full border p-2 rounded-md">
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                        placeholder="Description"
                        rows="3"
                        {...register("description")}
                        className="w-full border p-2 rounded-md"
                    />
                </div>

                {/* Submit */}
                <div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                        Upload Product
                    </button>
                </div>

            </form>
        </div>
    );
};

export default UploadProduct;

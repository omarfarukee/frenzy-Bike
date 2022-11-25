import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddItems = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddItem = (data) => {
        console.log(data)
    }

    return (

        <div className='pr-5'>
            <h1>Add itemsssssssss</h1>
            <form onSubmit={handleSubmit(handleAddItem)}>

                <div className='grid grid-cols-2 bg-gray-300 p-5 rounded-2xl '>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Seller Name</span></label>
                        <input type="text" {...register("seller", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.seller && <p className='text-red-500'>{errors.seller.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Model Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Original Price</span></label>
                        <input type="text" {...register("originalPrice", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Selling Price</span></label>
                        <input type="text" {...register("resalePrice", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Condition</span></label>
                        <input type="text" {...register("condition", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Details</span></label>
                        <input type="text" {...register("details", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.details && <p className='text-red-500'>{errors.details.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Year of use</span></label>
                        <input type="text" {...register("yearOfUSe", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.yearOfUSe && <p className='text-red-500'>{errors.yearOfUSe.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Phone</span></label>
                        <input type="text" {...register("phone", {
                            required: 'Required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Write date and time</span></label>
                        <input type="text" {...register("postTime", {
                            required: 'Required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.postTime && <p className='text-red-500'>{errors.postTime.message}</p>}
                    </div>


                    <div className=''>
                        <label className="label"> <span className="label-text">Chose Brand Name Id</span></label>
                        <select className="select select-bordered  w-full max-w-xs" {...register("categoryId")}>
                            <option value="637f32adb2c7870c084a397e">yamaha</option>
                            <option value="637f32adb2c7870c084a397f">suzuki</option>
                            <option value="637f32adb2c7870c084a3980">tvs</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("images", {
                            required: 'Required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.images && <p className='text-red-500'>{errors.images.message}</p>}
                    </div>

                </div>
                <input className='btn btn-primary w-full mt-4' value="Sign Up" type="submit" />
            </form>
        </div>
    );
};

export default AddItems;
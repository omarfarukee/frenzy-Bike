import { data } from 'autoprefixer';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProviuder/AuthProvider';

const AddItems = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const imageHosKey = '29473dd4ab78ebc95009722bc0558d38';
    const imageHosKey= process.env.REACT_APP_imgbb_key
    console.log(imageHosKey)
     const navigate = useNavigate()

    const handleAddItem = (data) => {
        console.log(data)

        const image = data.images[0];
        const fromData = new FormData();
        fromData.append('image', image);

        const url= `https://api.imgbb.com/1/upload?&key=${imageHosKey}` 
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: fromData
        })
        .then(res => res.json()) 
        .then(imgData => {
          if(imgData.success){
            console.log(imgData.data.url)


            const item = {
                name : data.name ,
                email:user?.email,
                images: imgData.data.url,
                resalePrice: data.resalePrice,
                originalPrice: data.originalPrice,
                categoryId: data.categoryId,
                condition: data.condition,
                yearOfUse:data.yearOfUse,
                phone:data.details,
                seller:data.seller,
                postTime:data.postTime,
                details: data.details,
                location: data.location,
              

            }

          
            fetch('https://assignment-12-server-murex.vercel.app/items', {

                method: 'POST', 
                headers: {
                    'content-type': 'application/json', 
                    authorization : `bearer ${localStorage.getItem('usersToken')}`

                }, 
                body: JSON.stringify(item)
            })
            .then(res => res.json())
            .then(result => {
                
                console.log(result)
                toast.success('added Item successfully')
                 navigate('/dashBoard/myProducts')
            })

          }
        })
    }
    return (

        <div className='pr-5 mb-5'>
            <div className='flex justify-center text-3xl font-bold'><h1>Add item</h1></div>
            <form onSubmit={handleSubmit(handleAddItem)}>

                <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 bg-gray-300 p-5 rounded-2xl ml-3'>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Seller Name</span></label>
                        <input type="text" {...register("seller", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.seller && <p className='text-red-500'>{errors.seller.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Seller email</span></label>
                        <input defaultValue={user?.email} disabled type="email" {...register("email", {
                            // required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
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
                        <input type="text" {...register("yearOfUse", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.yearOfUse && <p className='text-red-500'>{errors.yearOfUse.message}</p>}
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
                        <label className="label"> <span className="label-text">Chose Brand </span></label>
                        <select className="select select-bordered  w-full max-w-xs" {...register("categoryId")}>
                            <option value="637f32adb2c7870c084a397e">yamaha</option>
                            <option value="637f32adb2c7870c084a397f">suzuki</option>
                            <option value="637f32adb2c7870c084a3980">tvs</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo (photo Should be png/jpg format)</span></label>
                        <input type="file" {...register("images", {
                            required: 'Required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.images && <p className='text-red-500'>{errors.images.message}</p>}
                    </div>

                </div>
                <div className='flex justify-center'>
                     <input className='btn btn-success  mt-4 ' value="add this" type="submit" />
                </div>
               
            </form>
        </div>
    );
};

export default AddItems;
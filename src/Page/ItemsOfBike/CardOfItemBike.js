import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const CardOfItemBike = ({ itemsCard, setItemsData}) => {
    const { name,phone, images, location, resalePrice,status, originalPrice, condition, details, yearOfUse, postTime, seller } = itemsCard
console.log(status)
    return (
        <div>
            <div className="card card-compact mb-3 bg-base-100 shadow-xl " style={{height:'700px'}}>
                <figure><img className='h-52 w-full' src={images} alt="Shoes" /></figure>
                <div className="card-body">

                    <h2 className="card-title">{name}</h2>
                    <div>

                    </div>
                    <p className='flex'> <span className='font-bold'>Seller name : </span> <span className='flex'>{seller} {
                        status === 'verified' ?<span className='text-blue-400 '><FaCheckCircle></FaCheckCircle></span> : 
                        '' }</span> 
                   </p>
                    <p> <span className='font-bold'>Original Price :</span> <span className='text-green-900'>{originalPrice}৳</span>  </p>
                    <p> <span className='font-bold'> Selling price: </span><span className='text-green-900'>{resalePrice}৳</span> </p>
                    <p> <span className='font-bold'>Year of use : </span> {yearOfUse}years</p>
                    <p> <span className='font-bold'>Condition: </span> {condition}</p>
                    <p> <span className='font-bold'>Location: </span> {location}</p>
                    <p> <span className='font-bold'>Phone: </span> {phone}</p>
                    <p> <span className='font-bold'> Short Details :</span> {details}</p>
                    <p> <span className='font-bold'>Post Date:</span> {postTime}</p>
                    <div className="card-actions justify-end">
                    <label  onClick={() => setItemsData(itemsCard)} htmlFor="item-modal" className="btn btn-primary" >Book now</label> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardOfItemBike;
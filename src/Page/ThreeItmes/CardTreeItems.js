import React from 'react';
import {Link} from 'react-router-dom'
import './TreeItem.css'
const CardTreeItems = ({ item }) => {
    const { itemName, image, _id} = item
    return (
        <div>
            <div className="card card-compact lg:w-96 bg-base-100 shadow-xl collection mb-3">
                <figure><img className='h-64 w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{itemName}</h2>
                    {/* <p>Available <span className='font-bold'></span></p> */}
                    <div className="card-actions justify-end">
                       <Link to={`/items/${_id}`}> <button  className="btn btn-primary">See Collection</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTreeItems;
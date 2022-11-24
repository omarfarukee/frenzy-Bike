import React from 'react';

const CardTreeItems = ({ item }) => {
    const { itemName, image, products } = item
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='h-64 w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{itemName}</h2>
                    <p>Available <span className='font-bold'>{products.length}</span></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTreeItems;
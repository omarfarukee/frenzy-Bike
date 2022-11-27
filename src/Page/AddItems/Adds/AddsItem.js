import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../ThreeItmes/TreeItem.css'
const AddsItem = () => {

    const [adds, setAdds] = useState([])
    useEffect(() =>{
        axios.get('https://assignment-12-server-omarfarukee.vercel.app/adds')
        .then(data => setAdds(data.data))
    } ,[])
    return (
        <div>
            <div className='flex justify-center'>
                 <h1 className='text-3xl text-green-800 font-bold mb-10'>Adds</h1>
            </div>
            <div className='lg:grid lg:grid-cols-3 lg:pl-10 mb-3'>
                {
                    adds.map(add =>
                        <div key={add._id} className="card w-96 bg-base-100 shadow-2xl image-full mb-3 collectionAddCard">
                        <figure><img src={add.image} alt="Shoes" /></figure>
                        <div className="card-body">
                          <h2 className="card-title text-black">{add.name}</h2>
                          <p>Price-{add.resalePrice}৳</p>
                        <div className="card-actions justify-end">
                        <Link to={`/items/${add.categoryId}`}>  <button className="btn btn-primary">Buy Now</button></Link>
                          
                          </div>
                        </div>
                      </div>
                        )
                }
            </div>
        </div>
    );
};

export default AddsItem; 
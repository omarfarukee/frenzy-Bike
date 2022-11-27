import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AddsItem = () => {

    const [adds, setAdds] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:5000/adds')
        .then(data => setAdds(data.data))
    } ,[])
    return (
        <div>
            <div>
                 <h1 className='text-3xl text-green-800'>Add Section</h1>
            </div>
            <div className='lg:grid lg:grid-cols-3 lg:pl-10 mb-3'>
                {
                    adds.map(add =>
                        <div key={add._id} className="card w-96 bg-base-100 shadow-xl image-full ">
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
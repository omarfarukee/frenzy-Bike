import React from 'react';
import pic from '../../images/pngwing.com.png'
const Error = () => {
    return (
        <div className='flex justify-center pt-24'>
            <div>
                <img className='h-80' src={pic} alt="" />
                <h1 className='text-6xl font-bold ml-8'>page not found </h1>
            </div>
        </div>
    );
};

export default Error;
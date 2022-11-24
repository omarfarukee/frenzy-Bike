import React from 'react';
import img from '../../../images/positive-bearded-redhead-male-leather-jacket-holds-motorcycle-helmet-grey-background-removebg-preview.png'
const Section = () => {
    return (
        <div className='flex justify-center p-16'>
            <div className='lg:flex justify-between text-center items-center w-4/5'>
                <div>
                    <img className='h-full' src={img} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl'>listen!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing  elit. Sapiente voluptates facere voluptatem molestiae culpa modi possimus ducimus porro adipisci sunt ipsum, dolorem, soluta necessitatibus eligendi sit impedit fugiat, consequatur animi.</p>
                </div>
            </div>

        </div>
    );
};

export default Section;
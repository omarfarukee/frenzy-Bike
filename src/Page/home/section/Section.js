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
                    <p>Reduces head injuries: In case you have an accident while riding your two–wheeler, a helmet can absorb the impact of a head injury. Head or brain injuries can be fatal, especially if you are not wearing a helmet and have left yourself exposed</p>
                </div>
            </div>

        </div>
    );
};

export default Section;
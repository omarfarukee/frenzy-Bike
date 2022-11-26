import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PayFrom from './PayFrom';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const stripePromise = loadStripe('pk_test_51M8NquC6XRr5uztaap6rw9MWnBuT5T5bWMEjg1syH3jW86nxP9sHA6QfBpfn9qq2N2PJiZC5CGcTlj9tm6lQAGLJ00moSa4gPk');
console.log(stripePromise)
const Payment = () => {

    const data = useLoaderData()
    console.log(data)
    const {price, modelName} = data;
     return (

        <div className='ml-10 lg:flex'>
        <div className='mt-10'>
            <h3 className="text-3xl mb-5 font-bold">My Payments</h3>
            <p className="text-3xl">Please pay <strong>{price} Taka</strong> for the <strong>{modelName}</strong> product</p>
            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    
                       <PayFrom
                       data={data}
                       />
                   
                    </Elements>
                </div>
            </div>
        
        </div>
    );
};

export default Payment;
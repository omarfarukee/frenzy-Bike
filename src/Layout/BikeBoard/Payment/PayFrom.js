import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const PayFrom = ({ data }) => {
    const stripe = useStripe()
    const elements = useElements()
     const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
     const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
     const [clientSecret, setClientSecret] = useState("");
     const { price, email, buyerName, _id } = data;
    console.log(clientSecret)
    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
         const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
         const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

         if (error) {
             console.log(error);
             setCardError(error.message)
         }
          else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
    
         if (paymentIntent.status === "succeeded") {
            // console.log('congrats......', transactionId)
            // setTransactionId(paymentIntent.id)


            console.log('card info', card);
        
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data?.insertedId) {
                        toast.success('thanks for your payment')
                        setSuccess('Congrats! your payment successfully completed');
                        setTransactionId(paymentIntent.id);
                    }
                })
        }
        setProcessing(false);

    }
    return (
        <div>
            <form className='' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-sm mt-4 btn-primary'
                    type="submit"
                    disabled={!stripe || !clientSecret}>
                    Pay
                </button> 
            </form>
            <p className="text-red-500 mt-4">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500 text-2xl font-bold'>{success}</p>
                    <p className='text-xl'>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </div>
    );
};

export default PayFrom;
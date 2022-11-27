import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviuder/AuthProvider';

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email)
    const url = `https://assignment-12-server-omarfarukee.vercel.app/bookedItem?email=${user?.email}`

    const { data: bookedItem = [] } = useQuery({
        queryKey: ['bookedItem', user?.email],
        queryFn: async () => {

            const res = await fetch( url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('usersToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleReport = id =>{
        const proceed = window.confirm('Want To Report this product?')
        const reportItem = bookedItem.filter(item => item._id === id)
        const report = reportItem[0]
        if(proceed){
            const reportProduct = {
                resalePrice: report.resalePrice,
                email: report.email,
                buyerName: report.buyerName,
                image: report.image,
              
                modelName: report.modelName
            }
           // https://assignment-12-server-omarfarukee.vercel.app
            console.log(reportProduct)
            fetch('https://assignment-12-server-omarfarukee.vercel.app/report', {

                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('usersToken')}`

                },
                body: JSON.stringify(reportProduct)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.acknowledged) {
                        toast.success('Report successfully')
                        window.location.reload()
                    }
                    else {
                        toast.error(result.message)
                    }
                })
         }

    }
    return (
        <div>
            <div className='flex justify-center mb-5 mt-5'>
                    <h1 className='text-3xl'>Order Board</h1>
            </div>
        
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Model Name</th>
                            <th>Price</th>
                            <th>Payment Status</th>
                            <th>Report</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                          bookedItem?.length && bookedItem?.map((booked, index) =>
                                <tr key={booked._id}>
                                    <th>{index + 1}</th>
                                   <th><img alt='' className="mask mask-circle h-24 " src={booked.image} /></th> 
                                    <td>{booked.modelName}</td>
                                    <td>{booked.price}৳</td>
                                    {
                                        booked.price && !booked.paid && 
                                       <td> <Link to={`/dashboard/payments/${booked?._id}`}>
                                        <button className='btn btn-danger'>pay</button>
                                         </Link></td>
                                        

                                    }
                                    {
                                        booked.price && booked.paid &&  <td><button className='btn btn-primary'>paid</button></td> 
                                    }
                                  <td><button disabled={sessionStorage.getItem(`buttonDisable${booked._id}` || false)} onClick={() => {
                                        handleReport(booked._id)
                                        sessionStorage.setItem(`buttonDisable${booked._id}`, true);
                                    }} className='btn btn-primary'>Report</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;
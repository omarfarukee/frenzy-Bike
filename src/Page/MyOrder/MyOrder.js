import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviuder/AuthProvider';

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookedItem?email=${user?.email}`

    const { data: bookedItem = [] } = useQuery({
        queryKey: ['bookedItem', user?.email],
        queryFn: async () => {

            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('usersToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    
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
                                   <td><button className='btn btn-danger'>pay</button></td> 
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
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';
const AllSellers = () => {
    const [seller, setSeller] = useState([])
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/allSellers`);
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteSellers = id =>{
        const proceed = window.confirm('Are you sure, want to delete this Seller?')
        if(proceed){
            fetch( `http://localhost:5000/users/allSellers/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    toast.success('Seller Deleted Successfully')
                    const remaining = seller.filter(sell => sell._id !== id)
                    setSeller(remaining)
                    refetch()
                }
            })
        }
}
    

const handleMakeAdminVerify = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
        method: 'PUT', 
        headers: {
            authorization: `bearer ${localStorage.getItem('usersToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            toast.success('account verified successfully')
            refetch();
        }
    })
}


     
        return (
            <div>
                <div className='flex justify-center'>
                     <h2 className="text-3xl mt-5 mb-3 font-bold">All Sellers</h2>
                </div>
               
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Verification</th>

                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>
                                    {
                                         user?.status === 'verified' ? 

                                    <div className='flex'>
                                          {user.email}<span className='text-green-400'><FaCheckCircle></FaCheckCircle></span>
                                    </div> :

                                     <>  {user.email}</>
                                        
                                    }   
                                    </td>
                                    <td> {user.role}</td>
                                    {/* <td>{  user?.role !== 'admin' &&  <button onClick={() =>handleVerify(user.email)} className='btn btn-secondary'>Verify</button>}</td> */}
                                    <td>{
                                        user?.status !== 'verified' ? 
                                        <button onClick={() => handleMakeAdminVerify(user._id)} className='btn btn-primary'>verify</button> :
                                        <button className='btn btn-info'>verified</button>
                                        }</td>
    
                                    <td><  button onClick={() => handleDeleteSellers(user._id)} className='btn btn-xs btn-error'>Delete</button></td>
                                </tr>)
                            }
                                  
                        </tbody>
                    </table>
                </div>
            </div>
        );

};

export default AllSellers;
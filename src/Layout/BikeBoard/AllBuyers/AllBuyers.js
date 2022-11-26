import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const {buyers, setBuyers} = useState([])
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/allBuyers`);
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteBuyers = id =>{
        const proceed = window.confirm('Are you sure, want to delete this Seller?')
        if(proceed){
            fetch( `http://localhost:5000/users/allBuyers/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    toast.success('Seller Deleted Successfully')
                    const remaining = buyers.filter(buy => buy._id !== id)
                    setBuyers(remaining)
                    refetch()
                }
            })
        }
}
    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>

                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>

                                {/* <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                                <td><button onClick={() => handleDeleteBuyers(user._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default AllBuyers;
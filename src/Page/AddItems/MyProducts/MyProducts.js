import { useQueries, useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProviuder/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [itemsDelete, setItemsDelete] = useState([])
    const url = `https://assignment-12-server-omarfarukee.vercel.app/dashboard/items?email=${user?.email}`
    const navigate = useNavigate()
    const { data: products = [], refetch } = useQuery({
        queryKey: ['dashboard/items', user?.email],
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
    // console.log(myProducts)

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, want to delete this Item?')
        if(proceed){
            fetch( `https://assignment-12-server-omarfarukee.vercel.app/dashboard/items/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    toast.success('Items Deleted Successfully')
                    const remaining = itemsDelete.filter(item => item._id !== id)
                    setItemsDelete(remaining)
                    refetch()
                }
            })
        }
}

const handleAdds = id => {
    
    const addsProduct = products.filter(item => item._id === id)
    const adds = addsProduct[0] 
    const proceed = window.confirm('Are you want to Advertise this item')
    if(proceed){
        const addsProduct = {
           categoryId:adds.categoryId,   
           name: adds.name,
           email: adds.email,
            used: adds.yearOfUse,
           location: adds.location,
            resalePrice: adds.resalePrice,
           originalPrice: adds.originalPrice,
            details: adds.details,
           seller: adds.seller, 
           image:adds.images
                     
        }
        fetch('https://assignment-12-server-omarfarukee.vercel.app/adds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('usersToken')}`

            },
            body: JSON.stringify(addsProduct)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success('Successfully added in Advertise')
                window.location.reload()
                navigate('/')
            })
    }

}

    return (
        <div>
            <div className='flex justify-center mb-5 mt-5'>
                    <h1 className='text-3xl'>My Added Items </h1>
            </div>
        
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Model Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Make Adds</th>
                        </tr>
                    </thead>
                    <tbody>

                        { 
                        products?.length && products?.map((product, index) =>
                                <tr key={product._id}>
                                    <th>{index + 1}</th>
                                    <th><img  className="mask mask-circle h-24" src={product.images} alt="" /></th>
                                    <th>{product.name}</th>
                                    <th>{product.resalePrice}৳</th>
                                    <th><button onClick={() => handleDelete(product._id)} className='btn btn-danger'>remove</button></th>
                                    <th><button disabled={sessionStorage.getItem(`buttonDisable${product._id}` || false)} onClick={() => {
                                        handleAdds(product._id)
                                        sessionStorage.setItem(`buttonDisable${product._id}`, true);
                                    }} className='btn btn-primary'>Adds</button></th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;
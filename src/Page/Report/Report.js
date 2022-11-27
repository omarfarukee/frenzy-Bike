import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Report = () => {

    const [report, setReport] = useState([])
    const { data: reportedItem = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-omarfarukee.vercel.app/reportByAdmin');
            const data = await res.json();
            return data;
        }
    });
    console.log(reportedItem)

    const handleDelete = id => {
        const proceed = window.confirm('Want To Delete, Think Again?')
   //    https://assignment-12-server-omarfarukee.vercel.app
        if (proceed) {
            fetch(`https://assignment-12-server-omarfarukee.vercel.app/dashboard/reportAdmin/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Buyer Deleted Successfully')
                        const remaining = report.filter(sel => sel._id !== id)
                        setReport(remaining)
                        refetch()
                    }
                })
        }
    }
    return (

        <div>
            <h3 className="text-3xl mb-5 font-bold">Reported Product</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                             <th>Buyer</th>
                            <th>Photo</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportedItem?.length &&
                            reportedItem?.map((item, index) => <tr key={item._id}>

                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div></td>
                                <td>{item.buyer}</td>
                                <td>{item.productName}</td>
                                <td>{item.resalePrice}</td>
                                <td>{item.email}</td>

                                <td><button onClick={() => handleDelete(item._id)} className='btn btn-warning'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Report;
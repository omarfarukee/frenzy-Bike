import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Report = () => {

    const [report, setReport] = useState([])
    const { data: reportedItem = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-murex.vercel.app/reportByAdmin');
            const data = await res.json();
            return data;
        }
    });
    console.log(reportedItem)

    const handleDelete = id => {
        const proceed = window.confirm('are you sure for delete this ?')
   //    https://assignment-12-server-omarfarukee.vercel.app
        if (proceed) {
            fetch(`https://assignment-12-server-murex.vercel.app/dashboard/reportAdmin/${id}`, {
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

            <div className='flex justify-center mb-6 mt-3'>
                 <h1 className="text-3xl mb-5 font-bold">Reported Items</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                             <th>Buyer</th>
                            <th>Photo</th>
                            <th>Product Name</th>
                            <th>email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportedItem?.length &&
                            reportedItem?.map((item, index) => <tr key={item._id}>

                                <th>{index + 1}</th>
                                <td>{item.buyerName}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div></td>
                                
                                <td>{item.modelName}</td>
                        
                                <td>{item.email}</td>

                                <td><button onClick={() => handleDelete(item._id)} className='btn btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Report;

import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import CardTreeItems from './CardTreeItems';

const ThreeItems = () => {

const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
        const res = await fetch('http://localhost:5000/categories');
        const data = await res.json();
        return data;
    }
})
    return (
        <div>
            <div className='flex justify-center text-3xl '><h1>Categories</h1></div>
            <div className='lg:grid lg:grid-cols-3 md:grid-cols-2 lg:pl-10'>
                {
                    categories.map(item => <CardTreeItems 
                    key={item._id} 
                    item={item}
                    ></CardTreeItems>)
                }
            </div>
        </div>
    );
};

export default ThreeItems;
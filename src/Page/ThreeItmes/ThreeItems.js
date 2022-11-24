
import React, { useEffect, useState } from 'react';
import CardTreeItems from './CardTreeItems';

const ThreeItems = () => {

const [items, setItems] = useState([])

useEffect(() => {
    fetch('http://localhost:5000/categories')
    .then(res => res.json())
    .then(data => {
        setItems(data)
        console.log(data)
    })
}, [])
    return (
        <div>
            <div className='flex justify-center text-3xl '><h1>Categories</h1></div>
            {items.length}
            <div className='lg:grid lg:grid-cols-3 md:grid-cols-2 lg:pl-10'>
                {
                    items.map(item => <CardTreeItems 
                    key={item._id} 
                    item={item}
                    ></CardTreeItems>)
                }
            </div>
        </div>
    );
};

export default ThreeItems;
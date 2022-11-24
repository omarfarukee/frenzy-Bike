import React from 'react';
import { useLoaderData } from 'react-router-dom'
import CardOfItemBike from './CardOfItemBike';
const ItemsOfBike = () => {
    const detailsOfItemsCard = useLoaderData()

    console.log(detailsOfItemsCard)

    return (
        <div>
            <div className='flex justify-center mt-10 text-3xl text-green-900 font-bold'>
                <h1 className='text'>Here your item</h1>
            </div>
            <div className='lg:grid lg:grid-cols-3 md:grid-cols-2 lg:pl-10'>
                {
                    detailsOfItemsCard.map(itemsCard => <CardOfItemBike
                        key={itemsCard._id}
                        itemsCard={itemsCard}
                    ></CardOfItemBike>)
                }
            </div>
        </div>
    );
};

export default ItemsOfBike;
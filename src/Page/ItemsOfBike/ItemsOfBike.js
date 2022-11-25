import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import ModalItemsBooks from '../ModalItemsBook/ModalItemsBooks';
import CardOfItemBike from './CardOfItemBike';
const ItemsOfBike = () => {
    const detailsOfItemsCard = useLoaderData()
    const [itemsData, setItemsData] = useState(null)
    console.log(detailsOfItemsCard)

    return (
        <div>
            <div className='flex justify-center mt-10 text-3xl text-green-900 font-bold'>
                <h1 className='text'>Here your item</h1>
            </div>
            <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-2 p-5'>
                {
                    detailsOfItemsCard.map(itemsCard => <CardOfItemBike
                        key={itemsCard._id}
                        itemsCard={itemsCard}
                        setItemsData={setItemsData}
                    ></CardOfItemBike>)
                }
            </div>
            {
                itemsData && 
                <ModalItemsBooks
                itemsData={itemsData}
                setItemsData={setItemsData}
                ></ModalItemsBooks>
            }
        </div>
    );
};

export default ItemsOfBike;
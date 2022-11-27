import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviuder/AuthProvider';
import toast from 'react-hot-toast';
const ModalItemsBooks = ({setItemsData, itemsData}) => {
    const {name, resalePrice, images } = itemsData
    const {user} = useContext(AuthContext)

    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target 
        const phone = form.phone.value 
        const email = form.email.value 
        const names = form.name.value
        const location = form.location.value
        const booking = {
            modelName: name,
            names,
            email,
            phone,
            location,
            buyerName: user.displayName,
            image:images,
            price: resalePrice,

        }

        fetch('https://assignment-12-server-omarfarukee.vercel.app/bookedItem', {
            method: "POST",
            headers:{
                'content-type' : 'application/json'
            }, 
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.acknowledged === true) {
                setItemsData(null)
                toast.success('booking confirmed')
            }
             else {
                alert('you have already booked')
             }
        })

    }
    return (
        <div>
        
            <input type="checkbox" id="item-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="item-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="text-lg font-bold">{name}</h3> */}
                    <form onSubmit={handleBooking}>
                        <input type="name" disabled defaultValue={name } className="mt-2 input input-bordered w-full " /> <br />
                        <input type="price" disabled defaultValue={resalePrice} className="mt-2 input input-bordered w-full " /> <br />
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Type here" className=" mt-3 input input-bordered w-full "  required /> <br />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="email" className=" mt-3 input input-bordered w-full " required /> <br />
                        <input name='phone' type="text" placeholder="phone" className=" mt-3 input input-bordered w-full " required /> <br />
                        <input name='location' type="text" placeholder="Location" className=" mt-3 input input-bordered w-full " required /> <br />
                        <button className="btn btn-primary mt-3 w-full">Button</button>
                    </form>
                </div>
            </div>
        
        </div>
    );
};

export default ModalItemsBooks;
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviuder/AuthProvider';

const ModalItemsBooks = ({setItemsData, itemsData}) => {
    
    const {user} = useContext(AuthContext)

    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target 
        const phone = form.phone.value 
        const email = form.email.value 
        const slot =form.slot.value
        const names = form.name.value
        const booking = {
        

        }
    }
    return (
        <div>
        
            <input type="checkbox" id="item-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="item-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" disabled className="mt-2 input input-bordered w-full " /> <br />
                        <select name='slot' className="select select-bordered w-full mt-2">
                        </select> <br />
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Type here" className=" mt-3 input input-bordered w-full "  required /> <br />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="email" className=" mt-3 input input-bordered w-full " required /> <br />
                        <input name='phone' type="text" placeholder="phone" className=" mt-3 input input-bordered w-full " required /> <br />
                        <button className="btn btn-primary mt-3 w-full">Button</button>
                    </form>
                </div>
            </div>
        
        </div>
    );
};

export default ModalItemsBooks;
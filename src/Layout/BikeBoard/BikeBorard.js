import React from 'react';
import Header from '../../Hadeder/Header';
import {Outlet, Link} from 'react-router-dom'
import Footer from '../../Footer/Footer';
const BikeBorard = () => {
    return (
        <div>
             <div>
        <Header></Header>
        <div className="drawer drawer-mobile">
            <input id="bikeBoard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="bikeBoard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                    <li><Link to='/dashboard/myOrder'>My Ordered Items</Link></li>
                    {
                         <>
                            <li><Link to='/dashboard/addItem'>Add Item</Link></li>
                            </>
                    }
                </ul>
            </div>
        </div>

    </div>

            {/* <Footer></Footer> */}
        </div>
    );
};

export default BikeBorard;
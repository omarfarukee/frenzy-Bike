import React, { useContext } from 'react';
import Header from '../../Hadeder/Header';
import {Outlet, Link} from 'react-router-dom'
import Footer from '../../Footer/Footer';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Page/AuthProviuder/AuthProvider';
const BikeBorard = () => {
    const {user} = useContext(AuthContext)
    const url = `https://assignment-12-server-murex.vercel.app/users?email=${user?.email}`

    const { data: roleOfUsers = {}, refetch } = useQuery({
        queryKey: ['users', user?.email],
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
    const userRole = roleOfUsers[0]?.role
  console.log(userRole)

    return (
        <div>
             <div>
        <Header></Header>
        <div className="drawer drawer-mobile">
            <input id="bikeBoard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            {
                user?.emailVerified  ?  
                
                <div className='drawer-side font-bold'>
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  text-white">
                <li className='text-2xl font-bold text-green-900 mb-10 ml-3'>Buyer Profile</li>
                <li className='rounded-lg  hover:bg-sky-700  bg-slate-400 mb-2'><Link to="/dashboard/myProducts">My Orders</Link></li>
                </ul>
            </div>
                : <div className="drawer-side">
                <label htmlFor="bikeBoard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                {userRole === "admin"? 
                        <>  
                            <p className='text-2xl font-bold text-green-900 mb-5 ml-3'>Admin Profile</p>
                            {/* <li><Link to='/dashboard/addItem'>Add Item</Link></li> */}
                            <li className='bg-green-700 hover:bg-green-500 rounded-2xl mb-3 text-white font-bold'><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                            <li className='bg-green-700 hover:bg-green-500 rounded-2xl mb-3 text-white font-bold'><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                            <li className='bg-green-700 hover:bg-green-500 rounded-2xl mb-3 text-white font-bold'><Link to='/dashboard/reportAdmin'>Reports</Link></li>
                        </> 
                        : 
                        <></>
                } 
                {userRole === 'seller' ?
                <>
                    <p className='text-2xl font-bold text-green-900 mb-5 ml-3'>Seller Profile</p>
                    <li className='bg-green-700 hover:bg-green-500 rounded-2xl mb-3 text-white font-bold'><Link to='/dashboard/addItem'>Add Item</Link></li>
                    <li className='bg-green-700 hover:bg-green-500 rounded-2xl mb-3 text-white font-bold'><Link to='/dashboard/myProducts'>My Added Products</Link></li>
                </>
                :<></>
                }
                
                {userRole === "buyer" ?

                        <>
                            <p className='text-2xl font-bold text-green-900 mb-5 ml-3'>Buyer Profile</p>
                            <li className='bg-green-700 hover:bg-green-500 rounded-2xl mb-3 text-white font-bold'><Link to='/dashboard/myOrder'>My Ordered Items</Link></li>
                         </>
                        : 
                        <></>
                }

                </ul>
            </div>
            }
        </div>

    </div>

            <Footer></Footer>
        </div>
    );
};

export default BikeBorard;
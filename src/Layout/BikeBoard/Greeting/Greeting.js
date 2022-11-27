import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import img from '../../../images/cute-biker-girl-cartoon_96373-263_prev_ui.png'
import { AuthContext } from '../../../Page/AuthProviuder/AuthProvider';
const Greeting = () => {
    
    const {user} = useContext(AuthContext)
    const url = `https://assignment-12-server-omarfarukee.vercel.app/users?email=${user?.email}`

    const { data: roleOfUsers = {}, } = useQuery({
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
    return (
        <div className='mb-0' style={{ height:'655px'}}>
            <div className='lg:flex items-center p-10 bg-lime-100 h-full'>
                <div>
                    <img className=' rounded-2xl' src={img} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl'> Welcome <span className='font-extrabold text-green-700'>'{user?.displayName}'</span> 
                    <br /> 
                    You are <span className='font-bold text-green-700'>'{userRole}'</span>on this site</h1>
                </div>
            </div>
        </div>
    );
};

export default Greeting;
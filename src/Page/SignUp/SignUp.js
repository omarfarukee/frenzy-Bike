import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../AuthProviuder/AuthProvider';
import { signInWithPopup } from 'firebase/auth';
import useToken from '../../UserHooks/UseToken';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signUp, updateUser, signInWithGoogle} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('')
     const [token] = useToken(userEmail);
    const navigate = useNavigate()
    
    if(token){
        navigate('/')
    }

    // const handleGoogle= () => {
    //     signInWithGoogle()
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             toast.success('User Sign Up SuccessFully')
    //             navigate('/home')
    //         })
    //         .catch(error => {
    //             console.log(error.message)
    //         });
    // }
    const handleSignUp = (data) => {
        setError('');
        signUp(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                 toast.success('User Create SuccessFully')
                const userInfo = {
                    displayName: data.name,
                    email: data.email,
                    role: data.role
                }
                updateUser(userInfo)
                    .then(() => {
                    saveUser(data.name, data.email, data.role);
                       
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            });
    }

    const saveUser = (name, email, role) =>{
        const user = {name, email, role};
        fetch('https://assignment-12-server-omarfarukee.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            // console.log('save user',data)
            setUserEmail(email)
            // getUsersToken(email)
         })
        
     }

    //  const getUsersToken = (email) => {
    //     fetch(`https://assignment-12-server-omarfarukee.vercel.app/jwt?email=${email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.accessToken){
    //             localStorage.setItem('usersToken', data.accessToken)
    //             navigate('/home')
    //         }
    //     })
    //  }

    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-xl text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be 6 characters long" },
                        // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div> 
                <div className='mt-4'>
                        <label className="label"> <span className="label-text">Whats's Your Role ? chose one</span></label>
                        <select className="select select-bordered  w-full max-w-xs" {...register("role")}>
                            <option  value='Select Profile'>Select Profile</option>
                            <option value="buyer">buyer</option>
                            <option value="seller">seller</option>
                            <option value="admin">admin</option>
                        </select>
                    </div>
                <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                {error && <p className='text-red-600'>{error}</p>}
            </form>
            <div className='flex justify-center'>
                  <p>Already have an account ?<Link className='text-blue-500' to='/login'>Please Login</Link></p>
            </div>
          
            {/* <div className="divider">OR</div>
            <button onClick={handleGoogle} className='btn btn-outline w-full'>Sign Up With Google</button> */}

        </div>
    </div>
    );
};

export default SignUp;
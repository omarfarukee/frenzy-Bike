import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../AuthProviuder/AuthProvider';
import { signInWithPopup } from 'firebase/auth';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signUp, updateUser, signInWithGoogle} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [token] = useToken(createdUserEmail);
    const navigate = useNavigate()

    const handleGoogle= () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Sign Up SuccessFully')
                // navigate(from, {replace: true});
                navigate('/home')
            })
            .catch(error => {
                console.log(error.message)
            });
    }
    const handleSignUp = (data) => {
        setError('');
        signUp(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                 toast.success('User Create SuccessFully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        // saveUser(data.name, data.email);
                       
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            });
    }
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
                <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                {error && <p className='text-red-600'>{error}</p>}
            </form>
            <div className='flex justify-center'>
                  <p>Already have an account ?<Link className='text-blue-500' to='/login'>Please Login</Link></p>
            </div>
          
            <div className="divider">OR</div>
            <button onClick={handleGoogle} className='btn btn-outline w-full'>Sign Up With Google</button>

        </div>
    </div>
    );
};

export default SignUp;
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../AuthProviuder/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [error, setError] = useState('')
    const { register,formState: { errors }, handleSubmit } = useForm();
    const {login, signInWithGoogle, user } = useContext(AuthContext)
    const [loginUserEmail, setLoginUerEmail] = useState('');
    // const [token] = useToken(loginUserEmail);
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = data =>{
        console.log(data)
        setError('')
        login(data.email, data.password)
             .then(result => {
                 const user = result.user;
                console.log(user)
                setLoginUerEmail(data.email)
        
        })
        .catch(error =>{
            console.error(error.message)
            setError(error.message)
          })
    }
    const handleGoogle= () => {
        signInWithGoogle()
        // console.log(signInPopUp)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Login Successfully')
                 navigate(from, {replace: true});
                navigate('/home')
            })
            .catch(error => {
                console.log(error.message)
            });
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 shadow-2xl p-10 rounded'>
                <h2 className='text-4xl'>login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text">Eamil</span>
                        </label>
                        <input  type="email" placeholder="email" className="input input-bordered w-full max-w-xs" 
                        {...register("email", {required:"Email Address is required"})}/>
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input  type="password" placeholder="password" className="input input-bordered w-full max-w-xs"
                        {...register("password", {required:'password is requred',
                         minLength:{ value: 6, message: "passwoed should be 6 characters" ,
                        //  pattern:{value :/^[A-Za-z]+$/i, message:'password should be Strong'}
                         }})}/>
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>} 
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                    <div>
                    {error && <p className='text-red-600'>{error}</p>}
                    </div>
                    <div className='flex justify-center'>
                        <p>new in here?<Link to='/signUp' className='text-blue-600'>Register now</Link></p>
                    </div>
                 
                   <div className="divider">OR</div>
                   <button onClick={handleGoogle} className='btn btn-primary w-full'>Login Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
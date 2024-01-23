import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, reset } = useForm()
    let navigate = useNavigate()
    const onSubmit = async(data) => {

        console.log(data);
      try {
        
const response = await axios.post('http://localhost:3000/loggeduser', data)
const housetoken = response.data.token
console.log(housetoken);
  alert('Login successful')

  localStorage.setItem('house-token', housetoken)
      } catch (error) {
        console.log(error);
      }
        
    }

    return (
        <div className='mx-auto justify-center items-center container'>
            <div className=" bg-base-100 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card  w-full max-w-xl shadow-2xl bg-base-100">

                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className=''>
                                <h1 className="text-xl font-bold">Register now!</h1>

                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register("password")} required />

                            </div>
                        
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Login;
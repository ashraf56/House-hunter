import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SIgnup = () => {

    const { register, handleSubmit,reset } = useForm()
    let navigate = useNavigate()
    const onSubmit = (data) => { 

    console.log(data);
fetch('http://localhost:3000/users',
{
    method: "POST"
    , headers: {
      'content-type': 'application/json'
    },
    body:JSON.stringify(data)

}
).then(res => res.json())
.then(users => {
    console.log(users);
    if (users.message  === 'already exist') {
        alert('already exist')
    }
    if (users.insertedId) {
        alert('user reg success')
        navigate('/')
    }
})
reset()
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
                            <div className="form-control" >
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Numbar</span>
                                </label>
                                <input type="number" {...register("number")} placeholder="number" className="input input-bordered" required maxLength={11}  />
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select className="select select-bordered w-full " {...register("role")}>
                                    <option disabled >W</option>
                                    <option value='House Renter'>House Renter</option>
                                    <option value='House Owner '>House Owner </option>
                                </select>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SIgnup;
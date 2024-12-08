import React from 'react'
import { useForm } from 'react-hook-form'
import { auth } from '../Layout/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { NavLink } from 'react-router-dom'

const Signup = () => {
    const{register,handleSubmit}=useForm()

    function signup(data){
        const {email,password}=data
        createUserWithEmailAndPassword(auth,email,password)

        .then((res)=>{
            console.log(res.user);
            
        })
        .catch((err)=>{
            console.log(err);
            console.error("Signin error:",err.message)
            
        })

    }
   
  return (
    <>
      <div className="container">
        <form action="" method='post' onSubmit={handleSubmit(signup)} className='col-lg-6 mt-5 p-5 mx-auto shadow' >
            <div className="my-3">
                <input type="text" placeholder='Email' {...register("email")} />
            </div>
            <div className="my-3">
                <input type="text" placeholder='Password' {...register("password")} />
            </div>
            <button className='btn btn-success'>SignIn</button>
            <NavLink className="btn btn-primary" to="/login">Login</NavLink>
            
            
        </form>
      </div>
    </>
  )
}

export default Signup

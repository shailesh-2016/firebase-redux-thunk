import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useForm } from 'react-hook-form'
import { auth } from '../Layout/Firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const{register, handleSubmit}=useForm()
    const redirect=useNavigate()
    function login(data){
        signInWithEmailAndPassword(auth,data.email,data.password)
        .then((res)=>{
            console.log(res.user);
            redirect("/Create")

            
        })
        .catch((err)=>{
            console.log(err);
            alert("Wrong email or Password")
            
        })
    }
  return (
    <>
       <div className="container">
        <form action="" method='post' onSubmit={handleSubmit(login)} className='col-lg-6 mt-5 p-5 mx-auto shadow' >
            <div className="my-3">
                <input type="text" placeholder='Email' {...register("email")} />
            </div>
            <div className="my-3">
                <input type="text" placeholder='Password' {...register("password")} />
            </div>
            <button className='btn btn-success'>Login</button>
        </form>
      </div>
    </>
  )
}

export default Login

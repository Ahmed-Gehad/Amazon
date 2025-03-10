import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredtial) => {
        console.log(userCredtial);
        navigate("/LoginPage");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <div className='container mx-auto'>

      <h1 className='text-3xl font-bold text-center'>Register Page</h1>
      <form onSubmit={signUp} >
        <h2 className='text-2xl font-bold py-5'>Create Account</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=' border-2 rounded-md p-2 border-black me-5  mb-5'
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=' border-2 rounded-md p-2 border-black '

        />
        <br />
        <button type="submit" className='bg-green-700 text-white px-5 py-2 rounded-md mt-5 hover:bg-green-900'>
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
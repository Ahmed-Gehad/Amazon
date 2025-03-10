import React, { useState } from 'react'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredtial) => {
        console.log(userCredtial);
        
        navigate("/");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
       console.log(error);
       alert('you must be logged in to access this page');
       setEmail("");
       setPassword("");
       navigate("/RegisterPage");
        
      });
    }

  return (
  <div className='container mx-auto'>
    
    <h1 className='text-3xl font-bold text-center'>Login Page</h1>
    <form onSubmit={signIn} >
      <h2 className='text-2xl font-bold py-5'>Log in to your Account</h2>
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
      <div className=''>
      <button type="submit" className='bg-green-700 text-white px-5 py-2 rounded-md mt-5 hover:bg-green-900'>
        Log In
        </button>
        <button type="submit" className='bg-blue-700 text-white px-5 py-2 rounded-md mt-5 ml-3 hover:bg-blue-900'
        onClick={() => navigate("/RegisterPage")}>
        Register
        </button>
      </div>
    </form>
  </div>
  )
}

export default LoginPage
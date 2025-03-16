import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      navigate('/LoginPage');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='container mx-auto flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-3xl font-bold text-center mb-6'>Register Page</h1>

      <form onSubmit={signUp} className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
        <h2 className='text-2xl font-semibold text-center mb-5'>Create Account</h2>

        {error && <p className='text-red-500 text-sm text-center mb-3'>{error}</p>}

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full border-2 rounded-md p-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4'
          autoFocus
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full border-2 rounded-md p-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4'
          required
        />

        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className='w-full border-2 rounded-md p-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4'
          required
        />

        <button type="submit" className='w-full bg-green-700 text-white px-5 py-2 rounded-md mt-2 hover:bg-green-900 transition'>
          Register
        </button>

        <p className='text-center mt-4 text-gray-600'>
          Already have an account?{' '}
          <button
            type="button"
            className='text-blue-600 hover:underline'
            onClick={() => navigate('/LoginPage')}
          >
            Log in here
          </button>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { useNavigate, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); // لحفظ الصفحة التي جاء منها المستخدم

  const signIn = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await signInWithEmailAndPassword(auth, email, password);

      // إعادة التوجيه إلى الصفحة السابقة أو الصفحة الرئيسية
      const redirectTo = location.state?.from?.pathname || "/";
      navigate(redirectTo, { replace: true });

      setEmail('');
      setPassword('');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className='container mx-auto flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-3xl font-bold text-center mb-6'>Login Page</h1>

      <form onSubmit={signIn} className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
        <h2 className='text-2xl font-semibold text-center mb-5'>Log in to your Account</h2>

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

        <button type="submit" className='w-full bg-green-700 text-white px-5 py-2 rounded-md mt-2 hover:bg-green-900 transition'>
          Log In
        </button>

        <p className='text-center mt-4 text-gray-600'>
          Don't have an account?{' '}
          <button
            type="button"
            className='text-blue-600 hover:underline'
            onClick={() => navigate('/RegisterPage')}
          >
            Register here
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;

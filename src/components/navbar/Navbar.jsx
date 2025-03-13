import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";
import AuthDetails from '../Account/AuthDetails';
import logo from '../../assets/logo.png';

import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";



const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-[#131921] py-4 px-10  gap-1 text-white'>
            <Link to="/">
                <img src={logo} alt=""
                    className="w-28 h-10 object-cover me-2
                    rounded-full" />
            </Link>

            <div className='flex items-center gap-2 hover:cursor-pointer hover:text-orange-300 transition-all duration-300 ease-in-out'>
                <CiLocationOn />
                <div>
                    <p className='text-sm'>Deliver to</p>
                    <p className='text-sm'>Egypt</p>
                </div>
            </div>
            <div className='bg-white p-2 rounded-lg  w-96 flex justify-between ms-auto'>
                <input type="text"
                    placeholder='Search Amazon.eg'
                    className='text-black outline-none w-full'
                />
                <button className=' bg-orange-300 p-2 rounded-lg '>
                    <CiSearch className='text-black ' />
                </button>
            </div>


          
            <div className='ml-auto  flex me-5 hover:text-orange-300 transition-all duration-300 ease-in-out'>
                
                <Link to="/LoginPage">
                <AuthDetails />
                    
                </Link>
            </div>
            
            <Link to="/CheckoutPage" className=' hover:text-orange-300 transition-all duration-300 ease-in-out'>
                Orders
            </Link>
            <Link to="/Cart" className='ml-5 flex gap-2 align-center items-center hover:text-orange-300 transition-all duration-300 ease-in-out'>
                <FaCartArrowDown />
                Cart
            </Link>
           

        </div>
    )
}

export default Navbar
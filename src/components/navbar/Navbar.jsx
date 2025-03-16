import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown, FaBars } from "react-icons/fa";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import AuthDetails from "../Account/AuthDetails";
import { ProductContext } from "../product/ProductContext";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const { cart, setSearchQuery } = useContext(ProductContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setSearchQuery(e.target.value);
    };

    return (
        <nav className="bg-[#131921] text-white py-3 px-5 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* 🔹 Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="Amazon" className="w-28 h-10 object-cover rounded-full" />
                </Link>

                {/*  Search Bar */}
                <div className="flex-grow mx-5">
                    <div className="relative flex items-center bg-white rounded-lg shadow-md w-full">
                        <input
                            type="text"
                            placeholder="Search Amazon.eg"
                            value={search}
                            onChange={handleSearch}
                            className="w-full text-black px-4 py-2 rounded-lg focus:outline-none"
                        />
                        <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-orange-400 p-2 rounded-md hover:bg-orange-500 transition">
                            <CiSearch className="text-white text-xl" />
                        </button>
                    </div>
                </div>

                {/*  User Account */}
                <Link to="/LoginPage">
                    <AuthDetails />
                </Link>
                <Link to="/CheckoutPage" className="px-3">
                    <h5 className="text-lg font-medium hover:text-orange-300 transition">Order</h5>
                </Link>

                {/*  Cart */}
                <Link to="/Cart" className="relative flex items-center hover:text-orange-300 transition">
                    <FaCartArrowDown className="text-2xl" />
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                            {cart.length}
                        </span>
                    )}
                    <span className="ml-2 hidden md:inline">Cart</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthUser(user);
        });

        return () => unsubscribe();
    }, []);

    const userSignOut = async () => {
        try {
            await signOut(auth);
            console.log('User signed out');
        } catch (error) {
            console.error('Sign-out error:', error);
        }
    };

    return (
        <div className="relative">
            {authUser ? (
                <div 
                    className="relative inline-block"
                    onMouseEnter={() => setMenuOpen(true)}
                    onMouseLeave={() => setTimeout(() => setMenuOpen(false), 300)} // تأخير خفيف لمنع الاختفاء السريع
                >
                    {/* اسم المستخدم */}
                    <button className="text-orange-400 font-medium hover:text-orange-500 transition">
                        {`Hello, ${authUser.email.split('@')[0]}`}
                    </button>

                    {/* القائمة المنسدلة */}
                    {menuOpen && (
                        <div 
                            className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md border border-gray-200 z-50"
                            onMouseEnter={() => setMenuOpen(true)} // تبقى مفتوحة عند تحريك الماوس داخلها
                            onMouseLeave={() => setTimeout(() => setMenuOpen(false), 300)} // تأخير بسيط لتجنب الاختفاء قبل الضغط
                        >
                            <button 
                                onClick={userSignOut} 
                                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 transition"
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <Link to="/LoginPage" className="hover:text-orange-400 transition text-gray-700">
                    <p>Hello, <span className="font-semibold">Sign in</span></p>
                </Link>
            )}
        </div>
    );
};

export default AuthDetails;
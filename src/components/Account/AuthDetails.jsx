import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        // Clean up the listener on component unmount
        return () => {
            listen();
        };
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('User signed out');
            })
            .catch((error) => {
                console.log('Sign-out error:', error);
            });
    };

    return (
        <div className='flex  gap-5 items-center justify-center'>
            {authUser ? (
                <>
                    <p className='text-orange-300'>{`Hello ${authUser.email}`}</p>
                    <button onClick={userSignOut}
                    className='text-red-600'>Sign Out</button>
                </>
            ) : (
                <p>Hello,Sign in</p>
            )}
        </div>
    );
};

export default AuthDetails;

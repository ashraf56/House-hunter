import React, { useContext } from 'react';
import { HouseContext } from '../Context/ContextHouse';
import { Navigate } from 'react-router-dom';

const Protecte = ({ children }) => {
    const isUserSignedIn = !!localStorage.getItem('house-token')
    const { user, Loading } = useContext(HouseContext)
    if (Loading) {
        return <div className='text-center mx-auto justify-center '><span className="loading loading-ring loading-lg"></span></div>

    }
    if (isUserSignedIn && user) {
        return children
    }
    return <Navigate to='/login' replace></Navigate>
};

export default Protecte;
import React, { createContext, useEffect, useState } from 'react';

export const HouseContext = createContext()

const ContextHouse = ({ children }) => {
    const [user, setUser] = useState()
    let [Loading, setLoading] = useState(true);
    useEffect(() => {


        let storedDataString = localStorage.getItem('house-token');
        if (storedDataString) {
            let storedData = JSON.parse(storedDataString);

            let storedEmail = storedData.email;
            setUser(storedEmail)
            setLoading(false)
        }




    }, [])
    let value = {
        user, Loading
    }
    return (<HouseContext.Provider value={value}>{children}</HouseContext.Provider>)
};

export default ContextHouse;
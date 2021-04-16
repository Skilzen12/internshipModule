import React, {useState, createContext, useEffect} from 'react';
import { setItem, getItem } from './localStorageControl';
export const ProgrammerContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState(getItem('user') || {
        
    });
    
    useEffect(() => {
        setItem('user', user)
    }, [user])

    return(
        <ProgrammerContext.Provider value={[user, setUser]}>
            {props.children}
        </ProgrammerContext.Provider>
    );
}
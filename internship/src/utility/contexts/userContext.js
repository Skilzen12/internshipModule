import React, {useState, createContext, useEffect} from 'react';
import { setItem, getItem } from '../localStorageControl';
export const ProgrammerContext = createContext();
export const StudentContext = createContext();
export const OrgContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState(getItem('user') || {
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        type: '',
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

export const StudentProvider = (props) => {
    const [student, setStudent] = useState(getItem('student') || {
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        imageURL: '',
        city : '',
        gender: '',
        DOB: '',
        educationDetails: [],
        workExperience: [],
        profile : {},
    });
    
    useEffect(() => {
        setItem('student', student)
    }, [student])

    return(
        <StudentContext.Provider value={[student, setStudent]}>
            {props.children}
        </StudentContext.Provider>
    );
}

export const CompanyProvider = (props) => {
    const [org, setOrg] = useState(getItem('org') || {
        orgName: '',
        email: '',
        contact: '',
    });
    
    useEffect(() => {
        setItem('org', org)
    }, [org])

    return(
        <OrgContext.Provider value={[org, setOrg]}>
            {props.children}
        </OrgContext.Provider>
    );
}
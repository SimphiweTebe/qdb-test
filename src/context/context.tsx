import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

const AppContext = React.createContext<IUser | any>({});

const UserContextProvider = (props: any): JSX.Element => {

    const initialState = {}

    let [user, setUser] = useState({ ...initialState });
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
            setUser(response.data)
            setIsLoading(false);
            //SET DATA PERSIST
            localStorage.setItem('current-user', JSON.stringify(response.data))
        }

        getData();

        const userData = localStorage.getItem('current-user');

        if (userData !== null) {
            setUser(JSON.parse(userData));
        }


    }, []);

    return (
        <AppContext.Provider value={{ user, loading: isLoading }}>
            {props.children}
        </AppContext.Provider>
    )
}

interface AppProps { }

export { AppContext, UserContextProvider };
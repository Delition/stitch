import { createContext, useState } from 'react';
import {getStrapiURL } from '../utils';

export const BlogsContext = createContext();

export const BlogsProvider = ({children}) => {


    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState(false);

    const refreshCategories = async () => {
        try{
            const response = await fetch(getStrapiURL('/categories'));
            const latestCategories = await response.json();
            setCategories(latestCategories);
            setLoading(true)
        } catch (error){
            console.log(error)
        }
    }

    return (<BlogsContext.Provider value={{
        categories,
        loading,
        refreshCategories,
    }} >{children}</BlogsContext.Provider>);
}


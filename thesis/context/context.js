import { createContext, useState,useEffect } from "react";

export const MarketCapContext = createContext();


export const MarketCapProvider = ({children}) =>{



    const getTopTenCoin = async () =>{
        try {
            const res = await fetch('/api/getTopTenCoin');
            const data = await res.json();
            return data.data.data // return object with second data is a key, third data is we want to access the data inside that object

        } catch(error){

        }
    }

    return (
        <MarketCapContext.Provider 
        value={{getTopTenCoin}}
        >
            {children}

        </MarketCapContext.Provider>
    )
}
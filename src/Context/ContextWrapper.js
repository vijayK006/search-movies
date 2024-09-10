import { createContext, useState } from "react";
import useDetails from "./API/useDetails";

export const ContextProvider = createContext();

export const ContextWrapper = (props) => {
    const [storeInput, setStoreInput] = useState('abc');

    const movieDetails = useDetails(storeInput);

    return (
        <ContextProvider.Provider value={{ movieDetails, storeInput, setStoreInput }}>
            {props.children}
        </ContextProvider.Provider>
    )
}
import { createContext, useState } from "react";

export let MainContext = createContext();

export default function MainContextProvider({ children }) {
    let [formData, setFormData] = useState({});
    function setData(data) { setFormData({ ...formData, [data.name]: data.value }); }


    return (
        <MainContext.Provider
            value={{
                formData,
                setFormData,
                setData
            }}
        >
            {children}
        </MainContext.Provider>
    );
}
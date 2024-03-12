import { createContext, useState } from "react";

export const GlobalContext = createContext(null)

export const GlobalContextProvider = ({children}) =>{

    const [changeLanguaje, setChangeLanguaje] = useState(false)

    const [changeTheme, setChangeTheme] = useState(true)

    const objetValue = {
        changeLanguaje,
        setChangeLanguaje,
        changeTheme,
        setChangeTheme
    }

    return <GlobalContext.Provider value={objetValue}> {children} </GlobalContext.Provider>

}
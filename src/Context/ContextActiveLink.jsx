import { createContext, useState } from "react";

export const ContextActiveLLink = createContext(false)

export const ContextProvideActiveLink = ({children}) => {

    const [active, setActive ] = useState(false)
    const [nameProject, setNameProject ] = useState()

    return (
        <ContextActiveLLink.Provider value={{active, setActive, nameProject, setNameProject}}>{children}</ContextActiveLLink.Provider>
    )
}
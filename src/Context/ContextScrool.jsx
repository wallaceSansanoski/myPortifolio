import { createContext, useState } from "react";

export const ContextScrool = createContext('wallace')

export  const ContextScroolProvider = ({children}) => {

    const [ scrool, setScrool ] = useState()

    return <ContextScrool.Provider value={{scrool, setScrool}}>{children}</ContextScrool.Provider>
}
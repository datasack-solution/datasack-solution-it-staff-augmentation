import { createContext, FunctionComponent, ReactNode, useContext, useState } from "react"


interface CallusOpenedContextType{
    isModelOpened:boolean
    setModalOpened:(open:boolean)=>void
}

const CallusOpenedContext = createContext<CallusOpenedContextType | undefined>(undefined)

export const IsCallusModalOpenedProvider:FunctionComponent<{children:ReactNode}>=({
    children
})=>{
    const [isModelOpened, setModalOpened] = useState<boolean>(false);
    return (
        <CallusOpenedContext.Provider value={{isModelOpened,setModalOpened}}>
            {children}
        </CallusOpenedContext.Provider>
    )
}

export const useCallusModalOpenedContext = () => {
    const context = useContext(CallusOpenedContext)
    if (!context){
        throw new Error('useCallusModalContext must be used within a CallusModalProvider')
    }
    return context
}
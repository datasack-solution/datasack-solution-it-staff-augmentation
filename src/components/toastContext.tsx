import React, { createContext, useContext, useState, ReactNode, FunctionComponent } from 'react';

interface ToastContextType{
    toasts: Array<{ id: string, title: string, text: React.ReactNode }>
    setToasts: (toasts:Array<{ id: string, title: string, text: React.ReactNode }>)=>void
}
const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider:FunctionComponent<{children:ReactNode}>=({
    children
})=>{
    const [toasts, setToasts] = useState<Array<{ id: string, title: string, text: React.ReactNode }>>([]);
    return (
        <ToastContext.Provider value={{toasts,setToasts}}>
            {children}
        </ToastContext.Provider>
    )
}

export const useToastContext = () => {
    const context = useContext(ToastContext)
    if (!context){
        throw new Error('usToastContext must be used within a ToastProvider')
    }
    return context
}
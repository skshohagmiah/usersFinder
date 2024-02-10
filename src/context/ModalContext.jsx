/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export const ContextProvider = ({children}) => {
    const [modalToggle, setModalToggle] = useState(false);

    const openModal = () => {
        setModalToggle(true);
    }

    const closeModal = () => {
        setModalToggle(false)
    }

    return (
        <Context.Provider value={{modalToggle,openModal,closeModal}}>
            {children}
        </Context.Provider>
    )
}


export const useModalState = () => {
    return useContext(Context)
}
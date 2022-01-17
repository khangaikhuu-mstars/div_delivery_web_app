import React, { useContext, useState, createContext } from "react";

const ModalContext = createContext();

export function useModal() {
    return useContext(ModalContext)
}

function ModalProvider(props) {
    const [ modalShow, setModalShow ] = useState();
    // debugger
    
    return (
        <ModalContext.Provider value={modalShow, setModalShow}>
            {props.children}
        </ModalContext.Provider>
    )
}
export default ModalProvider
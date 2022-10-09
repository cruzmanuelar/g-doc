import React, { createContext, useState } from "react";

export const UserContext = createContext();

const usuario = {

}

export const UserProvider = ({children}) => {

    const [usuario, setUsuario] = useState({});
    const [matriculado, setMatriculado] = useState([]);
    const [modalAgregar, setModalAgregar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalCuotas, setModalCuotas] = useState(false);
    const [modalMatricula, setModalMatricula] = useState(false);
    const [modalAgregarCuota, setModalAgregarCuota] = useState(false);
    const [medioPago, setMedioPago] = useState([]);

     return (
        <UserContext.Provider value={{
            usuario, setUsuario, setModalAgregar, setModalCuotas, setModalEditar, modalEditar, modalCuotas, modalAgregar, setModalMatricula, modalMatricula, medioPago, setMedioPago, setModalAgregarCuota, modalAgregarCuota, matriculado, setMatriculado
        }}>
            { children }
        </UserContext.Provider>
     )
}
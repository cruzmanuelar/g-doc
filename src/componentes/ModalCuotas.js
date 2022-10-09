import { Modal, Button } from 'antd'
import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import UseUser from '../hooks/UseUser';

const ModalCuotas = () => {

    const { usuario, setUsuario } = useContext(UserContext)

    const [ visibleModal, setVisibleModal ] = useState(true);

    const cerrarModal = () => {
        setVisibleModal(false);
    }

    return (
        <Modal
            visible={visibleModal}
            onCancel={cerrarModal}
        >
            <h3 style={{textAlign:'center'}}>Cuotas</h3>
            <div>
                <strong>Usuario: </strong> {usuario.usuario}
            </div>
            <div>
                <strong>DNI: </strong> {usuario.dni}
            </div>
            <div>
                
            </div>
            
        </Modal>
    )
}

export default ModalCuotas
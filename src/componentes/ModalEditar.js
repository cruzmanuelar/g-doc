import { Modal } from 'antd';
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const ModalEditar = () => {
   
    const { modalEditar, setModalEditar } = useContext(UserContext);

    // let visible = modalEditar;

    const cerrarModal = () => {
        setModalEditar(false);
    }
    
    return (
        <Modal
            visible={modalEditar}
            onCancel={cerrarModal}
        >
            <p>aaa</p>
        </Modal>
    )
}

export default ModalEditar
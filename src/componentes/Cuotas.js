import { Input, Row, Col, Table, Button } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { EyeOutlined } from '@ant-design/icons';
import '../estilos/Usuarios.css'
import ModalAgregarCuotas from './ModalAgregarCuotas';
import ModalCuotas from './ModalCuotas';
import { UserContext } from '../context/UserContext';

const Cuotas = () => {

    const [ data, setData ] = useState([]);
    const [ cargando, setCargando ] = useState(false);
    const [ filtrado, setFiltrado ] = useState([]);
    const [ usuModalAgregar, setUsuModalAgregar ] = useState(false);
    const [ usuModalVer, setUsuModalVer ] = useState(false);

    const { setUsuario, setModalAgregarCuota, matriculado, setMatriculado, modalAgregarCuota, setMedioPago } = useContext(UserContext);

    useEffect(() => {
	
		obtenerUsuarios();

	}, []);

	
	const obtenerUsuarios = async () => {
		setCargando(true);
		const data = await fetch('http://127.0.0.1:8000/api/getMatriculados')
		const items = await data.json();
		setData(items.matriculados);
		setMedioPago(items.medio_pago);
		setCargando(false);
	}

    const filtraUsuario = (valor) => {

        console.log(valor.target.value);
        let nuevaData = data.filter((dat) => dat.dni.toString().includes(valor.target.value.toString()))
        setFiltrado(nuevaData);
    }

    const agregarCuotas = (record) => {
        setModalAgregarCuota(true);
        let usuarioMatriculado = data.find((usu) => usu.id_cliente == record.id_cliente);
        console.log(record);
        console.log(usuarioMatriculado);
        setMatriculado(usuarioMatriculado);
        setUsuario(record);
    }

    const verCuotas = (record) => {
        setUsuModalVer(true);
        setUsuario(record);
    }

    const columns = [
        {
            title: 'DNI',
			dataIndex: 'dni',
			key: 'dni',
			align:'center'
        },
        {
            title: 'Usuario',
			dataIndex: 'usuario',
			key: 'usuario',
			align:'center'
        },
        {
            title: 'Cuotas',
			dataIndex: 'acciones',
			key: 'id',
			align:'center',
            width:20,
            render: (_,record) => (

                <div className='Contenedor-Iconos-Usuarios'>
                    <Button onClick={() => agregarCuotas(record)} className='Icono' type='primary'>Agregar o Editar</Button>
                    <Button onClick={() => verCuotas(record)} className='Icono'><EyeOutlined /></Button>
                </div>
                
            )
        }
    ]

    return (
        <div>
            <Row
                style={{
                    display:'flex',
                    justifyContent:'center',
                }}
            >
                <Col span={12}>
                    <h2 style={{textAlign:'center'}}>Cuotas</h2>
                    <Input
                    placeholder='Buscar por DNI'
                    onChange={filtraUsuario}
                    />
                </Col>

            </Row>

            <Row
                style={{
                    display:'flex',
                    justifyContent:'center',
                    marginTop:'10px'
                }}
            >
                <Col span={20}>
                    <Table
                        columns={columns}
                        dataSource={filtrado.length > 0 ? filtrado : data}
                        pagination={{
                            position: ['topRight'],
                            pageSize:4
                        }}
                        loading={cargando}
                    />
                </Col>

            </Row>
            {modalAgregarCuota && <ModalAgregarCuotas/>}
            {usuModalVer && <ModalCuotas/>}
        </div>
    )
}

export default Cuotas
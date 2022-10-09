import { Table, Button } from 'antd';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import '../estilos/Matricula.css'
import RegistrarMatricula from './RegistrarMatricula';
import moment from 'moment';


const Matricula = () => {

    const [ cargando, setCargando ] = useState(false);
    const [ matriculados, setMatriculados ] = useState([]);
    const [ modalRegistrarMatricula, setModalRegistrarMatricula ] = useState(false);
    const { modalMatricula, setModalMatricula, setUsuario, setMedioPago } =  useContext(UserContext);

    useEffect(() => {
      obtenerMatriculados();
    }, [])
    

    const obtenerMatriculados =  async() => {

        setCargando(true);
        const data = await fetch('http://127.0.0.1:8000/api/getMatriculados')
        const items = await data.json();
        setMatriculados(items.matriculados);
        setUsuario(items.clientes);
        setMedioPago(items.medio_pago);
        setCargando(false);

    }

    const registrarMatricula = () => {
        setModalMatricula(true);
        console.log('ok')
        console.log(modalMatricula)
    }


    const columns = [
        {
            title: 'Usuario',
			dataIndex: 'usuario',
			key: 'usuario',
			align:'center',
            fixed:'left',
            width:'200px'
        },
        {
            title: 'Modulo',
			dataIndex: 'nombre_modulo',
			key: 'nombre_modulo',
			align:'center',
            width:'150px',
        },
        {
			title: 'Monto Total',
			dataIndex: 'monto_total',
			key: 'monto_total',
			align:'center',
            width:'200px',
        },
        {
			title: 'Deuda',
			dataIndex: 'deuda',
			key: 'deuda',
			align:'center',
            width:'150px',
        },
        {
			title: 'Activación',
			dataIndex: 'activacion',
			key: 'activacion',
			align:'center',
            width:'150px',
            render:(_,record) => (
                <div className='Contenedor-Estado-Matricula'>
                    {
                        record.activacion
                        ? <div className='Estado-Activado'></div>
                        : <div className='Estado-Desactivado'></div>
                    }
                </div>
            )
        },
        {
			title: 'Estado',
			dataIndex: 'estado',
			key: 'estado',
			align:'center',
            width:'100px',
            render: (_, record) => (
                <div>
                    {record.estado == 1 ? 'Cancelado' : 'Pendiente'}
                </div>
            )
        },
        {
			title: '1era cuota',
			dataIndex: 'cuotas',
			key: 'cuotas',
			align:'center',
            width:'100px',
            render:(_,record) => (
                record.cuotas.length > 0
                ? <p>{record.cuotas[0]['pago']}</p> 
                : <p></p>
            )
        },
        {
			title: 'Fecha',
			dataIndex: 'fecha',
			key: 'cuotas',
			align:'center',
            width:'150px',
            render:(_,record) => (
                record.cuotas.length > 0
                ? <p>{moment(record.cuotas[0]['fecha']).format('L')}</p>
                : <p></p>
            )
        },
        {
			title: 'Medio',
			dataIndex: 'nombre',
			key: 'nombre',
			align:'center',
            width:'150px',
            render:(_,record) => (
                record.cuotas.length > 0
                ? <p>{record.cuotas[0]['nombre']}</p> 
                : <p></p>
            )
        },
        {
			title: 'Estado',
			dataIndex: 'id_estado',
			key: 'id_estado',
			align:'center',
            width:'150px',
            render:(_,record) => (
                record.cuotas.length > 0
                ? <p>{record.cuotas[0]['id_estado'] == 0 
                    ? 'Pendiente'
                    : 'Cancelado'}
                  </p> 
                : <p></p>
            )
        },
        {
			title: '2da cuota',
			dataIndex: 'cuotas',
			key: 'cuotas',
			align:'center',
            width:'100px',
            render:(_,record) => (
                record.cuotas.length > 0
                ? <p>{record.cuotas[1]['pago']}</p> 
                : <p></p>
            )
        },
        {
			title: 'Fecha',
			dataIndex: 'fecha',
			key: 'cuotas',
			align:'center',
            width:'150px',
            render:(_,record) => (
                record.cuotas.length > 0
                ? <p>{moment(record.cuotas[1]['fecha']).format('L')}</p> 
                : <p></p>
            )
        },
        {
			title: 'Medio',
			dataIndex: 'nombre',
			key: 'nombre',
			align:'center',
            width:'150px',
            render:(_,record) => (
                record.cuotas.length > 0
                ? <p>{record.cuotas[1]['nombre']}</p> 
                : <p></p>
            )
        },
        {
			title: 'Estado',
			dataIndex: 'id_estado',
			key: 'id_estado',
			align:'center',
            width:'150px',
            render:(_,record) => (
                record.cuotas.length > 0
                ? <p>{record.cuotas[1]['id_estado'] == 0 
                    ? 'Pendiente'
                    : 'Cancelado'}
                  </p> 
                : <p></p>
            )
        },
        {
			title: '3ra cuota',
			dataIndex: 'cuotas',
			key: 'cuotas',
			align:'center',
            width:'100px',
            render:(_,record) => (
                record.cuotas.length > 0
                ? <p>{record.cuotas[2]['pago']}</p> 
                : <p></p>
            )
        },
        {
			title: 'Fecha',
			dataIndex: 'fecha',
			key: 'cuotas',
			align:'center',
            width:'150px',
            render:(_,record) => (
                record.cuotas.length > 0
                ? <p>{moment(record.cuotas[2]['fecha']).format('L')}</p> 
                : <p></p>
            )
        },
        {
			title: 'Medio',
			dataIndex: 'nombre',
			key: 'nombre',
			align:'center',
            width:'150px',
            render:(_,record) => (
                record.cuotas.length > 0
                ? <p>{record.cuotas[2]['nombre']}</p> 
                : <p></p>
            )
        },
        {
			title: 'Estado',
			dataIndex: 'id_estado',
			key: 'id_estado',
			align:'center',
            width:'150px',
            render:(_,record) => (
                record.cuotas.length > 0
                ? <p>{record.cuotas[2]['id_estado'] == 0 
                    ? 'Pendiente'
                    : 'Cancelado'}
                  </p> 
                : <p></p>
            )
        },
        {
			title: 'Forma de pago',
			dataIndex: 'forma_pago',
			key: 'forma_pago',
			align:'center',
            width:'150px',
        },
    ]

    return (
        <div>
            <h2 style={{textAlign:'center', margin:'0'}}>Clientes matriculados</h2>
            <Button onClick={registrarMatricula} >Registrar Matricula</Button>
            <Table
                columns={columns}
                dataSource={matriculados}
				scroll={{
					x:3000
				}}
            />
            {modalMatricula && <RegistrarMatricula/>}
        </div>
    )
}

export default Matricula
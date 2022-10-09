import { Table, Tooltip, Modal, Button } from 'antd';
import React, { useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons';
import '../estilos/Usuarios.css'
import { eliminarUsuario } from '../Acciones';
import { UserContext } from '../context/UserContext';
import ModalEditar from './ModalEditar';


const Usuarios = () => {

	const [ data, setData ] = useState([])
	const [ cargando, setCargando ] = useState(false);
	const { confirm } = Modal;
	let navigate = useNavigate();

	const { modalEditar, setModalEditar } = useContext(UserContext);

	useEffect(() => {
	
		obtenerUsuarios();

	}, []);

		useEffect(() => {
		
		}, [data])
	

	const obtenerUsuarios = async () => {
		setCargando(true);
		const data = await fetch('http://127.0.0.1:8000/api/getDocuments')
		const items = await data.json();
		setData(items);
		setCargando(false);
	}

	const confirmarEliminarUsuario = ( record ) => {
		confirm({
		  title: '¿Eliminar a ' + record.usuario + '?',
		  icon: <ExclamationCircleOutlined />,
		  content: 'Se eliminará todo su registro',
		  cancelText:'Cancelar',
	  
		  async onOk() {
			let respuesta =  await eliminarUsuario(record.id_cliente)

			if(respuesta){
				console.log('eliminado')
				obtenerUsuarios();
			}
		  },
	  
		  onCancel() {},
		});
	};

	const editarUsuario = (record) => {
		setModalEditar(true);
		
	}
	
	const columns = [
		{
			title: 'Usuario',
			dataIndex: 'usuario',
			key: 'usuario',
			align:'center',
			fixed:'left',
			width:'300px'
		},
		{
			title: 'DNI',
			dataIndex: 'dni',
			key: 'dni',
			align:'center'
		},
		{
			title: 'Correo',
			dataIndex: 'correo',
			key: 'correo',
			align:'center'
		},
		{
			title: 'Telefono',
			dataIndex: 'telefono',
			key: 'telefono',
			align:'center'
		},
		{
			title: 'Acciones',
			key: 'id',
			align: 'center',
			fixed:'right',
			width: '100px',
			render: (_,record) => (
				<div className='Contenedor-Iconos-Usuarios'>
					<Tooltip title='Editar'>
						<EditOutlined onClick={() => editarUsuario(record)} className='Icono'/>
					</Tooltip>
					<Tooltip title='Eliminar'>
						<DeleteOutlined
							onClick={() => confirmarEliminarUsuario(record)}
							className='Icono Icono-Eliminar'/>
					</Tooltip>
				</div>
			)

		}
	]

	return (
		<div
			style={{
				margin:'0px 30px'
			}}
		>
			<h2 style={{textAlign:'center', margin:'0'}}>Usuarios</h2>
			<div style={{display:'flex', flexDirection:'row'}}>
				
				<Button 
					type="primary"
					onClick={()=> navigate('/registro')}
				>
					<PlusOutlined /> Crear
				</Button>
			</div>
			<Table
				columns={columns}
				dataSource={data}
				loading={cargando}
				pagination={{
					position: ['topRight'],
					pageSize:6
				}}
				scroll={{
					x:1500
				}}
				size='middle'
			/>

			{modalEditar && <ModalEditar/>}
		</div>
	)
}

export default Usuarios
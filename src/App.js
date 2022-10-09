import { Row, Col, Form, Input, Spin, Button } from "antd";
import { enviaRegistro } from "./Acciones";
import '../src/estilos/Registro.css';
import 'antd/dist/antd.css'; 
import { useState } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const antIcon = (
	<LoadingOutlined
	  style={{
		fontSize: 24,
		color: 'white'
	  }}
	  spin
	/>
  );

function App() {

	let navigate = useNavigate();

	const [ enviando, setEnviando ] = useState(false);

	const registrarUsuario = async (values) => {
		setEnviando(true);
		let respuesta = await enviaRegistro(values);
		setEnviando(false);

		if(respuesta){
			console.log('respueas si')
			navigate('/cuotas');
		}else{
			console.log('repsuesta no')
		}
	}	

	return (
		<div
			className="Contenedor-Registro"
		>
			<Row
				style={{
					display:'flex',
					justifyContent:'center'
				}}
			>
				<Col span={8}>
					<Form
						autoComplete="off"
						layout="vertical"
						onFinish={registrarUsuario}
						className="Formulario-Registro"
						style={{
							marginTop:'20px',
							padding: '20px',
							backgroundColor:'#DFEEF3',
							
						}}
					>
						<h2
							style={{textAlign:'center'}}
						>Registro</h2>
						<Form.Item
							label="Usuario:"
							name="usuario"
							rules={[
								{required: true, message: 'El usuario es requerido'}
							]}
						>	
							<Input
								className="Input-Registro"
							/>
						</Form.Item>
						<Form.Item
							label="Correo:"
							name="correo"
							rules={[
								{required: true, message: 'El correo es requerido'}
							]}
						>	
							<Input
								className="Input-Registro"
							/>
						</Form.Item>
						<Form.Item
							label="DNI:"
							name="dni"
							rules={[
								{ required: true,
									message: 'El DNI es requerido',
									
								},
								{
									pattern: new RegExp(/^[0-9]+$/),
									message: 'Formato inválido'
								},
								{
									min: 8, max: 8,
									message: 'DNI inválido'
								}
							]}
						>	
							<Input
								className="Input-Registro"
							/>
						</Form.Item>
						<Form.Item
							label="Teléfono:"
							name="telefono"
							rules={[
								{
									required: true, 
									message: 'El teléfono es requerido'
								},
								{
									pattern: new RegExp(/^[0-9]+$/),
									message: 'Formato inválido'
								},
								{
									min: 9, max: 9,
									message: 'Teléfono inválido'
								}
							]}
						>	
							<Input
								className="Input-Registro"
							/>
						</Form.Item>
						<div style={{textAlign:'center'}}>
							<Button type="primary" htmlType="submit">
								{enviando ? <Spin indicator={antIcon} />:'Guardar'}
							</Button>
						</div>
					</Form>
				</Col>
			</Row>
		</div>

	);
}

export default App;

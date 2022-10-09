import { Modal, Form, Input, Row, Col, DatePicker, Select, Button } from 'antd'
import React, { useContext, useState, useEffect } from 'react';
import { agregarCuotaFetch } from '../Acciones';
import { UserContext } from '../context/UserContext';
import '../estilos/Usuarios.css';
import moment from 'moment';


const ModalAgregarCuotas = () => {

    const { modalAgregarCuota, matriculado, setMatriculado, usuario, setModalAgregarCuota, medioPago} = useContext(UserContext);
    const { Option } = Select;

    const [ moneda, setMoneda] = useState(false);

    const [ matriculadoEditar, setMatriculadoEditar ] = useState(matriculado); 

    const cerrarModal = () => {
        setModalAgregarCuota(false);
    }


    useEffect(() => {
        console.log(matriculado);
        console.log(matriculadoEditar);
    }, [])
    

    const agregarCuota = (values) => {

        let datos = {...values}
        // console.log(datos);

        datos = [
            usuario.id_matricula,
            [
                {
                    numero_cuota: 1,
                    fecha: moment(values.fecha_primera).format('L'),
                    medio: values.medio_primera,
                    pago: values.monto_primera,
                    id_estado: values.estado_primera
                },
                {
                    numero_cuota: 2,
                    fecha: moment(values.fecha_segunda).format('L'),
                    medio: values.medio_segunda,
                    pago: values.monto_segunda,
                    id_estado: values.estado_segunda
                },
                {
                    numero_cuota: 3,
                    fecha: moment(values.fecha_tercera).format('L'),
                    medio: values.medio_tercera,
                    pago: values.monto_tercera,
                    id_estado: values.estado_tercera
                }
            ]
        ]

        // console.log(datos);
        agregarCuotaFetch(datos);
    }

    const cambiaMedioPago = (valor) => {
        valor == 1 ? setMoneda(true) : setMoneda(false);
    }

    return (
        <Modal
            visible={modalAgregarCuota}
            onCancel={cerrarModal}
            footer={[]}
            width='800px'
        >

        <h3 style={{textAlign:'center'}}>Cuotas:</h3>

            <Row
                style={{
                    display:'flex',
                    justifyContent:'space-between'
                }}
            >
                <Col>
                    <h4>DNI: {usuario.dni}</h4>
                </Col>
                <Col>
                    <h4>Usuario: {usuario.usuario}</h4>
                </Col>
            </Row>
            <Form
                onFinish={agregarCuota}
                layout='vertical'
                autoComplete='off'
            >
                <Row>
                    <Col sm={24} md={6}>
                        <Form.Item
                        label='1era Cuota:'
                        name='monto_primera'
                        style={{
                            margin:'10px 10px'
                        }}
                    >
                        <Input
                            name='monto_primera'
                            defaultValue={matriculado.cuotas.length > 0 ? matriculado.cuotas[0]['pago']: ''}
                        />
                        </Form.Item>
                    </Col>
                    <Col sm={24} md={6}>
                        <Form.Item
                            label='Fecha:'
                            name='fecha_primera'
                            style={{
                                margin:'10px 10px'
                            }}   
                        >
                            <DatePicker
                                defaultValue={
                                    matriculado.cuotas.length > 0
                                    ? matriculado.cuotas[0].fecha ? 
                                    moment(matriculado.cuotas[0]['fecha'])
                                    :undefined
                                    : undefined
                            
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={24} md={6}>
                        <Form.Item
                            label='Medio:'
                            name='medio_primera'
                            style={{
                                margin:'10px 10px'
                            }}   
                        >
                            <Select
                            defaultValue={matriculado.cuotas.length > 0 ? matriculado.cuotas[0]['id_medio_pago']: ''}
                                onChange={cambiaMedioPago}
                            >
                                {medioPago.map((med) => (
                                    <Option value={med.id_medio_pago} key={med.id_medio_pago}>{med.nombre}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col sm={24} md={6}>
                        <Form.Item
                            label='Estado:'
                            name='estado_primera'
                            style={{
                                margin:'10px 10px'
                            }}   
                        >
                            <Select
                                defaultValue={matriculado.cuotas.length > 0 ? matriculado.cuotas[0]['id_estado']: ''}
                            >
                                <Option value={1}>Cancelado</Option>
                                <Option value={0}>Pendiente</Option>

                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col sm={24} md={6}>
                        <Form.Item
                        label='2da Cuota:'
                        name='monto_segunda'
                        style={{
                            margin:'10px 10px'
                        }}
                    >
                        <Input
                            defaultValue={matriculado.cuotas.length > 0 ? matriculado.cuotas[1]['pago']: ''}
                        />
                        </Form.Item>
                    </Col>
                    <Col sm={24} md={6}>
                        <Form.Item
                            label='Fecha:'
                            name='fecha_segunda'
                            style={{
                                margin:'10px 10px'
                            }}   
                        >
                            <DatePicker
                                defaultValue={
                                    matriculado.cuotas.length > 0
                                    ? matriculado.cuotas[1].fecha ? 
                                    moment(matriculado.cuotas[1]['fecha'])
                                    :undefined
                                    : undefined
                            
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={24} md={6}>
                        <Form.Item
                            label='Medio:'
                            name='medio_segunda'
                            style={{
                                margin:'10px 10px'
                            }}   
                        >
                            <Select
                                onChange={cambiaMedioPago}
                                defaultValue={matriculado.cuotas.length > 0 ? matriculado.cuotas[1]['id_medio_pago']: ''}
                            >
                                {medioPago.map((med) => (
                                    <Option value={med.id_medio_pago} key={med.id_medio_pago}>{med.nombre}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col sm={24} md={6}>
                        <Form.Item
                            label='Estado:'
                            name='estado_segunda'
                            style={{
                                margin:'10px 10px'
                            }}   
                        >
                            <Select
                                defaultValue={matriculado.cuotas.length > 0 ? matriculado.cuotas[1]['id_estado']: ''}
                            >
                                <Option value={1}>Cancelado</Option>
                                <Option value={0}>Pendiente</Option>

                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col sm={24} md={6}>
                        <Form.Item
                        label='3era Cuota:'
                        name='monto_tercera'
                        style={{
                            margin:'10px 10px'
                        }}
                    >
                        <Input
                            defaultValue={matriculado.cuotas[2].length > 0
                                ? matriculado.cuotas[2].pago
                                    ?matriculado.cuotas[2]['pago']: ''
                                :''}
                        />
                        </Form.Item>
                    </Col>
                    <Col sm={24} md={6}>
                        <Form.Item
                            label='Fecha:'
                            name='fecha_tercera'
                            style={{
                                margin:'10px 10px'
                            }}   
                        >
                            <DatePicker
                                defaultValue={
                                    matriculado.cuotas.length > 0
                                    ? matriculado.cuotas[2].fecha ? 
                                    moment(matriculado.cuotas[2]['fecha'])
                                    :undefined
                                    : undefined
                            
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={24} md={6}>
                        <Form.Item
                            label='Medio:'
                            name='medio_tercera'
                            style={{
                                margin:'10px 10px'
                            }}   
                        >
                            <Select
                                onChange={cambiaMedioPago}
                                defaultValue={matriculado.cuotas.length > 0 ? matriculado.cuotas[2]['id_medio_pago']: ''}
                            >
                                {medioPago.map((med) => (
                                    <Option value={med.id_medio_pago} key={med.id_medio_pago}>{med.nombre}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col sm={24} md={6}>
                        <Form.Item
                            label='Estado:'
                            name='estado_tercera'
                            style={{
                                margin:'10px 10px'
                            }}   
                        >
                            <Select
                                defaultValue={matriculado.cuotas.length > 0 ? matriculado.cuotas[2]['id_estado']: ''}
                            >
                                <Option value={1}>Cancelado</Option>
                                <Option value={2}>Pendiente</Option>

                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                
                <div style={{
                    display:'flex',
                    justifyContent:'center'
                }}>
                    <Button type="primary" htmlType="submit">
                        Guardar
                    </Button>
                </div>
            </Form>
        </Modal>
    )
}

export default ModalAgregarCuotas
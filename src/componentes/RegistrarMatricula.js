import { Modal, Form, Select, Input, Switch, Button, Col, Row, InputNumber, DatePicker } from 'antd';
import React, { useContext, useState } from 'react';
import { agregarMatricula } from '../Acciones';
import { UserContext } from '../context/UserContext';


const RegistrarMatricula = () => {

    const { modalMatricula, usuario, setModalMatricula, medioPago } = useContext(UserContext);

    const { Option } = Select;

    const [ moneda, setMoneda] = useState(false);

    const cerrarModal = () => {
        setModalMatricula(false);
    }


    const cambiaMedioPago = (valor) => {
        valor == 1 ? setMoneda(true) : setMoneda(false);
    }

    const registrarMatricula = async (values) => {

        let respuesta = await agregarMatricula(values);

        if(respuesta){
            console.log('se agregó');
        }else{
            console.log('Ha ocurrido un error');
        }
    }

    return (
        <Modal
            visible={modalMatricula}
            onCancel={cerrarModal}
            footer={[]}
        >
            <h3 style={{textAlign:'center'}}>Registrar Matricula</h3>
            <Form
                layout='vertical'
                autoComplete='off'
                onFinish={registrarMatricula}
            >

                <Row>
                    <Col xs={24} sm={12}>

                        <Form.Item
                            label='Usuario:'
                            name='id_cliente'
                            style={{
                                margin:'10px 10px'
                            }}
                        >

                            <Select>
                                {
                                    usuario.map((usu) => (
                                        <Option key={usu.id_cliente}>{usu.usuario}</Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            label='Forma acceso'
                            name='formas_acceso_sap'
                            style={{
                                margin:'10px 10px'
                            }}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={12}>
                        <Form.Item
                        label='Monto total'
                        name='monto_total'
                        style={{
                            margin:'10px 10px'
                        }}
                            >

                            <InputNumber
                                prefix={moneda ? '$' : 'S/'}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            name='id_medio_pago'
                            label='Forma de pago'
                            style={{
                                margin:'10px 10px'
                            }}
                        >
                            <Select
                                onChange={cambiaMedioPago}
                            >
                                {
                                    medioPago.map((med) => (
                                        <Option key={med.id_medio_pago}>{med.nombre}</Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row>

                    <Col xs={24} sm={12}>
                        <Form.Item
                            label='Activacion'
                            name='activacion'
                            style={{
                                margin:'10px 10px'
                            }}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item
                        label='Multiciplidad'
                        name='multiplicidad'
                        style={{
                            margin:'10px 10px'
                        }}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>

                </Row>
                <Row>

                    <Col xs={24} sm={12}>
                        <Form.Item
                            label='Modulo'
                            name='nombre'
                            style={{
                                margin:'10px 10px'
                            }}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item
                        label='Fecha'
                        name='fecha'
                        style={{
                            margin:'10px 10px'
                        }}
                        >
                            <DatePicker/>
                        </Form.Item>
                    </Col>

                </Row>
                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    marginTop:'10px',
                    marginBottom: '0px'
                }}>
                    <Button type="primary" htmlType="submit">
                        Registrar
                    </Button>
                </div>
            </Form>
        </Modal>
    )
}

export default RegistrarMatricula
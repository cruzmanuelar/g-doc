import { Row, Col } from 'antd';
import React from 'react';
import '../estilos/Navegacion.css'
import { Link } from 'react-router-dom';

const Navegacion = () => {
    return (
        <Row>
            <Col
                span={24}
                style={{
                    display:'flex',
                    justifyContent:'right',
                    backgroundColor:'#7bb8f5',
                }}
            >
                <Link style={{margin:'6px', color: 'white', fontSize:'1rem'}} to='/registro'>Registrar</Link>
                <Link style={{margin:'6px', color: 'white', fontSize:'1rem'}} to='/cuotas'>Cuotas</Link>
                <Link style={{margin:'6px', color: 'white', fontSize:'1rem'}} to='/usuarios'>Usuarios</Link>
                <Link style={{margin:'6px', color: 'white', fontSize:'1rem'}} to='/matricula'>Matricula</Link>
            </Col>
        </Row>
    )
}

export default Navegacion
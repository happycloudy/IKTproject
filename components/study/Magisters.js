import React from 'react';
import {Row, Col} from "react-bootstrap";

const Magisters = () => {
    let color = 'white'
    let BlockStyle = {
        backgroundColor: '#308DE4',
        height: '30vh',
        textAlign: 'center',
        color: color,
        borderRadius: '20px'
    }
    return (
        <div style={BlockStyle} className='mt-5 pt-2'>
            <Row className='mt-2'>
                <Col>
                    Магистратура
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    <a href="" style={{textDecoration: 'none', color: color}}>Информационные системы и технологии (МК-10 - МК-20) - магистерская<br/> программа "Информационные технологии для цифрового проектирования"</a>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <a href="" style={{textDecoration: 'none', color: color}}>Информационные системы и технологии (МК-12 - МК-22) - магистерская<br/> программа "Информационные системы в цифровой экономике"</a>
                </Col>
            </Row>
        </div>
    );
}

export default Magisters;
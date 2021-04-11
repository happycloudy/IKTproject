import React from 'react';
import {Row, Col} from "react-bootstrap";

const Bachelor = () => {
    let color = 'white'
    let BlockStyle = {
        backgroundColor: '#308DE4',
        textAlign: 'center',
        color: color,
        borderRadius: '20px',
        paddingBottom:'5vh'
    }
    return (
        <div style={BlockStyle} className='mt-2'>
            <Row className='mt-2 pt-2'>
                <Col>
                    Бакалавриат
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    <a href="" style={{textDecoration: 'none', color: color}}>Информационные системы и технологии (КС-10 - КС-40)</a>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <a href="" style={{textDecoration: 'none', color: color}}>Информатика и вычислительная техника (КС-14 - КС-44)</a>
                </Col>
            </Row>
        </div>
    );
}

export default Bachelor;
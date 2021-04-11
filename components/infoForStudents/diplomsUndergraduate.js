import React from 'react';
import {Row, Col} from "react-bootstrap";

const DiplomsUndergraduate = () => {
    let color = 'white'
    let BlockStyle = {
        backgroundColor: '#308DE4',
        textAlign: 'center',
        color: color,
        borderRadius: '20px',
        paddingBottom:'5vh',
        paddingTop:'5vh'
    }
    return (
        <div style={BlockStyle} className='mt-2'>
            <Row>
                <Col>
                    <a href="" style={{textDecoration: 'none', color: color}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <a href="" style={{textDecoration: 'none', color: color}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <a href="" style={{textDecoration: 'none', color: color}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <a href="" style={{textDecoration: 'none', color: color}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <a href="" style={{textDecoration: 'none', color: color}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                </Col>
            </Row>
        </div>
    );
}

export default DiplomsUndergraduate;
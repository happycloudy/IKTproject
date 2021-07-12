import {Col, Container, Row} from 'react-bootstrap'
import React from "react";
import Aspirants from "./Aspirants";
import Diploms from "./Diploms";


export default function StudyInfo(props) {
    return (
        <>
            <Row className='mt-5' style={{backgroundColor: 'rgba(255,255,255,0.2)', textAlign: 'center', borderRadius: '15px'}}>
                <Col>
                    <h4>Аспирантам</h4>
                    <Aspirants text={props.text} image={props.image}/>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>
                    <h4>Темы дипломных работ</h4>
                    <Diploms/>
                </Col>
            </Row>
        </>
    )
}
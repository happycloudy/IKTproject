import React from 'react';
import {Col, Container} from "react-bootstrap";
import Students from "./info/student";
import Aspirants from "./info/aspirants";

function InfoList(props) {
    return (
        <Container className='mt-5 mb-5' style={{backgroundColor: 'rgba(255,255,255,0.2)', textAlign: 'center', borderRadius: '15px'}}>
            <div>
                <Col className='mt-2'>
                    <h3>Студентам</h3>
                </Col>
                <Students/>
                <Col>
                    <h3 className='mt-2'>Аспирантам</h3>
                </Col>
                <Aspirants/>
            </div>
        </Container>
    );
}

export default InfoList;
import {Col, Container, Row} from 'react-bootstrap'
import ApplyingInfo from "./infoForEntrants/applyingInfo";
import Aspirants from "./graduate/aspirants";
import React from "react";

export default function ScienceInfo(props) {
    return (
        <div>
            <Container className='mt-5 mb-5' style={{backgroundColor: 'rgba(255,255,255,0.2)', textAlign: 'center', borderRadius: '15px'}}>
                <Row>
                    <Col>
                        <h2>Информация о приеме</h2>
                        <ApplyingInfo/>
                    </Col>
                </Row>


            </Container>
        </div>
    )
}
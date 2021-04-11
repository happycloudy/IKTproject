import {Col, Container, Row} from 'react-bootstrap'
import React from "react";
import Aspirants from "./graduate/aspirants";
import Devs from "./science/Devs";
import ScienceLectures from "./science/ScienceLectures";
import Diploms from "./graduate/diploms";


export default  function StudyInfo(props) {
    return(
        <div>
            <Container className='mt-5 mb-5 pb-2' style={{backgroundColor: 'rgba(255,255,255,0.2)', textAlign: 'center', borderRadius: '15px'}}>
                <Row>
                    <Col>
                        <h2>Аспирантам</h2>
                        <Aspirants/>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <h2>Темы дипломных работ</h2>
                        <Diploms/>
                    </Col>
                </Row>
                <Col className='mt-5'>
                    <h3>Научная деятельность</h3>
                </Col>
                <Col className='mt-5'>
                    <h4>Разработки</h4>
                </Col>
                <Devs/>
                <Col className='mt-5'>
                    <h4>Научные лекции и семинары</h4>
                </Col>
                <ScienceLectures/>

            </Container>
        </div>
    )
}
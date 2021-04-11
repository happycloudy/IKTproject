import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Aspirants from "./graduate/aspirants";
import Bachelor from "./infoForStudents/Bachelor";
import Magisters from "./infoForStudents/Magisters";
import Students from "./infoForStudents/student";
import Devs from "./science/Devs";
import ScienceLectures from "./science/ScienceLectures";
import DiplomsUndergraduate from "./infoForStudents/diplomsUndergraduate";

function InfoList(props) {
    return (
        <Container className='mt-5 mb-5' style={{backgroundColor: 'rgba(255,255,255,0.2)', textAlign: 'center', borderRadius: '15px'}}>
            <div>
                <Col className='mt-2'>
                    <h3>Студентам</h3>
                </Col>
                <Students/>
                <Col className='mt-5'>
                    <h3>Бакалаврам</h3>
                </Col>
                <Bachelor/>
                <Col className='mt-5'>
                    <h3>Магистрам</h3>
                </Col>
                <Magisters/>
                <Col className='mt-5'>
                    <h3>Темы дипломных работ</h3>
                </Col>
                <DiplomsUndergraduate/>
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
            </div>
        </Container>
    );
}

export default InfoList;
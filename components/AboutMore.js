import React from 'react';
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import AboutCafedral from "../components/about/AboutCafedral";

const AboutMore = () => {
    const style = {
        backgroundColor: '#308DE4',
        height: '310vh',
        textAlign: 'center',
        borderRadius: '20px'
    }
    return (
        <Container className='mt-5' style={style}>
            <Row className='pt-4'>
                <Col style={{color: 'white'}}>
                    <h2>Кафедра информационных компьютерных технологий</h2>
                </Col>
            </Row>
            <img className='mt-3' src='https://cdnimg.rg.ru/img/content/162/58/91/Depositphotos_68789085_m-2015_d_850.jpg' style={{maxHeight: '20%'}}/>
            <h3 style={{color: 'white'}} className='mt-5'>
                Мы научим вас
            </h3>
            <Row>
                <Col>
                    <ListGroup className='mt-3'>
                        <ListGroup.Item>
                            Проектировать автоматизированные системы любой сложности.
                            Поможем разобраться в AutoCAD и SolidWorks на уровне профессионала
                        </ListGroup.Item>
                        <ListGroup.Item className='mt-3'>
                            Администрировать самые популярные операционные системы.
                            Покажем все тонкости таких систем, как Windows и Linux
                        </ListGroup.Item>
                        <ListGroup.Item className='mt-3'>
                            Программировать прикладные информационные системы. Вы узнаете всё о: C, C++, Delphi,
                            Assembler, VBA, Java, Python, JavaScript и освоите базы данных (в том числе распределенные)
                        </ListGroup.Item>
                        <ListGroup.Item className='mt-3'>
                            Интегрировать специализированные программные пакеты.
                            Расскажем всё о MatLab, MatCad, UniSim, OpenFoam, 1С и Ansys
                        </ListGroup.Item>
                        <ListGroup.Item className='mt-3'>
                            Использовать параллельное программирование и криптографию.
                            Научим использовать CUDA, MPI, OpenMP и объясним основы защиты информации и криптографии
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <AboutCafedral/>
        </Container>
    );
};

export default AboutMore;
import React from 'react';
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import AboutCafedral from "../components/about/AboutCafedral";

const AboutMore = () => {
    const style = {
        backgroundColor: '#308DE4',
        paddingBottom: '5vh',
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
            <img className='mt-3' src='https://cdnimg.rg.ru/img/content/162/58/91/Depositphotos_68789085_m-2015_d_850.jpg'
                 style={{maxHeight: '70%',maxWidth: '70%'}}/>
            <h3 style={{color: 'white'}} className='mt-5'>
                Мы научим вас
            </h3>
            <Row>
                <Col>
                    <ListGroup className='mt-3'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <img style={{flex:"1"}} src='/1.png'/>
                                </Col>
                                <Col xs="12" md="10" lg="10" className='mt-3'>
                                    <p>
                                    Проектировать автоматизированные системы любой сложности.
                                    Поможем разобраться в AutoCAD и SolidWorks на уровне профессионала
                                    </p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className='mt-3'>
                            <Row>
                                <Col>
                                    <img style={{flex:"1"}} src='/2.png'/>
                                </Col>
                                <Col xs="12" md="10" lg="10" className='mt-3'>
                                    <p>
                                        Администрировать самые популярные операционные системы.
                                        Покажем все тонкости таких систем, как Windows и Linux
                                    </p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className='mt-3'>
                            <Row>
                                <Col>
                                    <img style={{flex:"1"}} src='/3.png'/>
                                </Col>
                                <Col xs="12" md="10" lg="10" className='mt-3'>
                                    <p>
                                        Программировать прикладные информационные системы. Вы узнаете всё о: C, C++, Delphi,
                                        Assembler, VBA, Java, Python, JavaScript и освоите базы данных (в том числе распределенные)
                                    </p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className='mt-3'>
                            <Row>
                                <Col>
                                    <img style={{flex:"1"}} src='/4.png'/>
                                </Col>
                                <Col xs="12" md="10" lg="10" className='mt-3'>
                                    <p>
                                        Интегрировать специализированные программные пакеты.
                                        Расскажем всё о MatLab, MatCad, UniSim, OpenFoam, 1С и Ansys
                                    </p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className='mt-3'>
                            <Row>
                                <Col>
                                    <img style={{flex:"1"}} src='/5.png'/>
                                </Col>
                                <Col xs="12" md="10" lg="10" className='mt-3'>
                                    <p>
                                        Использовать параллельное программирование и криптографию.
                                        Научим использовать CUDA, MPI, OpenMP и объясним основы защиты информации и криптографии
                                    </p>
                                </Col>
                            </Row>
                            </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <AboutCafedral/>
        </Container>
    );
};

export default AboutMore;
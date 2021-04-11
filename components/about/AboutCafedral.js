import React from 'react';
import {Col, Container, ListGroup, Row} from "react-bootstrap";

const AboutCafedral = () => {
    const style = {
        backgroundColor: '#308DE4',
        textAlign: 'center',
        borderRadius: '20px'
    }
    return (
        <div className='mt-5' style={style}>
            <Container>
            <h3 style={{color: 'white'}} className='mt-5'>
                О кафедре
            </h3>
            <Row>

                <Col style={{
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    paddingTop: '2vh',
                    paddingBottom: '2vh'
                }}><Row>
                    <Col style={{paddingTop: '2vh'}}>
                        <img src='http://ikt.muctr.ru/images/about/koltsova_broshyra.jpg'/>
                    </Col>
                    <Col xs="12" lg="9" className="mt-5">
                        <h5 className="mt-2">Кольцова Элеонора Моисеевна - заведующая кафедрой, доктор технических наук, профессор</h5>
                    </Col>
                </Row>
                    <Row>
                    <Col>
                        Основана в 2001 году. Кафедра взаимодействует с российскими и зарубежными мировыми лидерами IT-индустрии,
                        обеспечивающих реальную практику и последующее гарантированное трудоустройство студентам и выпускникам.
                        На кафедре используются передовые информационные и мультимедиа технологии.
                        Обучающиеся участвуют и занимают призовые места в конкурсах и олимпиадах в области IT-технологий. 90 % выпускников остаются в Москве.
                        <b>Средняя зарплата выпускников кафедры по рейтингу SuperJob 2019 года составляет 82 000 рублей</b>
                    </Col>
                    </Row>
                </Col>
            </Row>
            </Container>
            <Row>
                <Col>
                    <ListGroup className='mt-3'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <img style={{flex:"1"}} src='/boxi4_1.png'/>
                                </Col>
                                <Col xs="12" md="10" lg="10" className='mt-3'>
                                    <p>
                                        На кафедре работают высококвалифицированные преподаватели, среди которых : 4 профессора, 7 доцентов, 2 старших преподавателя и 2 ассистента
                                    </p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className='mt-3'>
                            <Row>
                                <Col>
                                    <img style={{flex:"1"}} src='/boxi4_2.png'/>
                                </Col>
                                <Col xs="12" md="10" lg="10" className='mt-3'>
                                    <p>
                                        Все обучение проходит на современном оборудовании
                                    </p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className='mt-3'>
                            <Row>
                                <Col>
                                    <img style={{flex:"1"}} src='/boxi4_3.png'/>
                                </Col>
                                <Col xs="12" md="10" lg="10" className='mt-3'>
                                    <p>
                                        Студенты могут использовать мощные графические станции, компьютеры для параллельных вычислений, 3D - принтер, плоттер и МФУ для выполнения заданий и проектов
                                    </p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className='mt-3'>
                            <Row>
                                <Col>
                                    <img style={{flex:"1"}} src='/boxi4_4.png'/>
                                </Col>
                                <Col xs="12" md="10" lg="10" className='mt-3'>
                                    <p>
                                        После 2 курса студенты проходят различного рода практики и активно привлекаются к научно-исследовательской работе
                                    </p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className='mt-3'>

                            <Row>
                                <Col>
                                    <img style={{flex:"1"}} src='/boxi4_5.png'/>
                                </Col>
                                <Col xs="12" md="10" lg="10" className='mt-3'>
                                    <p>
                                        Кафедра расположена в новом и современном здании университета
                                    </p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className='mt-3'>

                            <Row>
                                <Col>
                                    <img style={{flex:"1"}} src='/boxi4_6.png'/>
                                </Col>
                                <Col xs="12" md="10" lg="10" className='mt-3'>
                                    <p>
                                        Все иногородние студенты обеспечиваются местом в общежитии
                                    </p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

        </div>
    );
};

export default AboutCafedral;
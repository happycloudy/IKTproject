import React from 'react';
import {Col, Container, ListGroup, Row} from "react-bootstrap";

const AboutCafedral = () => {
    const style = {
        backgroundColor: '#308DE4',
        textAlign: 'center',
        borderRadius: '20px'
    }
    return (
        <Container className='mt-5' style={style}>
            <h3 style={{color: 'white'}} className='mt-5'>
                О кафедре
            </h3>
            <Row>
                <Col style={{
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    paddingTop: '2vh',
                    paddingBottom: '2vh'
                }}>
                    Кольцова Элеонора Моисеевна - заведующая кафедрой, доктор технических наук, профессор
                    Основана в 2001 году. Кафедра взаимодействует с российскими и зарубежными мировыми лидерами IT-индустрии,
                    обеспечивающих реальную практику и последующее гарантированное трудоустройство студентам и выпускникам.
                    На кафедре используются передовые информационные и мультимедиа технологии.
                    Обучающиеся участвуют и занимают призовые места в конкурсах и олимпиадах в области IT-технологий. 90 % выпускников остаются в Москве.
                    Средняя зарплата выпускников кафедры по рейтингу SuperJob 2019 года составляет 82 000 рублей
                    <Col style={{paddingTop: '2vh'}}>
                        <img src='http://ikt.muctr.ru/images/about/koltsova_broshyra.jpg'/>
                    </Col>
                </Col>
            </Row>
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
        </Container>
    );
};

export default AboutCafedral;
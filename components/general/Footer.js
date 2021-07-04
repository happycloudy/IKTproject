import {Container, Col, Row} from 'react-bootstrap'


export default function Footer(props) {
    return (
        <div className='footer'>
            <div id="wrap">
                <section id="main">
                    <Container>
                        <Row>
                            <Col>
                                <Container className="mt-5 mb-5" style={{textAlign: 'center'}}>
                                    <h4>
                                        <a href="/infoForStudents" style={{color: 'white'}}>Студентам</a>
                                    </h4>
                                    <h4 className="mt-5">
                                        <a href="/infoForEntrants" style={{color: 'white'}}>Абитуриентам</a>
                                    </h4>
                                    <h4 className="mt-5">
                                        <a href="/graduate" style={{color: 'white'}}>Аспирантам</a>
                                    </h4>
                                </Container>
                            </Col>
                            <Col>
                                <Container className="mt-5 mb-5" height="200px" style={{textAlign: 'center'}}>
                                    <h5>
                                        <a href="https://muctr.ru/" style={{color: 'white'}}>Официальный сайт<br/>РХТУ им. Д.И.
                                            Менделеева</a>
                                    </h5>
                                    <h5 className="mt-5">
                                        <a href="https://moodle.muctr.ru/" style={{color: 'white'}}>Учебный портал<br/>РХТУ им. Д.И. Менделеева</a>
                                    </h5>
                                    <h5 className="mt-5">
                                        <a href="https://vk.com/dekanat_itu" style={{color: 'white'}}>Факультет Цифровых<br/>Технологий и
                                            Химического<br/>Инжениринга</a>
                                    </h5>
                                </Container>
                            </Col>
                            <Col>
                                <Row className="mt-5 mb-5" height="200px">
                                    <Col><a href="https://vk.com/ikt_muctr"><img src="/vk.png" width="100%"
                                                                                 className="align-top"
                                                                                 alt="vk"/></a></Col>
                                    <Col><a href="https://www.instagram.com/ikt_muctr/"><img src="/instagram.png"
                                                                                             width="100%"
                                                                                             className="align-top"
                                                                                             alt="instagram"/></a></Col>
                                    <Col><a href="https://www.youtube.com/channel/UCalhcWufdy2LZ8-_TQR6ZJQ"><img
                                        src="/youtube.png" width="100%" className="align-top" alt="youtube"/></a></Col>
                                    </Row>
                                <Row>
                                    <Col>
                                    <h5 className="mt-5" style={{color: 'white', textAlign: 'center'}}>
                                        <a href="https://minobrnauki.gov.ru/" style={{color: 'white'}}>
                                            Министерство Образования и науки Российской Федерации
                                        </a></h5>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <p className="mt-2" style={{color: 'white'}}>©Designed & developed by IKT departament & Mikolae Arion & Yury
                            Lemetyuynen</p>
                        <div className='inverted_fade'/>
                    </Container>
                </section>
            </div>

            <footer>
                <div className="main-gradient">
                </div>
                <div className="dots"/>
                <div className="fade-top"/>
                <div className="fade-bottom"/>
            </footer>
        </div>
    )
}
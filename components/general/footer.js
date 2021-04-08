import {Container,Jumbotron,Col,Row} from 'react-bootstrap'

const FooterStyle = {
    background: '-moz-linear-gradient(bottom, rgba(15,76,134,1), #308DE4 100%)', /* FF3.6+ */
    background: 'linear-gradient(bottom, rgba(15,76,134,1), #308DE4 100%)', /* W3C */
    background: '-webkit-linear-gradient(bottom, rgba(15,76,134,0.8), #308DE4 100%)',
}

export default  function Footer(props) {
    return(
        <div style={FooterStyle}>
            <div id="wrap">
                <section id="main">
                    <Container >
                        <Row>
                            <Col>
                                <Container className="mt-5 mb-5" style={{textAlign:'center'}}>
                                        <h4>
                                            <a href="/" style={{color:'white'}}>Студентам</a>
                                        </h4>
                                        <h4 className="mt-5">
                                            <a href="/" style={{color:'white'}}>Абитуриентам</a>
                                        </h4>
                                        <h4 className="mt-5">
                                            <a href="/" style={{color:'white'}}>Аспирантам</a>
                                        </h4>
                                </Container>
                            </Col>
                            <Col>
                                <Container className="mt-5 mb-5" height="200px" style={{textAlign:'center'}}>
                                        <h5>
                                            <a href="/" style={{color:'white'}}>Официальный сайт<br/>РХТУ им. Д.И. Менделеева</a>
                                        </h5>
                                        <h5 className="mt-5">
                                            <a href="/" style={{color:'white'}}>Учебный портал<br/>РХТУ им. Д.И. Менделеева</a>
                                        </h5>
                                        <h5 className="mt-5">
                                            <a href="/" style={{color:'white'}}>Факультет Цифровых<br/>Технологий и Химического<br/>Инжениринга</a>
                                        </h5>
                                </Container>
                            </Col>
                            <Col>
                                    <Row className="mt-5 mb-5"  height="200px">
                                        <Col><a href="https://vk.com/ikt_muctr"><img src="/vk.png" width="100%" className="align-top" alt="vk"/></a></Col>
                                        <Col><a href="https://www.instagram.com/ikt_muctr/"><img src="/instagram.png" width="100%" className="align-top" alt="instagram"/></a></Col>
                                        <Col><a href="https://www.youtube.com/channel/UCalhcWufdy2LZ8-_TQR6ZJQ"><img src="/youtube.png" width="100%" className="align-top" alt="youtube"/></a></Col>
                                        <Col><a href="https://twitter.com/dmuctr"><img src="/twitter.png" width="100%" className="align-top" alt="twitter"/></a></Col>
                                    </Row>
                                    <Row>
                                    <h5 className="mt-5" style={{color:'white',textAlign:'center'}}>Министерство Образования и науки Российской Федерации</h5>
                                    </Row>    
                            </Col>
                        </Row>
                        <p style={{color:'white'}}>©Designed & developed by IKT departament & Mikolae Arion & Yury Lemetyuynen</p>
                    </Container>
                </section>
                </div>

                <footer>
                <div className="main-gradient">
                
                </div>  
                &nbsp;
                <div className="dots"/>
                <div className="fade-top"/>
                </footer>
        </div>
    )
}
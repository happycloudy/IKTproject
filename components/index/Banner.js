import {Container, Jumbotron, Col, Row} from 'react-bootstrap'
import {Fade} from 'react-reveal'


export default function Banner() {
    const jumboStyle = {
        background: '#308DE4',
        color: 'white',
        height: '100%'
    }
    const imageBannerStyle = {
        height: '100%',
        width: '100%',
        minWidth: '200px'
    }

    return (
        <Jumbotron style={jumboStyle} fluid className="mb-0 pb-5">
            <Container
                style={{backgroundColor: 'rgba(255,255,255,0.2)', textAlign: 'center', borderRadius: '15px'}}>
                <Row className="pb-3 mb-2">
                    <Col>
                        <Container>
                            <h1 className="myh1">Хочешь научиться программировать?</h1>
                            <h2 className="myh2">Тогда поступай к нам!</h2>
                            <Row className="mt-5">
                                <Col>
                                    <Fade left>
                                        <img src="/php.png" width="100%" className="d-inline-block align-top"
                                             alt="php"/>
                                    </Fade>
                                </Col>
                                <Col>
                                    <Fade bottom>
                                        <img src="/c.png" width="100%" className="mt-5 d-inline-block align-top"
                                             alt="c++"/>
                                    </Fade>
                                </Col>
                                <Col>
                                    <Fade top>
                                        <img src="/jar.png" width="100%" className="d-inline-block align-top"
                                             alt="jar"/>
                                    </Fade>
                                </Col>
                                <Col>
                                    <Fade right>
                                        <img src="/html.png" width="100%" className=" mt-5 d-inline-block align-top"
                                             alt="html"/>
                                    </Fade>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col className="mt-5">
                        <Fade right>
                            <img src="/student.png" style={imageBannerStyle} className="align-center" alt="student"/>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}
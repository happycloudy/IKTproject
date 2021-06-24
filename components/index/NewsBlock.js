import styles from '../../styles/index.module.css'
import {Container, Jumbotron, Col, Row} from 'react-bootstrap'
import React from 'react'
import Particles from "react-particles-js";
import ParticleStyle from './ParticleStyle'

const jumboStyle = {
    color: 'white',
    backgroundColor: 'transparent'
}

const containerStyle = {
    background: '#308DE4',
    textAlign: 'center',
    borderRadius: '15px',
}

export default class NewsBlock extends React.Component {
    render() {
        return (
            <div className={styles.newsWrap}>
                <Particles params={ParticleStyle}
                           className={styles.particles}
                />
                <Jumbotron style={jumboStyle} fluid className="mb-0 mt-0 pt-3 pb-3">
                    <Container className="pb-3 pt-3" style={containerStyle}>
                        <h1 className="mb-3" style={{color: 'white', textAlign: 'center'}}>Новости</h1>
                        <Row>
                            <Col>
                                <Container>
                                    <img
                                        src="/news.png"
                                        width="80%"
                                        height="50%"
                                        className="align-top"
                                        alt="IKT logo"
                                    />
                                    <h2>Новость 1</h2>
                                    <p>Осознание непонимания приходит постепенно<br/>Но непонимания осознания неизлечимо
                                    </p>
                                </Container>
                            </Col>
                            <Col>
                                <Container>
                                    <img
                                        src="/news.png"
                                        width="80%"
                                        height="50%"
                                        className="align-top"
                                        alt="IKT logo"
                                    />
                                    <h2>Новость 2</h2>
                                    <p>Осознание непонимания приходит постепенно<br/>Но непонимания осознания неизлечимо
                                    </p>
                                </Container>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col>
                                <Container>
                                    <img
                                        src="/news.png"
                                        width="80%"
                                        height="50%"
                                        className="align-top"
                                        alt="IKT logo"
                                    />
                                    <h2>Новость 3</h2>
                                    <p>Осознание непонимания приходит постепенно<br/>Но непонимания осознания неизлечимо
                                    </p>
                                </Container>
                            </Col>
                            <Col>
                                <Container>
                                    <img
                                        src="/news.png"
                                        width="80%"
                                        height="50%"
                                        className="align-top"
                                        alt="IKT logo"
                                    />
                                    <h2>Новость 4</h2>
                                    <p>Осознание непонимания приходит постепенно<br/>Но непонимания осознания неизлечимо
                                    </p>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

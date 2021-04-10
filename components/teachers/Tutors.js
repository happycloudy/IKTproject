import {Card, Container, Col, Row} from 'react-bootstrap'
import CardFlip from './Card'

export default function Tutors(props) {
    const containerStyle = {
        textAlign: 'center',
        color: 'white'
    }
    const cardStyle = {
        border: '1px solid',
        borderRadius: '10px',
        margin: 'auto',
        width: '20vw',
        backgroundColor: '#308DE4',
    }
    return (
        <div>
            <Container>
                <CardFlip/>

                <Row className="mb-3">
                    <Col>
                        <Container style={containerStyle} className="mt-3 mb-3">
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src="/Jensa.png"/>
                                <Card.Body>
                                    <Card.Title>Женса А.В.</Card.Title>
                                    <Card.Text>Доцент</Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    <Col>
                        <Container style={containerStyle} className="mt-3 mb-3">
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src="/Jensa.png"/>
                                <Card.Body>
                                    <Card.Title>Женса А.В.</Card.Title>
                                    <Card.Text>Доцент</Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container style={containerStyle} className="mt-3 mb-3">
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src="/Jensa.png"/>
                                <Card.Body>
                                    <Card.Title>Женса А.В.</Card.Title>
                                    <Card.Text>Доцент</Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    <Col>
                        <Container style={containerStyle} className="mt-3 mb-3">
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src="/Jensa.png"/>
                                <Card.Body>
                                    <Card.Title>Женса А.В.</Card.Title>
                                    <Card.Text>Доцент</Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container style={containerStyle} className="mt-3 mb-3">
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src="/Jensa.png"/>
                                <Card.Body>
                                    <Card.Title>Женса А.В.</Card.Title>
                                    <Card.Text>Доцент</Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    <Col>
                        <Container style={containerStyle} className="mt-3 mb-3">
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src="/Jensa.png"/>
                                <Card.Body>
                                    <Card.Title>Женса А.В.</Card.Title>
                                    <Card.Text>Доцент</Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
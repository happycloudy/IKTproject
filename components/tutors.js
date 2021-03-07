import styles from '../styles/Home.module.css'
import {Card,Container,Jumbotron,Col,Row} from 'react-bootstrap'

export default  function Tutors(props) {
    const containerStyle ={
        textAlign:'center', 
        color:'white',
    }
    const jumboStyle ={
        background: '#308DE4',
    }
    const cardStyle = {
        borderRadius:'10px',
        margin:'auto', 
        width: '18rem',
        backgroundColor:'rgba(255,255,255,0.1)',
    }
    return(
        <div>
            <Jumbotron style={jumboStyle} fluid className="mb-0 pb-5">
                <Container>
                    <Row className="mb-3">
                        <Col>
                        <Container style={containerStyle} className="pt-3 pb-3">
                        <Card style={cardStyle}>
                        <Card.Img variant="top" src="/Jensa.png" />
                        <Card.Body>
                            <Card.Title>Женса А.В.</Card.Title>
                            <Card.Text>Доцент</Card.Text>
                        </Card.Body>
                        </Card>
                        </Container>
                        </Col>
                        <Col>
                        <Container style={containerStyle} className="pt-3 pb-3">
                        <Card style={cardStyle}>
                        <Card.Img variant="top" src="/Jensa.png" />
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
                        <Container style={containerStyle} className="pt-3 pb-3">
                        <Card style={cardStyle}>
                        <Card.Img variant="top" src="/Jensa.png" />
                        <Card.Body>
                            <Card.Title>Женса А.В.</Card.Title>
                            <Card.Text>Доцент</Card.Text>
                        </Card.Body>
                        </Card>
                        </Container>
                        </Col>
                        <Col>
                        <Container style={containerStyle} className="pt-3 pb-3">
                        <Card style={cardStyle}>
                        <Card.Img variant="top" src="/Jensa.png" />
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
                        <Container style={containerStyle} className="pt-3 pb-3">
                        <Card style={cardStyle}>
                        <Card.Img variant="top" src="/Jensa.png" />
                        <Card.Body>
                            <Card.Title>Женса А.В.</Card.Title>
                            <Card.Text>Доцент</Card.Text>
                        </Card.Body>
                        </Card>
                        </Container>
                        </Col>
                        <Col>
                        <Container style={containerStyle} className="pt-3 pb-3">
                        <Card style={cardStyle}>
                        <Card.Img variant="top" src="/Jensa.png" />
                        <Card.Body>
                            <Card.Title>Женса А.В.</Card.Title>
                            <Card.Text>Доцент</Card.Text>
                        </Card.Body>
                        </Card>
                        </Container>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron> 
        </div>
    )
}
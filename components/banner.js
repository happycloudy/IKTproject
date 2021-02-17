import styles from '../styles/Home.module.css'
import {Container,Jumbotron,Col,Row,Collapse} from 'react-bootstrap'


export default  function Banner(props) {
    const jumboStyle ={
        background: '#308DE4',
        color:'white',
    }
    const h1Style = {
        fontSize: '5vw',
    }
    const h2Style = {
        fontSize: '4vw',
    }
    return(
        <div>
            <Jumbotron style={jumboStyle} fluid>
            <Container>
                <Row>
                    <Col>
                        <h1 style={h1Style}>Хочешь научиться программировать?</h1>
                        <h2 style={h2Style}>Тогда поступай к нам!</h2>
                        <Row className="mt-5">
                        <Col><img src="/php.png" width="100%" className="d-inline-block align-top" alt="php"/></Col>
                        <Col><img src="/c.png" width="100%" className="mt-5 d-inline-block align-top" alt="c++"/></Col>
                        <Col><img src="/jar.png" width="100%" className="d-inline-block align-top" alt="jar"/></Col>
                        <Col><img src="/html.png" width="100%" className=" mt-5 d-inline-block align-top" alt="html"/></Col>
                        </Row>
                    </Col>
                    <Col className="mt-5">
                        <img src="/student.png" width="100%" className="d-inline-block align-top" alt="student"/>
                    </Col>
                </Row>
                <Row className="mt-5" style={{backgroundColor:'rgba(255,255,255,0.2',textAlign:'center', borderRadius:'15px'}}>
                    <Col>
                        <h3>Листай вниз</h3>
                    </Col>
                </Row>
            </Container>
            
            </Jumbotron> 
        </div>
    )
}
import styles from '../../styles/Home.module.css'
import {Container,Jumbotron,Col,Row,Collapse} from 'react-bootstrap'

export default  function Banner(props) {
    const jumboStyle ={
        background: '#308DE4',
        color:'white',
        height: '100%'
    }


    return(
        <div style={{
            height: '100vh'
        }}>
            <Jumbotron style={jumboStyle} fluid className="mb-0 pb-5">
            <Container style={{backgroundColor:'rgba(255,255,255,0.2)', textAlign:'center', borderRadius:'15px'}}>
                <Row className="pb-3">
                    <Col>
                        <Container>
                        <h1 className="myh1">Хочешь научиться программировать?</h1>
                        <h2 className="myh2">Тогда поступай к нам!</h2>
                        <Row className="mt-5">
                        <Col><img src="/php.png" width="100%" className="d-inline-block align-top" alt="php"/></Col>
                        <Col><img src="/c.png" width="100%" className="mt-5 d-inline-block align-top" alt="c++"/></Col>
                        <Col><img src="/jar.png" width="100%" className="d-inline-block align-top" alt="jar"/></Col>
                        <Col><img src="/html.png" width="100%" className=" mt-5 d-inline-block align-top" alt="html"/></Col>
                        </Row>
                        </Container>
                    </Col>
                    <Col className="mt-5">
                    <Container>
                        <img src="/student.png" width="100%" className="d-inline-block align-top" alt="student"/>
                    </Container>
                    </Col>
                </Row>
            </Container>   
            </Jumbotron> 
        </div>
    )
}
import {Col, Container, Row} from 'react-bootstrap'
import Bachelor from "../components/study/Bachelor";
import Magisters from "../components/study/Magisters";


export default  function StudyInfo(props) {
    return(
        <div>
            <Container className='mt-5 mb-5 ' >
                <Row>
                    <Col>
                        <Bachelor/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Magisters/>
                    </Col>
                </Row>
                {/*<Dimloms/>*/}
            </Container>
        </div>
    )
}
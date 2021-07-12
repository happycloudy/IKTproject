import {Col, Row} from 'react-bootstrap'
import styles from '../../styles/students.module.css'
import {Fade} from 'react-reveal'


export default function Aspirants(props) {
    let maxHeightStyle = {
        maxHeight: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <Row style={{background: '#308DE4', color: 'white', borderRadius: '30px'}}>
            <Col style={maxHeightStyle}>
                <div>
                    {props.text}
                </div>
            </Col>
            <Col style={maxHeightStyle}>
                <Fade>
                    <img className={styles.imgStudent}
                         src={props.image}/>
                </Fade>
            </Col>
        </Row>
    )
}
import {Col, Row} from 'react-bootstrap'
import {Fade} from 'react-reveal'
import styles from '../../styles/students.module.css'

export default function Devs(props) {
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
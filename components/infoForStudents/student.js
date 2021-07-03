import {Col, Row} from 'react-bootstrap'
import styles from '../../styles/students.module.css'

export default function Students(props) {
    let maxHeightStyle ={
        maxHeight: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div>
            <Col style={{background: '#308DE4', color: 'white', borderRadius: '30px'}}>
                <Row>
                    <Col style={maxHeightStyle}>
                        <div>
                            {props.text}
                        </div>
                    </Col>
                    <Col style={maxHeightStyle}>
                        <img className={styles.imgStudent}
                            src={'https://st.depositphotos.com/1760224/3660/i/600/depositphotos_36606389-stock-photo-sport-success-on-sunset-background.jpg'}/>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}
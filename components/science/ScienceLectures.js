import {Col, Row} from 'react-bootstrap'

export default function Information(props) {
    let maxHeightStyle = {
        maxHeight: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (

        <Row className='mt-2' style={{background: '#308DE4', color: 'white', borderRadius: '30px'}}>
            <Col style={maxHeightStyle}>
                <img style={{maxHeight: '80%', borderRadius: '30px'}}
                     src={'https://st.depositphotos.com/1760224/3660/i/600/depositphotos_36606389-stock-photo-sport-success-on-sunset-background.jpg'}/>
            </Col>
            <Col style={maxHeightStyle}>
                <div>
                    {props.lectures}
                </div>
            </Col>
            <Col style={maxHeightStyle}>
                <h4>Научные семинары и лекции</h4>
            </Col>
        </Row>
    )
}
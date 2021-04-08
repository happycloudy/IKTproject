import {Col, Row} from 'react-bootstrap'

export default function Information(props) {
    let maxHeightStyle = {
        maxHeight: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (

        <Row style={{background: '#308DE4', color: 'white', borderRadius: '30px'}}>
            <Col style={maxHeightStyle}>
                <h4>Программные разработки студентов и сотрудников</h4>
            </Col>
            <Col style={maxHeightStyle}>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque delectus
                    deserunt distinctio ducimus eaque est expedita illo, iusto mollitia obcaecati
                    perferendis sint voluptate! Est ipsam officia omnis quam rem!
                </div>
            </Col>
            <Col style={maxHeightStyle}>
                <img style={{maxHeight: '80%', borderRadius: '30px'}}
                     src={'https://st.depositphotos.com/1760224/3660/i/600/depositphotos_36606389-stock-photo-sport-success-on-sunset-background.jpg'}/>
            </Col>
        </Row>
    )
}
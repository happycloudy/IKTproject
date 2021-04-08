import {Container, Jumbotron, Col, Row, Collapse} from 'react-bootstrap'

export default function Aspirants(props) {
    let maxHeightStyle ={
        maxHeight: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div className='mt-3'>
            <Col style={{background: '#308DE4', color: 'white', borderRadius: '30px'}}>
                <Row>
                    <Col style={maxHeightStyle}>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque delectus
                            deserunt distinctio ducimus eaque est expedita illo, iusto mollitia obcaecati
                            perferendis sint voluptate! Est ipsam officia omnis quam rem!
                        </div>
                    </Col>
                    <Col style={maxHeightStyle}>
                        <img style={{maxHeight: '80%',borderRadius: '30px'}}
                             src={'https://st.depositphotos.com/1760224/3660/i/600/depositphotos_36606389-stock-photo-sport-success-on-sunset-background.jpg'}/>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}
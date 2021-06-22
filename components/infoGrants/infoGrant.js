import styles from '../../styles/index.module.css'
import {Container,Col,Row,Collapse} from 'react-bootstrap'
import React from "react";

export default  function InfoGrant(props) {
    let BlockStyle = {
        backgroundColor: '#308DE4',
        textAlign: 'center',
        color: 'white',
        borderRadius: '20px',
        paddingBottom:'5vh',
        paddingTop:'5vh'
    }
    return(
        <Container>
            <h2 align={'center'}>Информация о грантах</h2>
            <div style={BlockStyle} className='mt-3 mb-3'>
                <Row>
                    <Col>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
import React from 'react';
import {Row, Col, Button} from "react-bootstrap";
import axios from "axios";

class DiplomsUndergraduate extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        axios.get('http://localhost:1337/diplomas')
    }

    render() {
        let color = 'white'
        let BlockStyle = {
            backgroundColor: '#308DE4',
            textAlign: 'center',
            color: color,
            borderRadius: '20px',
            paddingBottom: '5vh',
            paddingTop: '5vh'
        }
        return (
            <div style={BlockStyle} className='mt-2'>
                <Row>
                    <Col>
                        <a href="/diplomas" style={{textDecoration: 'none', color: color}}>
                            <Button variant='light'>
                                Дипломы 2019
                            </Button>
                        </a>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col>
                        <a href="" style={{textDecoration: 'none', color: color}}>
                            <Button variant='light'>
                                Дипломы 2018
                            </Button>
                        </a>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col>
                        <Button variant='light' as='a' href=''>
                            Дипломы 2017
                        </Button>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default DiplomsUndergraduate;
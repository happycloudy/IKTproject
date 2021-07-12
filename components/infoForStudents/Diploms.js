import React from 'react';
import DiplomasDirection from "../diplomases/DiplomasDirection";
import {Accordion, Button, Card, Col, Row} from "react-bootstrap";
import axios from "axios";

class Diploms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diplomas: [],
            diplomasDirections: [],
            years: [{
                Year: 0
            }]
        }

    }

    async componentDidMount() {
        let diplomasDirections = await axios.get('http://localhost:1337/directions-graduates')
        let years = await axios.get('http://localhost:1337/diplomas-graduate-years')
        let diplomas = await axios.get('http://localhost:1337/diplomas-graduates')
        await this.setState({
            diplomasDirections: diplomasDirections.data,
            years: years.data,
            diplomas: diplomas.data
        })
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
                <div style={BlockStyle} className='mt-2 d-flex justify-content-center align-items-center flex-column'>
                    {this.state.years.map((year, id) =>
                        <Row style={{width: '100%', marginTop: '1vh'}} key={id}>
                            <Col>
                                <Accordion>
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                {year.Year}
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <DiplomasDirection directions={this.state.diplomasDirections}
                                                                   diplomas={this.state.diplomas}
                                                                   year={year.Year}
                                                />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>
                    )}
                </div>
            </div>
        );
    }
}

export default Diploms;
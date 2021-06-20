import React from 'react';
import {Row, Col, Button, Accordion, Card} from "react-bootstrap";
import axios from "axios";
import DiplomasDirection from "../Diplomases/DiplomasDirection";

class DiplomsUndergraduate extends React.Component {
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
        let diplomasDirections = await axios.get('http://localhost:1337/directions')
        let years = await axios.get('http://localhost:1337/diplomas-years')
        let diplomas = await axios.get('http://localhost:1337/diplomas')
        await this.setState({
            diplomasDirections: diplomasDirections.data,
            years: years.data,
            diplomas: diplomas.data
        })
    }

    render() {
        let BlockStyle = {
            backgroundColor: '#308DE4',
            textAlign: 'center',
            color: 'white',
            borderRadius: '20px',
            paddingBottom: '5vh',
            paddingTop: '5vh'
        }
        return (
            <div style={BlockStyle} className='mt-2 d-flex justify-content-center'>
                <Row>
                    <Col>
                        {this.state.years.map((year,id) =>
                            <Accordion key={id}>
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
                                            />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        )}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DiplomsUndergraduate;
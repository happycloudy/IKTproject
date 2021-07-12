import React from 'react';
import {Row, Col, Button, Accordion, Card} from "react-bootstrap";
import axios from "axios";
import DiplomasDirection from "../diplomases/DiplomasDirection";

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
        return (
            <div className='mt-2 d-flex justify-content-center align-items-center flex-column blockStyle'>
                {this.state.years.map((year, id) =>
                    <Row style={{width:'100%', marginTop: '1vh'}} key={id}>
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
        );
    }
}

export default DiplomsUndergraduate;
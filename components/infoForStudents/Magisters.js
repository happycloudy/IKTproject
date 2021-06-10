import React from 'react';
import {Row, Col, Button} from "react-bootstrap";
import ModalMagisters10 from "./Lectures/ModalMagisters10";
import ModalMagisters12 from "./Lectures/ModalMagisters12";
import axios from "axios";

class Magisters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMagisterShow10: false,
            isMagisterShow12: false,
            Lectures: [
                {
                    Description: '',
                    Lectures: [
                        {
                            description: '',
                            lecture: {
                                url: ''
                            }
                        }
                    ]
                },
                {
                    Description: '',
                    Lectures: [
                        {
                            description: '',
                            lecture: {
                                url: ''
                            }
                        }
                    ]
                },
                {
                    Description: '',
                    Lectures: [
                        {
                            description: '',
                            lecture: {
                                url: ''
                            }
                        }
                    ]
                }
            ],
            Semesters10: [],
            Semesters12: []
        }
        this.handleShowSemestersMagister10 = this.handleShowSemestersMagister10.bind(this);
        this.handleCloseSemestersMagister10 = this.handleCloseSemestersMagister10.bind(this);
        this.handleShowSemestersMagister12 = this.handleShowSemestersMagister12.bind(this);
        this.handleCloseSemestersMagister12 = this.handleCloseSemestersMagister12.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:1337/lectures').then(res => {
            this.setState({
                Lectures: res.data
            })
        })
        axios.get('http://localhost:1337/semesters').then(res => {
            this.setState({
                Semesters10: res.data[1].Semesters,
                Semesters12: res.data[2].Semesters
            })
        })
    }

    handleShowSemestersMagister10() {
        this.setState({
            isMagisterShow10: true
        })
    }
    
    handleCloseSemestersMagister10() {
        this.setState({
            isMagisterShow10: false
        })
    }

    handleShowSemestersMagister12() {
        this.setState({
            isMagisterShow12: true
        })
    }

    handleCloseSemestersMagister12() {
        this.setState({
            isMagisterShow12: false
        })
    }

    render() {
        let color = 'white'
        let BlockStyle = {
            backgroundColor: '#308DE4',
            textAlign: 'center',
            color: color,
            borderRadius: '20px',
            paddingBottom: '5vh'
        }
        return (
            <div style={BlockStyle} className='mt-2 pt-2'>
                <Row className='mt-2'>
                    <Col>
                        Магистратура
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        <Button variant='light' onClick={this.handleShowSemestersMagister10} style={{textDecoration: 'none'}}>Информационные
                            системы и технологии (МК-10 - МК-20) - магистерская<br/> программа "Информационные
                            технологии
                            для цифрового проектирования"</Button>
                        <ModalMagisters10 show={this.state.isMagisterShow10}
                                          lectures={this.state.Lectures}
                                          semesters={this.state.Semesters10}
                                          handleShowSemestersMagister10={this.handleShowSemestersMagister10}
                                          handleCloseSemestersMagister10={this.handleCloseSemestersMagister10}

                        />
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col>
                        <Button variant='light' onClick={this.handleShowSemestersMagister12} style={{textDecoration: 'none'}}>Информационные
                            системы и технологии (МК-12 - МК-22) - магистерская<br/> программа "Информационные системы в
                            цифровой экономике"</Button>
                        <ModalMagisters12 show={this.state.isMagisterShow12}
                                          lectures={this.state.Lectures}
                                          semesters={this.state.Semesters12}
                                          handleShowSemestersMagister12={this.handleShowSemestersMagister12}
                                          handleCloseSemestersMagister12={this.handleCloseSemestersMagister12}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Magisters;
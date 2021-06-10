import React from 'react';
import {Row, Col, Button} from "react-bootstrap";
import ModalBachelors from "./Lectures/ModalBachelors";
import axios from "axios";

class Bachelor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBachelorSemestersShow: false,
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
                }
            ],
            Semesters: []
        }
        this.handleShowBachelorSemesters = this.handleShowBachelorSemesters.bind(this);
        this.handleCloseBachelorSemesters = this.handleCloseBachelorSemesters.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:1337/lectures').then(res => {
            this.setState({
                Lectures: res.data
            })
        })
        axios.get('http://localhost:1337/semesters').then(res => {
            this.setState({
                Semesters: res.data[0].Semesters
            })
        })

    }

    handleShowBachelorSemesters(){
        this.setState({
            isBachelorSemestersShow: true
        })
    }
    handleCloseBachelorSemesters(){
        this.setState({
            isBachelorSemestersShow: false
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
            <div style={BlockStyle} className='mt-2'>
                <Row className='mt-2 pt-2'>
                    <Col>
                        Бакалавриат
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        <Button variant='light' onClick={this.handleShowBachelorSemesters} style={{textDecoration: 'none'}}>Информационные
                            системы и технологии
                            (КС-10 - КС-40)</Button>
                        <ModalBachelors show={this.state.isBachelorSemestersShow}
                                        lectures={this.state.Lectures}
                                        semesters={this.state.Semesters}
                                        handleClose={this.handleCloseBachelorSemesters}
                                        handleShow={this.handleShowBachelorSemesters}
                        />
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col>
                        <Button variant='light' onClick={this.handleShowBachelorSemesters} style={{textDecoration: 'none'}}>Информатика
                            и вычислительная техника
                            (КС-14 - КС-44)</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}


export default Bachelor;
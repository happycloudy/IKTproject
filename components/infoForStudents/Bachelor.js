import React from 'react';
import {Row, Col, Button} from "react-bootstrap";
import ModalBachelors from "./Lectures/ModalBachelors";
import axios from "axios";
import styles from '../../styles/students.module.css'

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

    handleShowBachelorSemesters() {
        this.setState({
            isBachelorSemestersShow: true
        })
    }

    handleCloseBachelorSemesters() {
        this.setState({
            isBachelorSemestersShow: false
        })
    }

    render() {
        return (
            <div className='mt-2 blockStyle'>
                <Row >
                    <Col>
                        <Button variant='light' onClick={this.handleShowBachelorSemesters}
                                className={styles.clickableButton}>
                            Информационные
                            системы и технологии
                            (КС-10 - КС-40)
                        </Button>
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
                        <Button variant='light' onClick={this.handleShowBachelorSemesters}
                                className={styles.clickableButton}>
                            Информатика
                            и вычислительная техника
                            (КС-14 - КС-44)
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}


export default Bachelor;
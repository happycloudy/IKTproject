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
            lectures : [
                {
                    Description: '',
                    Lecture: [
                        {
                            url: ''
                        }
                    ]
                }
            ]
        }

        this.handleChangeMagister10 = this.handleChangeMagister10.bind(this);
        this.handleChangeMagister12 = this.handleChangeMagister12.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:1337/lectures').then(res=> {
            this.setState({
                lectures: res.data
            })
        })
    }

    handleChangeMagister10(){
        this.setState({
            isMagisterShow10 : !this.state.isMagisterShow10
        })
    }

    handleChangeMagister12(){
        this.setState({
            isMagisterShow12 : !this.state.isMagisterShow12
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
                        <Button variant='light' onClick={this.handleChangeMagister10} style={{textDecoration: 'none'}}>Информационные
                            системы и технологии (МК-10 - МК-20) - магистерская<br/> программа "Информационные
                            технологии
                            для цифрового проектирования"</Button>
                        <ModalMagisters10 show={this.state.isMagisterShow10} lectures={this.state.lectures} handleClose={this.handleChangeMagister10}/>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col>
                        <Button variant='light' onClick={this.handleChangeMagister12} style={{textDecoration: 'none'}}>Информационные
                            системы и технологии (МК-12 - МК-22) - магистерская<br/> программа "Информационные системы в
                            цифровой экономике"</Button>
                        <ModalMagisters12 show={this.state.isMagisterShow12} lectures={this.state.lectures} handleClose={this.handleChangeMagister12}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Magisters;
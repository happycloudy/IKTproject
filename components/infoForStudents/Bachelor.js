import React from 'react';
import {Row, Col, Button} from "react-bootstrap";
import ModalBachelors from "./Lectures/ModalBachelors";
import axios from "axios";

class Bachelor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBachelorShow: false,
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

        this.handleChangeBachelor = this.handleChangeBachelor.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:1337/lectures').then(res=> {
            this.setState({
                lectures: res.data
            })
        })
    }

    handleChangeBachelor(){
       this.setState({
           isBachelorShow : !this.state.isBachelorShow
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
                        <Button variant='light' onClick={this.handleChangeBachelor}  style={{textDecoration: 'none' }}>Информационные системы и технологии
                            (КС-10 - КС-40)</Button>
                        <ModalBachelors show={this.state.isBachelorShow} lectures={this.state.lectures} handleClose={this.handleChangeBachelor}/>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col>
                        <Button variant='light' onClick={this.handleChangeBachelor} style={{textDecoration: 'none'}}>Информатика и вычислительная техника
                            (КС-14 - КС-44)</Button>
                        <ModalBachelors show={this.state.isBachelorShow} lectures={this.state.lectures} handleClose={this.handleChangeBachelor}/>
                    </Col>
                </Row>
            </div>
        );
    }
}


export default Bachelor;
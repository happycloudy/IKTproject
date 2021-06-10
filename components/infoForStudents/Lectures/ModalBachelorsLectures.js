import React from 'react';
import {Button, Col, Modal, Row} from "react-bootstrap";

const ModalBachelors = (props) => {
    const handleClose = ()=>{
        props.handleCloseLectures()
    }


    return (
        <>
            <Modal show={props.show}
                   onHide={handleClose}
                   dialogClassName='modal-100h'
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{textAlign: 'center'}}>
                        <h5>
                            Лекции для КС-14 -> КС-44 <br/> и <br/> КС-10 ->
                            КС-40
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        props.getLecturesLength() > 0?
                            props.lectures[0].Lectures.map((lecture, ind) => {
                                if(lecture.semester === props.semester && props.teacher === lecture.Teacher){
                                    return (
                                        <div key={ind}>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <p>
                                                        {lecture.description}
                                                    </p>
                                                    <small>
                                                        {props.teacher}
                                                    </small>
                                                </Col>
                                                <Col >
                                                    {
                                                        lecture.lecture?
                                                            <Button href={`http://localhost:1337${lecture.lecture.url}`}>
                                                                Скачать лекцию
                                                            </Button>
                                                            :

                                                            <Button disabled>
                                                                Лекции нету
                                                            </Button>
                                                    }
                                                </Col>
                                            </Row>
                                            <hr/>
                                        </div>
                                    )
                                }
                            }):
                            <h3>Лекции отсутствуют</h3>
                    }
                </Modal.Body>
            </Modal>
        </>
    );

};

export default ModalBachelors;
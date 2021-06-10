import React from 'react';
import {Button, Col, Modal, Row} from "react-bootstrap";

const ModalBachelors = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.handleCloseLectures}>
                <Modal.Header closeButton>
                    <Modal.Title style={{textAlign: 'center'}}>
                        <h5>
                            Лекции для МК-12 и МК-22
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        props.lectures[2].Lectures.map((lecture, ind) => {
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
                        })
                    }
                </Modal.Body>
            </Modal>
        </>
    );

};

export default ModalBachelors;
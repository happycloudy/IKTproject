import React from 'react';
import {Button, Col, Modal, Row} from "react-bootstrap";

const ModalBachelors = (props) => {
    console.log()
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{textAlign: 'center'}}>
                        <h5>
                            Лекции для МК-12 и МК-22
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        props.lectures[0].Lectures.map((lecture, ind) => {
                            return (
                                <div key={ind}>
                                    <hr/>
                                    <Row>
                                        <Col>
                                            <p>
                                                {lecture.description}
                                            </p>
                                        </Col>
                                        <Col >
                                            {
                                                lecture.lecture.url?
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
                        })
                    }
                </Modal.Body>
            </Modal>
        </>
    );

};

export default ModalBachelors;
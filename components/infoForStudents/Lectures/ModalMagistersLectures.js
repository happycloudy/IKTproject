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
                            Лекции для КС-14 -> КС-44 <br/> и <br/> КС-10 ->
                            КС-40
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        props.lectures.map((lecture, ind) => {
                            return (
                                <div key={ind}>
                                    <hr/>
                                    <Row>
                                        <Col>
                                            <p>
                                                {lecture.Description}
                                            </p>
                                        </Col>
                                        <Col >
                                            <Button href={`http://localhost:1337${props.lectures[0].Lecture[0].url}`}>
                                                Скачать лекцию
                                            </Button>
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
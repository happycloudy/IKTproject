import React, {useState} from 'react';
import {Button, Col, Modal, Row} from "react-bootstrap";
import ModalBachelorsLectures from "./ModalBachelorsLectures";

const ModalBachelors = (props) => {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    return (
        <>
            <ModalBachelorsLectures show={show} lectures={props.lectures}
                                    handleClose={handleClose}/>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{textAlign: 'center'}} >
                        <h5>
                            Лекции для КС-14 -> КС-44 <br/> и <br/> КС-10 ->
                            КС-40
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Button onClick={handleShow}>
                                <h5>
                                    1 семестр
                                </h5>
                                <p>
                                    Информатика (часть 1) (доц. Женса А.В.)
                                </p>
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );

};

export default ModalBachelors;
import React, {useState} from 'react';
import {Button, Col, Modal, Row} from "react-bootstrap";
import ModalMagisters12Lectures from "./ModalMagisters12Lectures";

const ModalBachelors = (props) => {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{textAlign: 'center'}} >
                        <h5>
                            Лекции для магистров МК-12 и <br/>
                            МК-22
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
                            <ModalMagisters12Lectures show={show} lectures={props.lectures}
                                                    handleClose={handleClose}/>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );

};

export default ModalBachelors;
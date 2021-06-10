import React, {useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import ModalMagisters12Lectures from "./ModalMagisters12Lectures";


const MagistersBlock12 = (props) => {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    return (
        <Row className='mt-1'>
            <Col>
                <Button className='d-flex justify-content-center align-items-center' onClick={handleShow}>
                    <h5>
                        {props.semester} семестр
                    </h5>
                    <p>
                        {props.desc}
                    </p>
                </Button>
            </Col>
            <ModalMagisters12Lectures show={show}
                                      lectures={props.lectures}
                                      handleClose={handleClose}
                                      teacher={props.teacher}
                                      semester={props.semester}/>
        </Row>
    );
};

export default MagistersBlock12;
import React, {useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import ModalMagisters10Lectures from "./ModalMagisters10Lectures";


const MagistersBlock10 = (props) => {
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
            <ModalMagisters10Lectures show={show}
                                      lectures={props.lectures}
                                      handleClose={handleClose}
                                      teacher={props.teacher}
                                      semester={props.semester}/>
        </Row>
    );
};

export default MagistersBlock10;
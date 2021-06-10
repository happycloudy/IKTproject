import React, {useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import ModalBachelorsLectures from "./ModalBachelorsLectures";


const BachelorBlock = (props) => {
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    const getLecturesLength = () =>{
        let length = 0
        props.lectures[0].Lectures.forEach((lecture) =>
            (lecture.semester === props.semester && props.teacher === lecture.Teacher)?length++:null
        )
        return length
    }


    return (
        <Row className='mt-1'>
            <Col>
                {
                    getLecturesLength() > 0?
                        <Button className='d-flex justify-content-center align-items-center' onClick={handleShow}>
                            <h5>
                                {props.semester} семестр
                            </h5>
                            <p>
                                {props.desc}
                            </p>
                        </Button>:

                        <Button disabled className='d-flex justify-content-center align-items-center' onClick={handleShow}>
                            <h5>
                                {props.semester} семестр
                            </h5>
                            <p>
                                {props.desc}
                            </p>
                        </Button>
                }
            </Col>
            <ModalBachelorsLectures show={show}
                                    lectures={props.lectures}
                                    handleCloseLectures={handleClose}
                                    handleShowSemesters={props.handleShowSemesters}
                                    handleCloseSemesters={props.handleCloseSemesters}
                                    teacher={props.teacher}
                                    semester={props.semester}
                                    getLecturesLength={getLecturesLength}
            />
        </Row>
    );
};

export default BachelorBlock;
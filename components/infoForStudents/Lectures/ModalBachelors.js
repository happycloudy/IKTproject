import React from 'react';
import {Modal} from "react-bootstrap";
import BachelorBlock from "./BachelorBlock";

const ModalBachelors = (props) => {
    const semesters = [1, 2, 3, 4, 5, 6, 7, 8]

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
                        semesters.map(semester => {
                            return props.semesters.map(semesterDB => {
                                if (semesterDB.Semester === semester) {
                                    return (
                                        <BachelorBlock lectures={props.lectures}
                                                       desc={semesterDB.Description}
                                                       semester={semester}
                                                       key={semesterDB.id}
                                                       teacher={semesterDB.Teacher}
                                                       handleCloseSemesters={props.handleClose}
                                                       handleShowSemesters={props.handleShow}
                                        />
                                    )
                                }
                            })
                        })
                    }
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalBachelors;
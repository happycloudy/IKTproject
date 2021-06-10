import React from 'react';
import {Modal} from "react-bootstrap";
import MagistersBlock12 from "./MagistersBlock12";

const ModalMagisters12 = (props) => {
    const semesters = [1, 2, 3, 4]


    return (
        <>
            <Modal show={props.show} onHide={props.handleCloseSemestersMagister12}>
                <Modal.Header closeButton>
                    <Modal.Title style={{textAlign: 'center'}}>
                        <h5>
                            Лекции для МК-12 -> МК-22
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        semesters.map(semester => {
                            return props.semesters.map(semesterDB => {
                                if (semesterDB.Semester === semester) {
                                    return (
                                        <MagistersBlock12 lectures={props.lectures}
                                                          desc={semesterDB.Description}
                                                          semester={semester}
                                                          key={semesterDB.id}
                                                          teacher={semesterDB.Teacher}
                                                          handleCloseSemesters={props.handleCloseSemestersMagister12}
                                                          handleShowSemesters={props.handleShowSemestersMagister12}
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

export default ModalMagisters12;
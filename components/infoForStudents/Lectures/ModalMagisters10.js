import React, {useState} from 'react';
import {Button, Col, Modal, Row} from "react-bootstrap";
import MagistersBlock10 from "./MagistersBlock10";


const ModalMagisters10 = (props) => {
    const semesters = [1, 2, 3, 4]

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{textAlign: 'center'}}>
                        <h5>
                            Лекции для МК-10 -> МК-20
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        semesters.map(semester => {
                            return props.semesters.map(semesterDB => {
                                if (semesterDB.Semester === semester)
                                    return (
                                        <MagistersBlock10 lectures={props.lectures}
                                                          desc={semesterDB.Description}
                                                          semester={semester}
                                                          key={semesterDB.id}
                                                          teacher={semesterDB.Teacher}
                                        />
                                    )
                            })
                        })
                    }
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalMagisters10;
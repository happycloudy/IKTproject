import React from 'react';
import {Button, Modal} from "react-bootstrap";

const PublicationAndStudentsWorksModal = (props) => {
    return (
        !props.image ?
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal> :
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img width={'100%'}
                        src={props.image}
                    />
                    <span>
                        {props.description}
                    </span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
    );
};

export default PublicationAndStudentsWorksModal;
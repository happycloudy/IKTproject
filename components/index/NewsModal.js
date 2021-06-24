import React from 'react';
import {Button, Col, Modal, Row} from "react-bootstrap";

const NewsModal = (props) => {
    return (
        <>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='contained-modal-title-vcenter'>
                        {props.news.Title}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col>
                            <img
                                src={props.url}
                                width="100%"
                                height="100%"
                                className="align-top"
                                alt="News picture"
                            />
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col>
                            <span>
                                {props.news.Description}
                            </span>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default NewsModal;
import React, {useState} from 'react';
import {Card, Col} from "react-bootstrap";
import PublicationAndStudentsWorksModal from "./PublicationAndStudentsWorksModal";

const Publication = (props) => {
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <Col className='d-flex align-items-center justify-content-center mt-3 ml-3 mr-3'>
            <PublicationAndStudentsWorksModal
                show={show}
                handleClose={handleClose}
                title={props.title}
                description={props.description}
            />
            <Card style={{width: '15rem'}}>
                <Card.Body>
                    <Card.Text className='text-black-50'>
                        {props.title}
                    </Card.Text>
                    <Card.Link href="#" onClick={handleShow}>Подробнее</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Publication;
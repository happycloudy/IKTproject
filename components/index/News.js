import React, {useState} from 'react';
import {Card, Col, Container} from "react-bootstrap";
import styles from '../../styles/index.module.css'
import NewsModal from "./NewsModal";

const News = (props) => {
    const [show, setShow] = useState()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Col>
                <Card className={styles.news} onClick={handleShow}>
                    <Card.Img variant="top" src={props.url}/>
                    <Card.Body>
                        <Card.Title>{props.news.Title}</Card.Title>
                        <Card.Text>
                            {props.news.ShortDescription}
                        </Card.Text>
                    </Card.Body>
                </Card>


                <NewsModal
                    handleShow={handleShow}
                    handleClose={handleClose}
                    show={show}
                    news={props.news}
                    url={props.url}
                />
            </Col>
        </>
    );
}

export default News;
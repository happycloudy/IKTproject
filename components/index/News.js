import React, {useState} from 'react';
import {Col, Container} from "react-bootstrap";
import styles from '../../styles/index.module.css'
import NewsModal from "./NewsModal";

const News = (props) => {
    const [show, setShow] = useState()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Col>
            <Container className={styles.news} onClick={handleShow}>
                <img
                    src={props.url}
                    width="80%"
                    height="50%"
                    className="align-top"
                    alt="News picture"
                />
                <h2>{props.news.Title}</h2>
                <p>
                    {props.news.ShortDescription}
                </p>
            </Container>
            <NewsModal
                handleShow={handleShow}
                handleClose={handleClose}
                show={show}
                news={props.news}
                url={props.url}
            />
        </Col>
    );
};

export default News;
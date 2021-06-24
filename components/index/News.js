import React from 'react';
import {Col, Container} from "react-bootstrap";

const News = (props) => {
    return (
        <Col>
            <Container>
                <img
                    src={props.url}
                    width="80%"
                    height="50%"
                    className="align-top"
                    alt="IKT logo"
                />
                <h2>{props.news.Title}</h2>
                <p>
                    {props.news.ShortDescription}
                </p>
            </Container>
        </Col>
    );
};

export default News;
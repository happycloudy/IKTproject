import React from 'react';
import styles from '../../styles/index.module.css'
import {Col, Container, Row} from "react-bootstrap";
import Direction from "./Direction";

const DirectionsBlock = () => {
    return (
        <div className={styles.directionBlock}>
            <div className={styles.directionHeader}>
                <h3>
                    Направления
                </h3>
            </div>

            <Container className='mt-5'>
                <Row>
                    <Col>
                        <Direction/>
                    </Col>
                    <Col>
                        <Direction/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DirectionsBlock;
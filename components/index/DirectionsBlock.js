import React, {useEffect, useState} from 'react';
import styles from '../../styles/index.module.css'
import {Button, Col, Container, Row} from "react-bootstrap";
import Direction from "./Direction";
import axios from "axios";
import Fade from 'react-reveal'

const DirectionsBlock = () => {
    const [directions, setDirections] = useState([])

    const fetch = async () => {
        return (await axios.get('http://localhost:1337/index')).data
    }

    useEffect(async () => {
        let directions = await fetch()
        setDirections(directions.Direction)
    }, [])


    return (
        <Fade top>
            <div className={styles.directionBlock}>
                <div className={styles.directionHeader}>
                    <h3>
                        Направления
                    </h3>
                </div>

                <Container className='mt-5'>
                    <Row>
                        {
                            directions.map(direction =>
                                <Col key={direction.id}>
                                    <Direction
                                        direction={direction}
                                    />
                                </Col>
                            )
                        }
                    </Row>
                </Container>
                <div className={styles.moreInfo}>
                    <Button variant='info' href='http://localhost:3000/infoForEntrants' className={styles.moreInfoButton}>
                        Узнать больше о поступление
                    </Button>
                </div>
            </div>
        </Fade>
    );
};

export default DirectionsBlock;
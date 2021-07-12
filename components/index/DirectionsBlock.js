import React, {useEffect, useState} from 'react';
import styles from '../../styles/index.module.css'
import {Button, Col, Container, Row} from "react-bootstrap";
import Direction from "./Direction";
import axios from "axios";
import Fade from 'react-reveal'

const DirectionsBlock = () => {
    const [firstDirections, setFirstDirections] = useState({})
    const [secondDirections, setSecondDirections] = useState([])

    const fetch = async () => {
        return (await axios.get('http://localhost:1337/index')).data
    }

    useEffect(async () => {
        let directions = await fetch()
        await setFirstDirections({
            DirectionNumber: directions.FirstDirection.DirectionNumber,
            Direction: directions.FirstDirection.Direction,
            WhatLearning: directions.FirstDirection.WhatLearning
        })
        setSecondDirections(directions.SecondDirection)
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
                        <Col>
                            <Direction
                                direction={firstDirections}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='text-center text-white mt-3'>
                            <h4>После 2-го курса вам следует выбрать:</h4>
                        </Col>
                    </Row>
                    <Row>
                        {
                            secondDirections.map(direction =>
                                <Col key={direction.id}>
                                    <Direction
                                        direction={direction}
                                    />
                                </Col>
                            )
                        }
                    </Row>
                </Container>

            </div>
        </Fade>
    );
};

export default DirectionsBlock;
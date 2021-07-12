import React from 'react';
import styles from '../../styles/index.module.css'
import {Button} from "react-bootstrap";

const Direction = (props) => {
        return (
            <div className={styles.directionWindow}>
                <div className={styles.directionInfo}>
                    <h4>
                        {props.direction.DirectionNumber} <br/>
                        {props.direction.Direction}
                    </h4>

                    {
                        props.direction.WhatLearning ?
                            <>
                                <h5 className={styles.directionExamsHeader}>
                                    Здесь вы научитесь:
                                </h5>
                                {
                                    props.direction.WhatLearning.split(';').map((el, id) =>
                                        <div key={id}>
                                            {el}
                                        </div>
                                    )
                                }
                            </>:
                            null
                    }
                    <Button variant='info' href='http://localhost:3000/infoForEntrants' className={styles.moreInfoButton}>
                        Узнать больше о поступление
                    </Button>
                </div>

            </div>
        );
    }
;

export default Direction;
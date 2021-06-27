import React from 'react';
import styles from '../../styles/index.module.css'

const Direction = (props) => {
    return (
        <div className={styles.directionWindow}>
            <div className={styles.directionInfo}>
                <h4>
                    {props.direction.DirectionNumber} <br/>
                    {props.direction.Direction}
                </h4>

                <h5 className={styles.directionExamsHeader}>
                    Здесь вы научитесь:
                </h5>
                {props.direction.WhatLearning.split(';').map((el, id) =>
                    <div key={id}>
                        {el}
                    </div>
                )}
            </div>
        </div>
    );
}
;

export default Direction;
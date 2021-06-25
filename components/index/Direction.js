import React from 'react';
import styles from '../../styles/index.module.css'

const Direction = () => {
    return (
        <div className={styles.directionWindow}>
            <h4>
                09.03.01 <br/>
                Информатика и вычислительная техника
            </h4>

            <h5 className={styles.directionExamsHeader}>
                Экзамены ЕГЭ:
            </h5>
            <div>
                Русский язык
            </div>
            <div>
                Математика
            </div>
            <div>
                Физика или информатика
            </div>

            <h5 className={styles.directionExamsHeader}>
                Здесь вы научитесь:
            </h5>
            <div>
                C, C++, C#, Matlab
            </div>
        </div>
    );
};

export default Direction;
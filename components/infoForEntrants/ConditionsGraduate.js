import React from 'react';
import {Row, Col} from "react-bootstrap";
import Fade from 'react-reveal'
import styles from '../../styles/conditionsGraduate.module.css'

const ConditionsGraduate = () => {
    return (
        <Fade right>
            <div  className={styles.blockStyle}>
                <div className='mt-5 pl-5 pr-5'>
                <Row>
                    <Col>
                        <h5><b>Начало</b> приема документов от поступающих - <b>19 июня 2021</b> года.</h5>
                        <table border='1' bordercolor='white' className={styles.table}>
                            <tr>
                                <th>Форма обучения</th>
                                <th>Источник финансирования</th>
                                <th>Завершение приема документов</th>
                                <th>Сроки проведения вступительных испытаний</th>
                                <th>Завершение приема заявлений о согласии на зачисление</th>
                                <th>Зачисление</th>
                            </tr>
                            <tr>
                                <td>Очная</td>
                                <td>За счет <i>бюджетных</i> ассигнований</td>
                                <td><i>24.07.2021</i></td>
                                <td>26.07.2021 - 29.07.2021</td>
                                <td>30.07.2021</td>
                                <td>
                                    <i>31.07.2021</i>
                                </td>
                            </tr>
                            <tr>
                                <td>Очная</td>
                                <td>На места по договорам об оказании <i>платных</i> образовательных услуг</td>
                                <td><i>25.08.2021</i></td>
                                <td>26.08.2021</td>
                                <td>30.08.2021</td>
                                <td>
                                    <i>31.08.2021</i>
                                </td>
                            </tr>
                        </table>
                        <p style={{textAlign:'center'}} >
                            <a style={{color:'white',textDecoration:'underline'}} href='https://www.muctr.ru/abitur/bachelor/deadlines/'>Подробнее на официальном сайте РХТУ.</a>
                        </p>
                    </Col>
                </Row>
                </div>
            </div>
        </Fade>
    );
}

export default ConditionsGraduate;
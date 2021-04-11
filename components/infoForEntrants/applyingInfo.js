import React from 'react';
import {Row, Col} from "react-bootstrap";

const ApplyingInfo = () => {
    let color = 'white'
    let BlockStyle = {
        backgroundColor: '#308DE4',
        textAlign: 'center',
        color: color,
        borderRadius: '20px',
        paddingBottom:'5vh',
        paddingTop:'5vh'
    }
    return (
        <div style={BlockStyle} className='mt-2'>
            <Row>
                <Col>
                    <h5>Кафедра Информационных Компьютерных Технологий (ИКТ) в составе Факультета Цифровых Технологий и Химического Инжиниринга (ЦиТХИн) осуществляет набор в бакалавриат по укрупненному направлению подготовки 09.03.01 Информатика и вычислительная техника.</h5>
                    <p style={{textAlign:'left'}} className="ml-5">
                        <b>После второго года обучения в бакалавриате происходит выбор направлений:</b><br/>
                        <ul className="ml-5">
                            <li>
                                09.03.01 Информатика и вычислительная техника
                            </li>
                            <li>
                                09.03.02 Информационные системы и технологии
                            </li>
                        </ul>
                        Ряд дисциплин курсов в бакалавриате реализован совместно с компанией Microsoft.
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default ApplyingInfo;
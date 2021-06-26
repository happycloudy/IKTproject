import React from 'react';
import {Row, Col} from "react-bootstrap";
import {Fade} from 'react-reveal'

const WhatToStudy = () => {
    let color = 'white'
    let BlockStyle = {
        backgroundColor: '#308DE4',
        textAlign: 'center',
        color: color,
        borderRadius: '20px',
        paddingBottom:'5vh',
        paddingTop:'5vh',

    }
    return (
        <Fade right>
            <div style={BlockStyle} className='mt-2'>
                <Row>
                    <Col>
                        <p style={{textAlign:'left'}} className="ml-5 mr-5">
                            <ul>
                                <li>
                                    цифровое проектирование,
                                </li>
                                <li>
                                    проектирование фабрик будущего и Интернета вещей,
                                </li>
                                <li>
                                    разработки систем виртуальной реальности,
                                </li>
                                <li>
                                    информационных технологий в цифровой экономике,
                                </li>
                                <li>
                                    облачных вычислений,
                                </li>
                                <li>
                                    математических методов в технологии блокчейнов (с привлечением программ Microsoft),
                                </li>
                                <li>
                                    больших данных и машинного обучения (с привлечением программ Microsoft),
                                </li>
                                <li>
                                    методов искусственного интеллекта,
                                </li>
                                <li>
                                    администрирование операционных систем Windows, Linux,
                                </li>
                                <li>
                                    технологии параллельного программирования и Grid технологий,
                                </li>
                                <li>
                                    программирование на высокопроизводительных суперкомпьютерах,
                                </li>
                                <li>
                                    языки программирования – C, C++, C#, Assembler, Python, Java,
                                </li>
                                <li>
                                    web-программирование – языки HTML, JavaScript,
                                </li>
                                <li>
                                    изучение разработки и создания баз данных (в том числе распределенных баз),
                                </li>
                                <li>
                                    интегрированные программные пакеты – Ansys Fluent, Azure Dev Tools for Teaching (Mashine Learning (ML) Server, Microsoft Project, Hyper-V Server, SQL Server, Visual Studio и т.д.),
                                </li>
                                <li>
                                    MatLab, UniSim, OpenFoam, Gromacs, Moldy, Orca, методы и средства защиты компьютерной информации,
                                </li>
                                <li>
                                    информационные технологии и компьютерные сети,
                                </li>
                                <li>
                                    компьютерную графику и геометрическое моделирование в САПР,
                                </li>
                                <li>
                                    системы автоматизированного проектирования – AutoCad, SolidWorks.
                                </li>
                            </ul>
                        </p>
                    </Col>
                </Row>
            </div>
        </Fade>
    );
}

export default WhatToStudy;
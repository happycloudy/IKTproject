import React from 'react';
import {Row, Col} from "react-bootstrap";
import Fade from 'react-reveal'

const KafedraInfo = () => {
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
                   <p style={{textAlign:'left'}} >
                        <ul className="ml-5 mr-5">
                            <li>
                                обучение студентов по программам, разработанным совместно с компанией Microsoft, c использованием программного обеспечения разработанного Microsoft и их облачных серверов,
                            </li>
                            <li>
                                прохождение практик с привлечением компаний Microsoft, Honeywell
                            </li>
                            <li>
                                обучение студентов в научном образовательном центре «Высокопроизводительные параллельные вычисления»,
                            </li>
                            <li>
                                взаимодействие с российскими мировыми лидерами IT-индустрии, обеспечивающих реальную практику и последующее гарантированное трудоустройство выпускников,
                            </li>
                            <li>
                                активное использование передовых информационных и мультимедиа технологий в обучении, науке и производстве,
                            </li>
                            <li>
                                дополнительное образование на базе различных университетских учебных центрах,
                            </li>
                            <li>
                                активное участие студентов и призовые места в региональных и всероссийских конкурсах и олимпиадах в области IT-технологий.
                            </li>
                        </ul>
                   </p>
                </Col>
            </Row>
        </div>
        </Fade>
    );
}

export default KafedraInfo;
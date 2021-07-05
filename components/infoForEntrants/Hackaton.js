import React from 'react';
import {Row, Col} from "react-bootstrap";
import Fade from 'react-reveal'

const Hackaton = () => {
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
        <Fade left>
            <div style={BlockStyle} className='mt-5 pl-5 pr-5'>
                <Row>
                    <Col>
                        <p style={{textAlign:'left'}} >
                            <b>В 2019 г. кафедра заключила с компанией Microsoft договор об использовании логотипа Microsoft</b>, так как компания Microsoft участвует в проведении практик студентов бакалавров, в разработке программ. Кафедра ИКТ программное обеспечение Azure Dev Tools for Teaching (Mashine Learning (ML) Server, Microsoft Project, Hyper-V Server, SQL Server, Visual Studio и т.д.), разработанное компанией Microsoft в ряде учебных дисциплин.
                            <br/><br/>
                            После окончания второго курса <b>студенты проходят практику в компании Microsoft</b>. Практика проходит в формате хакатона, в котором принимают участие студенты из различных ВУЗов. Второй год подряд (2019-2020) по результат хакатона студенты кафедры ИКТ занимают первое место. Видео-презентации работ смотрите на <a style={{color:'white',textDecoration:'underline'}} href='https://www.youtube.com/channel/UCalhcWufdy2LZ8-_TQR6ZJQ'>официальном YouTube канале кафедры ИКТ</a>.
                            <br/><br/>
                            <b>В сентябре 2019 года по инициативе кафедры</b> Информационных Компьютерных Технологий <b>с компанией Microsoft было подписано соглашение о сотрудничестве</b>. В рамках данной сотрудничества студентам кафедры будет преподаваться ряд дисциплин, основное внимание в которых будет уделяться <b>технологиям больших данных</b>.
                            <br/><br/>
                            В 2019 г. ОАО «Щекиноазот» и ЗАО «Хоневелл» передали кафедре ИКТ цифрового двойника предприятия, который используется в ряде дисциплин, изучаемых студентами. А также на его основе создается собственный <a style={{color:'white',textDecoration:'underline'}} href='https://youtu.be/FVG-rKD1IPs'>цифровой двойник реального химического предприятия</a>.
                        </p>
                    </Col>
                </Row>
            </div>
        </Fade>
    );
}

export default Hackaton;
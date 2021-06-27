import React from 'react';
import {Row, Col} from "react-bootstrap";
import {Fade} from 'react-reveal'

const ContactPriem = () => {
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
                        <table border='1' bordercolor='white' style={{textAlign:'center',margin:'auto'}}>
                            <tr>
                                <th>
                                    Часы работы:
                                </th>
                                <th>
                                    Адрес:
                                </th>
                            </tr>
                            <tr>
                                <td style={{textAlign:'left'}}>
                                    Пн.&#8209;Чт.&nbsp;с&nbsp;10:00&nbsp;до&nbsp;18:00<br/>
                                    Пт.&nbsp;с&nbsp;10:00&nbsp;до&nbsp;17:00<br/>
                                    Сб.&nbsp;с&nbsp;10:00&nbsp;до&nbsp;16:00<br/>
                                    Вс.&nbsp;-&nbsp;выходной<br/>
                                    <br/>
                                    <u>Тел.:&nbsp;(499)&nbsp;978-85-20</u><br/>
                                    Факс:&nbsp;(499)&nbsp;978-59-60
                                </td>
                                <td>125047, г. Москва, Миусская пл., д. 9,<br/> РХТУ им. Д.И. Менделеева.<br/>
                                    Проезд до станции метро “Новослободская” или “Менделеевская”
                                </td>
                            </tr>
                        </table>
                        <p style={{textAlign:'center'}} >
                            <br/>
                            Более подробную информацию можно узнать на официальном сайте РХТУ им. Д.И.Менделеева на страничке для абитуриентов по адресу:
                            <br/><br/>
                            <a href='https://muctr.ru/abitur/bachelor/main_info/' style={{color:'white',textDecoration:'underline'}}>РХТУ - Абитуриентам - Бакалавриат</a>
                            <br/>
                            <a href='https://vk.com/ikt_muctr' style={{color:'white',textDecoration:'underline'}}>в группе кафедры Вконтакте</a>
                            <br/>
                            <a href='https://www.youtube.com/channel/UCalhcWufdy2LZ8-_TQR6ZJQ' style={{color:'white',textDecoration:'underline'}}>на YouTube-канале кафедры</a>
                            <br/>
                            <a href='https://vk.com/ab_itu' style={{color:'white',textDecoration:'underline'}}>или в группе Вконтакте факультета ЦиТХИн</a>
                        </p>
                    </Col>
                </Row>
            </div>
        </Fade>
    );
}

export default ContactPriem;
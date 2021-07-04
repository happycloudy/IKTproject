import React from 'react';
import {Row, Col} from "react-bootstrap";
import {Fade} from 'react-reveal'
import styles from '../../styles/Condition.module.css'
const Conditions = () => {
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
            <div style={BlockStyle} className=' pl-5 pr-5'>
                <Row>
                    <Col>
                        <p style={{textAlign:'left'}} >
                            <b>Начало приема документов от поступающих - 19 июня 2021 года.<br/>
                            Завершение приема документов - 25 июля 2021 (по результатам ЕГЭ).<br/>
                            Завершение приема заявлений о согласии на зачисление - 28 июля 2021 (приоритетный этап) и 03 августа 2021 (основной этап).<br/>
                                Зачисление - 30 июля 2021 (приоритетный этап) и 5 августа 2021 (основной этап).</b> <br/>
                            <a style={{color:'white',textDecoration:'underline'}} href='https://www.muctr.ru/abitur/bachelor/deadlines/'>Подробнее на официальном сайте РХТУ.</a>
                            <br/><br/>
                            <a style={{color:'white',textDecoration:'underline'}} href='https://www.muctr.ru/abitur/bachelor/list_documents/'>Для поступления на обучение <b>поступающие подают заявление о приеме и необходимые документы:</b></a>
                            <br/><br/>
                            <ul>
                                <li>
                                    <b>лично или через доверенное лицо</b> по адресу: РХТУ имени Д.И. Менделеева: 125047 г. Москва, Миусская пл., д. 9.
                                </li>
                                <li>
                                    <b>через операторов почтовой связи</b> отправлением на адрес: РХТУ имени Д.И. Менделеева: 125047 г. Москва, Миусская пл., д. 9 (приемной комиссии РХТУ).
                                </li>
                                <li>
                                    <b>в электронной форме</b> через <a style={{color:'white',textDecoration:'underline'}} href='https://www.muctr.ru/abitur/bachelor/list_documents/'>личный кабинет на сайте РХТУ.</a>
                                </li>
                                <li>
                                    <b>в электронной форме</b> с использованием <b>суперсервиса "Поступление в вуз онлайн"</b>, посредством федеральной государственной информационной системы <b>"Единый портал государственных и муниципальных услуг (функций)"</b> (далее - ЕПГУ).
                                </li>
                            </ul>
                        </p>
                        <h5 className='mt-5'>Документы, необходимые для поступления:</h5>
                        <p style={{textAlign:'left'}} >
                            <ul>
                                <li>
                                    заявление о приеме
                                </li>
                                <li>
                                    анкета поступающего
                                </li>
                                <li>
                                    согласие поступающего на обработку его персональных данных или согласие родителя/законного представителя на обработку персональных данных несовершеннолетнего
                                </li>
                                <li>
                                    заявление о согласии на зачисление (подается на этапе зачисления)
                                </li>
                                <li>
                                    паспорт (2, 3, 5 стр.);
                                </li>
                                <li>
                                    документ об образовании
                                </li>
                                <li>
                                    документы, подтверждающих индивидуальные достижения поступающего (при наличии);
                                </li>
                                <li>
                                    договор о целевом обучении / документов, подтверждающих особые права (при наличии);
                                </li>
                                <li>
                                    диплом победителя или призера олимпиады (при наличии). В заявлении о приеме указывается результат ЕГЭ по предмету, соответствующему профилю олимпиады, не ниже 75 баллов.
                                </li>
                            </ul>
                            <b>Всю дополнительную информацию о перечне необходимых документов для поступления, сроках и конкурсной ситуации можно узнать на официальном сайте РХТУ им. Д.И. Менделеева в <a style={{color:'white',textDecoration:'underline'}} href='https://www.muctr.ru/abitur/enrol-muctr/'>разделе Абитуриентам</a></b>
                        </p>
                        <br/>
                        <Row>
                            <Col>
                                <b>09.03.02 Информационные системы и технологии</b>
                                <table border='1' bordercolor='white' style={{textAlign:'left',margin:'auto'}}>
                                    <tr>
                                        <td>
                                            <b>Требуемые экзамены (ЕГЭ):</b>
                                        </td>
                                        <td>
                                            <b>Минимальный балл</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            1. Математика (профильный уровень)
                                        </td>
                                        <td style={{textAlign:'center'}}>
                                            39
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2. Физика / Информатика и ИКТ
                                        </td>
                                        <td style={{textAlign:'center'}}>
                                            39/44
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            3. Русский язык
                                        </td>
                                        <td style={{textAlign:'center'}}>
                                            40
                                        </td>
                                    </tr>
                                </table>
                            </Col>
                            <Col>
                                <b>09.03.01 Информатика и вычислительная техника</b>
                                <table border='1' bordercolor='white' style={{textAlign:'left',margin:'auto'}}>
                                    <tr>
                                        <td>
                                            <b>Требуемые экзамены (ЕГЭ):</b>
                                        </td>
                                        <td>
                                            <b>Минимальный балл</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            1. Математика (профильный уровень)
                                        </td>
                                        <td style={{textAlign:'center'}}>
                                            39
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2. Физика / Информатика и ИКТ
                                        </td>
                                        <td style={{textAlign:'center'}}>
                                            39/44
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            3. Русский язык
                                        </td>
                                        <td style={{textAlign:'center'}}>
                                            40
                                        </td>
                                    </tr>
                                </table>
                            </Col>
                        </Row>
                        <h4 className='mt-5'>Количество мест для приема на обучение</h4>
                        <p style={{textAlign:'center'}}>(при поступлении в 2021 году общий конкурс на оба направления подготовки)</p>
                        <Row>
                            <Col>
                                <table border='1' bordercolor='white' className={styles.table}>
                                    <tr>
                                        <th>
                                            Код и направление подготовки
                                        </th>
                                        <th>
                                            Всего мест
                                        </th>
                                        <th>
                                            Целевая квота
                                        </th>
                                        <th>
                                            Особая квота
                                        </th>
                                        <th>
                                            Платная форма обучения
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            09.03.01 Информатика и вычислительная техника
                                        </td>
                                        <td rowSpan='2'>
                                            83
                                        </td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td rowSpan='2'>25</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            09.03.02 Информационные системы и технологии
                                        </td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                </table>
                            </Col>
                        </Row>
                        <h5 className='mt-3'>Заочная форма обучения отсутствует!</h5>
                        <p>Поступающие в РХТУ им. Д.И. Менделеева (головной вуз) не проходят предварительный медицинский осмотр (обследование). </p>
                    </Col>
                </Row>
            </div>
        </Fade>
    );
}

export default Conditions;
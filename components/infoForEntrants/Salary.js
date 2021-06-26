import React from 'react';
import {Row, Col} from "react-bootstrap";
import {Fade} from 'react-reveal'

const Salary = () => {
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
            <div style={BlockStyle} className='mt-2'>
                <Row>
                    <Col>
                        <p style={{textAlign:'left'}} className="ml-5 mr-5">
                            По рейтингу, составленному исследовательским <a style={{color:'white', textDecoration:'underline'}} href="https://students.superjob.ru/reiting-vuzov/it/">центром Superjob</a> на основе сравнения среднего уровня доходов специалистов, получивших дипломы российских вузов <b>в период с 2014 по 2019 гг., кафедра ИКТ в составе РХТУ им. Д.И. Менделеева попадает на высокие места в рейтинге ВУЗов</b>, имеющих высокооплачиваемую работу специалистов в области IT-технологий. Так, <b>IT–специалист, закончивший РХТУ им. Д.И. Менделеева</b>, может претендовать в компаниях Москвы на заработную плату в среднем равную <b>82 000 рублей</b>, а средняя медианная зарплата наших выпускников-разработчиков для отработавших после окончания образования 4 года или более по данным сайта <a style={{color:'white', textDecoration:'underline'}} href="https://habr.com/ru/company/habr_career/blog/457406/">habr.com</a> составляет 150 000 рублей.
                        </p>
                    </Col>
                </Row>
            </div>
        </Fade>
    );
}

export default Salary;
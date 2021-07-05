import {Col, Container, Row} from 'react-bootstrap'
import ApplyingInfo from "./infoForEntrants/applyingInfo";
import Aspirants from "./graduate/aspirants";
import React from "react";
import KafedraInfo from './infoForEntrants/kafedraInfo'
import Salary from './infoForEntrants/Salary'
import WhatToStudy from './infoForEntrants/WhatToStudy'
import Hackaton from './infoForEntrants/Hackaton'
import Conditions from './infoForEntrants/Conditions'
import ContactPriem from './infoForEntrants/ContactPriem'
import ConditionsGraduate from "./infoForEntrants/ConditionsGraduate";
import DocumentsGraduate from "./infoForEntrants/DocumentsGraduate";
import GraduateTech from "./infoForEntrants/GraduateTech";
import GraduateEconimics from "./infoForEntrants/GraduateEconomics";



export default function ScienceInfo(props) {
    return (
        <div>
            <Container className='mt-5 mb-5' style={{backgroundColor: 'rgba(255,255,255,0.2)', textAlign: 'center', borderRadius: '15px'}}>
                <Row>
                    <Col>
                        <h2>Информация о приеме</h2>
                        <ApplyingInfo/>
                        <h2 className='mt-5'>Преимущества нашей кафедры</h2>
                        <KafedraInfo/>
                        <h2 className='mt-5'>Заработанная плата выпускников кафедры</h2>
                        <Salary/>
                        <h2 className='mt-5'>Наши студенты изучают</h2>
                        <WhatToStudy/>
                        <Hackaton/>
                        <h2 className='mt-5'>Условия приема на Бакалавриат на 2021/2022 учебный год</h2>
                        <Conditions/>

                        <ContactPriem/>
                        <h2 className='mt-5'>Условия приема в Магистратуру на 2020/2021 учебный год</h2>
                        <ConditionsGraduate/>
                        <div className="mt-5"></div>
                        <DocumentsGraduate/>
                        <h5 className="mt-5">Кафедра Информационных компьютерных технологий осуществляет подготовку по программе академической магистратуры:</h5>
                        <h4>"ИНФОРМАЦИОННЫЕ СИСТЕМЫ И ТЕХНОЛОГИИ" </h4>
                        <h5>по двум магистерским программам:</h5>
                        <GraduateTech/>
                        <div className="mt-5"></div>
                        <GraduateEconimics/>
                        <h2 className='mt-5'>Контактная информация Приемной комиссии</h2>
                        <ContactPriem/>
                    </Col>
                </Row>


            </Container>
        </div>
    )
}
import React, {useEffect, useState} from 'react';
import {Col, Container} from "react-bootstrap";
import Bachelor from "./infoForStudents/Bachelor";
import Magisters from "./infoForStudents/Magisters";
import Students from "./infoForStudents/student";
import Devs from "./science/Devs";
import ScienceLectures from "./science/ScienceLectures";
import DiplomsUndergraduate from "./infoForStudents/DiplomsUndergraduate";
import axios from "axios";

function InfoList() {
    const [data, setData] = useState({
        students: '',
        devs: '',
        lecturesAndSeminares: ''
    })

    const fetchData = async () =>{
        let data = await axios.get('http://localhost:1337/students')
        setData({
            students: data.data.Students,
            devs: data.data.Develops,
            lecturesAndSeminares: data.data.ScienceLecturesAndSeminares
        })
    }

    useEffect(()=>{
        fetchData()
    },[])
    return (
        <Container className='mt-5 mb-5' style={{backgroundColor: 'rgba(255,255,255,0.2)', textAlign: 'center', borderRadius: '15px'}}>
            <div>
                <Col className='mt-2'>
                    <h3>Студентам</h3>
                </Col>
                <Students text={data.students}/>
                <Col className='mt-5'>
                    <h3>Бакалаврам</h3>
                </Col>
                <Bachelor/>
                <Col className='mt-5'>
                    <h3>Магистрам</h3>
                </Col>
                <Magisters/>
                <Col className='mt-5'>
                    <h3>Темы дипломных работ</h3>
                </Col>
                <DiplomsUndergraduate/>
                <Col className='mt-5'>
                    <h3>Научная деятельность</h3>
                </Col>
                <Col className='mt-5'>
                    <h4>Разработки</h4>
                </Col>
                <Devs text={data.devs}/>
                <Col className='mt-5'>
                    <h4>Научные лекции и семинары</h4>
                </Col>
                <ScienceLectures text={data.lecturesAndSeminares}/>
            </div>
        </Container>
    );
}

export default InfoList;
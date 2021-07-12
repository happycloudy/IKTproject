import React, {useEffect, useState} from 'react';
import {Col, Container} from "react-bootstrap";
import Bachelor from "./infoForStudents/Bachelor";
import Magisters from "./infoForStudents/Magisters";
import Students from "./infoForStudents/student";
import Devs from "./infoForStudents/Devs";
import ScienceLectures from "./infoForStudents/ScienceLectures";
import DiplomsUndergraduate from "./infoForStudents/DiplomsUndergraduate";
import axios from "axios";
import GraduateList from "./infoForStudents/GraduateList";

function StudentsInfo() {
    const [data, setData] = useState({
        students: '',
        devs: '',
        lecturesAndSeminares: '',
        studentsImg: '',
        devsImg: '',
        lecturesAndSeminaresImg: '',
        graduate: '',
        graduateImg: ''
    })

    const fetchData = async () => {
        let data = (await axios.get('http://localhost:1337/students')).data
        await setData({
            students: data.Students,
            devs: data.Develops,
            lecturesAndSeminares: data.ScienceLecturesAndSeminares,
            devsImg: 'http://localhost:1337' + data.DevsImg.url,
            lecturesAndSeminaresImg: 'http://localhost:1337' + data.ScienceLectureAndSeminaresImg.url,
            studentsImg: 'http://localhost:1337' + data.StudentsImg.url,
            graduate: data.Graduate,
            graduateImg: 'http://localhost:1337' + data.GraduateImg.url
        })
    }

    useEffect(async () => {
        await fetchData()
    }, [])

    return (
        <Container className='mt-5 mb-5'
                   style={{backgroundColor: 'rgba(255,255,255,0.2)', textAlign: 'center', borderRadius: '15px'}}>
            <div>
                <Col className='mt-2'>
                    <h3>Студентам</h3>
                </Col>
                <Students text={data.students} image={data.studentsImg}/>

                <Col className='mt-5'>
                    <h3>Бакалаврам</h3>
                </Col>
                <Bachelor/>

                <Col className='mt-5'>
                    <h3>Магистрам</h3>
                </Col>
                <Magisters/>

                <Col className='mt-5'>
                    <h3>Темы дипломных работ бакалавров</h3>
                </Col>
                <DiplomsUndergraduate/>

                <Col className='mt-5'>
                    <h3>Аспирантам</h3>
                </Col>
                <GraduateList text={data.graduate} image={data.graduateImg}/>

                <Col className='mt-5'>
                    <h3>Научная деятельность</h3>
                </Col>

                <Col className='mt-5'>
                    <h4>Разработки</h4>
                </Col>
                <Devs text={data.devs} image={data.devsImg}/>

                <Col className='mt-5'>
                    <h4>Научные лекции и семинары</h4>
                </Col>
                <ScienceLectures text={data.lecturesAndSeminares} image={data.lecturesAndSeminaresImg}/>
            </div>
        </Container>
    );
}

export default StudentsInfo;
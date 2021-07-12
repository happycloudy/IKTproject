import {Col, Container, Row} from 'react-bootstrap'
import CardFlip from './Card'
import styles from '../../styles/teachers.module.css'
import {useEffect, useState} from "react";
import axios from "axios";

export default function Tutors(props) {
    const [teachers, setTeachers] = useState([])

    const fetchTeachers = async () => {
        let teachers = (await axios.get('http://localhost:1337/tutors')).data
        setTeachers(teachers)
    }

    useEffect(async () => {
        await fetchTeachers()
    }, [])

    return (
        <Container>
            <div className='d-flex justify-content-center'>
                <h3>
                    Преподаватели
                </h3>
            </div>

            <Row className={styles.teachers}>
                {
                    teachers.map((teacher, id) =>
                        <Col key={id}>
                            <CardFlip
                                      name={teacher.Name}
                                      position={teacher.Position}
                                      biography={teacher.Biography}
                                      img={teacher.Avatar ? 'http://localhost:1337' + teacher.Avatar.url : null}
                            />
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}

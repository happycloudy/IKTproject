import {Container, Row} from 'react-bootstrap'
import React, {useEffect, useState} from "react";
import axios from "axios";
import StudentsWork from "./StudentsWork";

export default  function StudentsWorks(props) {
    const [studentsWorks, setStudentsWorks] = useState([])

    const fetchStudentsWorks = async () => {
        return (await axios.get('http://localhost:1337/students-works')).data
    }

    useEffect(async () => {
        let studentsWorks = await fetchStudentsWorks()
        setStudentsWorks(studentsWorks)
    }, [])

    
    return(
        <Container>
            <h3 align={'center'}>Студенческие работы</h3>
            <div className='mt-3 mb-3 blockStyle'>
                <Row>
                    {
                        studentsWorks.reverse().map(publication =>
                            <StudentsWork
                                title={publication.Title}
                                description={publication.Description}
                                key={publication.id}
                                image={'http://localhost:1337'+publication.Image.url}
                            />
                        )
                    }
                </Row>
            </div>
        </Container>
    )
}
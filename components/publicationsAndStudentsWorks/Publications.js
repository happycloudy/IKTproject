import {Container, Row} from 'react-bootstrap'
import React, {useEffect, useState} from "react";
import axios from "axios";
import Publication from "./Publication";

export default function Publications(props) {
    const [publications, setPublications] = useState([])

    const fetchPublications = async () => {
        return (await axios.get('http://localhost:1337/publications')).data
    }

    useEffect(async () => {
        let publications = await fetchPublications()
        setPublications(publications)
    }, [])


    return (
        <Container>
            <h3 align={'center'}>Публикации</h3>
            <div className='mt-3 mb-3 blockStyle'>
                <Row>
                    {
                        publications.reverse().map(publication =>
                            <Publication
                                title={publication.Title}
                                description={publication.Description}
                                key={publication.id}
                            />
                        )
                    }
                </Row>
            </div>
        </Container>
    )
}
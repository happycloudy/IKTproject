import styles from '../../styles/index.module.css'
import {Container, Jumbotron, Row} from 'react-bootstrap'
import React, {useEffect, useState} from 'react'
import Particles from "react-particles-js";
import ParticleStyle from './ParticleStyle'
import News from "./News";
import axios from "axios";

const jumboStyle = {
    color: 'white',
    backgroundColor: 'transparent'
}

const containerStyle = {
    background: '#308DE4',
    textAlign: 'center',
    borderRadius: '15px',
}

export default function NewsBlock() {
    const [news, setNews] = useState([])

    const fetchNews = async () => {
        return (await axios.get('http://localhost:1337/posts')).data.reverse().filter((news, id) => id < 2)
    }

    useEffect(async () => {
        let news = await fetchNews()
        setNews(news)
    }, [])


    return (
        <div className={styles.newsWrap}>
            <Particles params={ParticleStyle}
                       className={styles.particles}
            />
            <Jumbotron style={jumboStyle} fluid className="mb-0 mt-0 pt-3 pb-3">
                <Container className="pb-3 pt-3" style={containerStyle}>
                    <h2 className="mb-3" style={{color: 'white', textAlign: 'center'}}>Новости</h2>
                    <Row>
                        {
                            news.map((news, id) =>
                                <News key={id}
                                      url={news.PostImage ? 'http://localhost:1337' + news.PostImage.url : '/NotFoundImage.jpg'}
                                      news={news}
                                />
                            )
                        }
                    </Row>
                    <a className={styles.allNewsLink} href='/news'>
                        Все новости
                    </a>
                </Container>
            </Jumbotron>
        </div>
    )
}


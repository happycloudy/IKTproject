import React, {useEffect, useState} from 'react';
import axios from "axios";
import News from "../index/News";
import {Container, Row} from "react-bootstrap";
import styles from '../../styles/news.module.css'


const AllNews = () => {
    const [news, setNews] = useState([])

    const fetchNews = async () => {
        return (await axios.get('http://localhost:1337/posts')).data.reverse()
    }

    useEffect(async () => {
        let news = await fetchNews()
        setNews(news)
    }, [])


    return (
        <Container className='mt-5 mb-5'>
            <div className={styles.newsHeader}>
                <h3>
                    Все новости
                </h3>
            </div>
            <Row className='mt-3'>
                {news.map((news,id)=>
                    <News key={id}
                          url={news.PostImage ? 'http://localhost:1337' + news.PostImage.url : '/NotFoundImage.jpg'}
                          news={news}
                    />
                )}
            </Row>
        </Container>
    );
};

export default AllNews;
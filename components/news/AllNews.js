import React, {useEffect, useState} from 'react';
import axios from "axios";
import News from "../index/News";
import {Container} from "react-bootstrap";
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
        <Container className='mt-5 '>
            <div className={styles.newsHeader}>
                <h3>
                    Все новости
                </h3>
            </div>
            <div className={styles.news}>
                {news.map((news,id)=>
                    <News key={id}
                          url={news.PostImage ? 'http://localhost:1337' + news.PostImage.url : '/NotFoundImage.jpg'}
                          news={news}
                    />
                )}
            </div>
        </Container>
    );
};

export default AllNews;
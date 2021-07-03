import React from 'react';
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import AllNews from "../components/news/AllNews";

const News = () => {
    return (
        <>
            <Header/>
            <div className='linearTransitionUp'/>
            <AllNews/>
            <div className='linearTransition'/>
            <Footer/>
        </>
    );
};

export default News;
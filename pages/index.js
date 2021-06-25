import Header from '../components/general/Header'
import Banner from '../components/index/Banner'
import Footer from '../components/general/Footer'
import NewsBlock from '../components/index/NewsBlock'
import Head from 'next/head'
import '../styles/index.module.css'
import React from "react";
import DirectionsBlock from "../components/index/DirectionsBlock";


export default function Home() {


    return (
        <>
            <Head>
                <title>Главная</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <Banner/>
            <NewsBlock/>
            <DirectionsBlock/>
            <Footer/>
        </>
    )
}

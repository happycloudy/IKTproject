import Header from '../components/general/Header'
import Banner from '../components/index/Banner'
import Footer from '../components/general/Footer'
import News from '../components/index/News'
import Head from 'next/head'
import '../styles/index.module.css'
import React from "react";


export default function Home() {


    return (
        <>
            <Head>
                <title>Главная</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <Banner/>
            <News/>
            <Footer/>
        </>
    )
}

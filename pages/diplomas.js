import React from 'react';
import Head from "next/head";
import Header from "../components/general/header";
import DiplomWindow from "../components/Diplomases/DiplomWindow"

const Diplomas = (props) => {
    return (
        <div>
            <Head>
                <title>
                    Дипломы '201n'
                </title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <DiplomWindow/>
        </div>
    );
};

export default Diplomas;
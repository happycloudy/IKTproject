import React from 'react';
import Head from "next/head";
import Header from "../components/general/Header";
import DiplomasDirection from "../components/Diplomases/DiplomasDirection"

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
            <DiplomasDirection/>
        </div>
    );
};

export default Diplomas;
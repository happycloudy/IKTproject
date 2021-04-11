import Header from '../components/general/header'
import Footer from '../components/general/footer'
import Head from 'next/head'
import Students from '../components/infoForStudents/student'
import Aspirants from '../components/graduate/aspirants'
import {Container, Row, Col} from "react-bootstrap";
import InfoList from "../components/InfoList";

export default function InfoForStudents() {
    const linearTransition = {
        height: '20vh',
        background: '#308DE4 linear-gradient(0deg, rgba(48,141,228,1) 0%, rgba(255,255,255,1) 100%)'
    }
    const linearTransitionUp = {
        height: '10vh',
        background: '#308DE4 linear-gradient(180deg, rgba(48,141,228,1) 0%, rgba(255,255,255,1) 100%)'
    }
    return (
        <div>
            <Head>
                <title>Студентам</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <div style={linearTransitionUp}/>
            <InfoList/>
            <div style={linearTransition}>
            </div>
            <Footer/>
        </div>
    )
}


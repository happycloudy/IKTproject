import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import Head from 'next/head'
import InfoList from "../components/InfoList";
import Particles from "react-particles-js";
import particleStyle from '../components/index/ParticleStyle'


export default function InfoForStudents() {
    const linearTransition = {
        height: '20vh',
        background: '#308DE4 linear-gradient(0deg, rgba(48,141,228,1) 0%, rgba(255,255,255,1) 100%)'
    }
    const linearTransitionUp = {
        height: '10vh',
        background: '#308DE4 linear-gradient(180deg, rgba(48,141,228,1) 0%, rgba(255,255,255,1) 100%)'
    }
    const background = {
        position: 'absolute',
        display: 'block',
        top: 0,
        left: 0,
        zIndex: -1,
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    }
    const bodyStyle = {
        height: '100%',
        backgroundRepeat: 'no-repeat',    /*background-image: linear-gradient(rgb(12, 97, 33),rgb(104, 145, 162));*/
        position: 'relative',
        background: "transparent"
    }


    return (
        <div>
            <Head>
                <title>Студентам</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <div style={bodyStyle}>
                <Particles style={background}
                           params={particleStyle}
                />
                <div style={linearTransitionUp}/>
                <InfoList/>
                <div style={linearTransition}>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


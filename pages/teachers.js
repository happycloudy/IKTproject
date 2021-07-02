import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import Head from 'next/head'
import Tutors from '../components/teachers/Tutors'
import Particles from "react-particles-js";
import particleStyle from '../components/index/ParticleStyle'

export default function Teachers() {
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
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        background: "transparent",
        width: '100%'
    }


    return (
        <>
            <Head>
                <title>Преподаватели</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>

            <div style={bodyStyle}>
                <div style={linearTransitionUp}/>
                <Particles
                    className='particlesBackground'
                    params={particleStyle}
                />
                <Tutors/>
                <div style={linearTransition}/>
            </div>
            <Footer/>
        </>
    )
}

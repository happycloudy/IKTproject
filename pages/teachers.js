import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import Head from 'next/head'
import Tutors from '../components/teachers/Tutors'
import Particles from "react-particles-js";
import particleStyle from '../components/index/ParticleStyle'

export default function Teachers() {
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
                <div className='linearTransitionUp'/>
                <Particles
                    className='particlesBackground'
                    params={particleStyle}
                />
                <Tutors/>
                <div className='linearTransition'/>
            </div>
            <Footer/>
        </>
    )
}

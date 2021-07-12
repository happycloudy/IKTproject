import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import Head from 'next/head'
import Particles from "react-particles-js";
import Olympics from "../components/olympics/Olympics";
import particleStyle from '/components/index/ParticleStyle'

export default function Olympic() {
    const background = {
        position: 'absolute',
        display: 'block',
        top: 0,
        left: 0,
        zIndex: -1,
        height:'100%',
        width:'100%',
        backgroundColor: 'white'
    }
    const bodyStyle= {
        height: '100%',
        backgroundRepeat: 'no-repeat',    /*background-image: linear-gradient(rgb(12, 97, 33),rgb(104, 145, 162));*/
        position: 'relative',
        background: "transparent"
    }


    return (
        <div>
            <Head>
                <title>Олимпиады</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <div style={bodyStyle}>
                <Particles style={background}
                           params={particleStyle}
                />
                <div className='linearTransitionUp'>
                </div>
                <Olympics/>
                <div className='linearTransition'>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

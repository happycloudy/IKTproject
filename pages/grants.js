import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import Head from 'next/head'
import Particles from "react-particles-js";
import InfoGrant from "../components/grants/InfoGrant";
import particleStyle from '../components/index/ParticleStyle'

export default function Grants() {
    const bodyStyle = {
        height: '100%',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        background: "transparent"
    }


    return (
        <div>
            <Head>
                <title>О грантах</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <div style={bodyStyle}>
                <Particles className='particlesBackground'
                           params={particleStyle}
                />
                <div className='linearTransitionUp'>
                </div>
                <InfoGrant/>
                <div className='linearTransition '>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

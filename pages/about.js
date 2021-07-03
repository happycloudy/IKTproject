import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import Head from 'next/head'
import InfoMore from '../components/AboutMore'
import Particles from 'react-particles-js';
import particleStyle from '../components/index/ParticleStyle'

export default function Teachers() {
    const bodyStyle = {
        height: '100%',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        background: "transparent"
    }


    return (
        <>
            <Head>
                <title>О кафедре</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>

            <div style={bodyStyle}>
                <Particles className='particlesBackground'
                           params={particleStyle}
                />
                <div className='linearTransitionUp'/>
                <InfoMore/>
                <div className='linearTransition'>
                </div>
            </div>

            <Footer/>
        </>
    )
}

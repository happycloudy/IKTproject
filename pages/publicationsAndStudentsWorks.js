import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import Head from 'next/head'
import Particles from "react-particles-js";
import Publications from "../components/publicationsAndStudentsWorks/Publications";
import StudentsWorks from "../components/publicationsAndStudentsWorks/StudentsWorks";
import particleStyle from '../components/index/ParticleStyle'


export default function Grants() {
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
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        background: "transparent"
    }


    return (
        <div>
            <Head>
                <title>Публикации и студенческие работы</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <div style={bodyStyle}>
                <Particles style={background}
                           params={particleStyle}
                />
                <div className='linearTransitionUp'>
                </div>
                <Publications/>
                <div className='linearTransition'>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

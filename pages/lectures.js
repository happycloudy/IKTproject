import Header from '../components/general/header'
import Footer from '../components/general/footer'
import Head from 'next/head'

import StudyInfo from '../components/LecturesList'

export default function Science() {
    const linearTransition = {
        height: '20vh',
        background: '#308DE4 linear-gradient(0deg, rgba(48,141,228,1) 0%, rgba(255,255,255,1) 100%)'
    }
    return (
        <div>
            <Head>
                <title>Лекции и дипломы</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <StudyInfo/>
            <div style={linearTransition}>
            </div>
            <Footer/>
        </div>
    )
}

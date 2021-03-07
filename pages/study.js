import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import StudyInfo from '../components/_study'
export default function Study() {
  return (
    <div>
        <Head>
        <title>Учеба</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <Header/>
      <StudyInfo/>
      <Footer/>
    </div>
  )
}

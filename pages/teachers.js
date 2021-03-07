import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import Tutors from '../components/tutors'
export default function Teachers() {
  return (
    <div>
        <Head>
        <title>Преподаватели</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <Header/>
      <Tutors/>
      <Footer/>
    </div>
  )
}

import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'

export default function Study() {
  return (
    <div>
        <Head>
        <title>Учеба</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <Header/>

      <Footer/>
    </div>
  )
}

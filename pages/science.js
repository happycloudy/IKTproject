import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'

export default function Science() {
  return (
    <div>
        <Head>
        <title>Наука</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <Header/>

      <Footer/>
    </div>
  )
}

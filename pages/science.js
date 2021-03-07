import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import ScienceInfo from '../components/_science'
export default function Science() {
  return (
    <div>
        <Head>
        <title>Наука</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <Header/>
      <ScienceInfo/>
      <Footer/>
    </div>
  )
}

import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'

export default function Teachers() {
  return (
    <div>
        <Head>
        <title>О кафедре</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <Header/>

      <Footer/>
    </div>
  )
}
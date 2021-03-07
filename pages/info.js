import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'

export default function Info() {
  return (
    <div>
        <Head>
        <title>Информация</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <Header/>

      <Footer/>
    </div>
  )
}

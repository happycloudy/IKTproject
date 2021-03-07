import Header from '../components/header'
import Banner from '../components/banner'
import Footer from '../components/footer'
import News from '../components/news'
import MyParallax from '../components/parallax'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Главная</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <MyParallax/>
      <News/>
      <Footer/>
    </div>
  )
}

import Header from '../components/header'
import Banner from '../components/banner'
import Footer from '../components/footer'
import News from '../components/news'
import MyParallax from '../components/parallax'

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <MyParallax/>
      <News/>
      <Footer/>
    </div>
  )
}

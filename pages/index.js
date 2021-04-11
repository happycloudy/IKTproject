import Header from '../components/general/header'
import Banner from '../components/index/banner'
import Footer from '../components/general/footer'
import News from '../components/index/news'
import Head from 'next/head'
import {Parallax} from 'react-parallax';
import {Component} from "react";


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images : [
                './parallax1.png',
                './parallax3.png'
            ]
        }
    }


    render() {
        const linearTransition = {
            height: '20vh',
            background: '#308DE4 linear-gradient(0deg, rgba(48,141,228,1) 0%, rgba(255,255,255,1) 100%)'
        }
        const linearTransitionUp = {
            height: '10vh',
            background: '#308DE4 linear-gradient(180deg, rgba(48,141,228,1) 0%, rgba(255,255,255,1) 100%)'
        }
        return (
            <div>
                <Head>
                    <title>Главная</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Header/>
                <Banner/>
                {
                    this.state.images.map((image,index)=>
                        <Parallax key={index}
                                  style={{height: '100vh'}}
                                  blur={0} bgImage= {image} bgImageAlt="the cat"
                                  strength={200}
                                  renderLayer={percentage => (
                                      <div
                                          style={{
                                              position: 'absolute',
                                              background: `#308DE4`,
                                              left: '0%',
                                              top: '50%',
                                              width: '100%',
                                              opacity: `${percentage-1}`,
                                              height: percentage * 500
                                          }}
                                      />
                                  )}>
                            <div style={{ height: '1vh' }} />
                        </Parallax>
                    )
                }
                <div style={linearTransitionUp}/>
                <News/>
                <div style={linearTransition}>
                </div>
                <Footer/>
            </div>
        )
    }
}

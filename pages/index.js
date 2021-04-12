import Header from '../components/general/header'
import Banner from '../components/index/banner'
import Footer from '../components/general/footer'
import News from '../components/index/news'
import Head from 'next/head'
import {Parallax} from 'react-parallax';
import {Component} from "react";
import Particles from "react-particles-js";

const background = {
    position: 'absolute',
    display: 'block',
    top: 0,
    left: 0,
    zIndex: -1,
    height:'100%',
    width:'100%',
    backgroundColor: 'white'
}
const bodyStyle= {
    height: '100%',
    backgroundRepeat: 'no-repeat',    /*background-image: linear-gradient(rgb(12, 97, 33),rgb(104, 145, 162));*/
    position: 'relative',
    background: "transparent"
}
const particleStyle ={
    "particles": {
        "number": {
            "value": 100
        },
        "size": {
            "value": 2.5
        },
        "color":{
            "value":"#308DE4"
        },

    },
    "size": {
        "value": 5,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    },
    "shape": {
        "type": "circle",
        "stroke": {
            "width": 0,
            "color": "#308DE4"
        },
        "polygon": {
            "nb_sides": 5
        },
    },
    "retina_detect": true,
}



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
                <div style={{position:'relative'}}>
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
                </div>
                <div style={bodyStyle}>
                    <Particles style={background}
                               params={particleStyle}
                    />
                <div style={linearTransitionUp}/>
                <News/>
                <div style={linearTransition}>
                </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

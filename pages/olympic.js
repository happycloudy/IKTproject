import Header from '../components/general/header'
import Footer from '../components/general/footer'
import Head from 'next/head'
import Particles from "react-particles-js";
import Olympics from "../components/olympics/olympics";


export default function Olympic() {
    const linearTransition = {
        height: '20vh',
        background: '#308DE4 linear-gradient(0deg, rgba(48,141,228,1) 0%, rgba(255,255,255,1) 100%)'
    }
    const linearTransitionUp = {
        height: '10vh',
        background: '#308DE4 linear-gradient(180deg, rgba(48,141,228,1) 0%, rgba(255,255,255,1) 100%)'
    }
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

    return (
        <div>
            <Head>
                <title>Олимпиады</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <div style={bodyStyle}>
                <Particles style={background}
                           params={particleStyle}
                />
                <div style={linearTransitionUp}>
                </div>
                <Olympics/>
                <div style={linearTransition}>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

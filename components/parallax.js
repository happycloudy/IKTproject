import styles from '../styles/Home.module.css'
import { ParallaxProvider,Parallax } from 'react-scroll-parallax'
import {Container} from 'react-bootstrap'


const ParStyle = {
    background: '#308DE4',
}

export default  function MyParallax(props) {
   return(
       <div className="pt-5 pb-5" style={{background: '#308DE4',position:'relative'}}>
            <ParallaxProvider className="mt-5 mb-5" >
                <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure" styleOuter={ParStyle}>
                    <img width="100%"  src="/parallax1.png" />
                </Parallax>
                <div className="pt-3 mb-3"></div>
                <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure" styleOuter={ParStyle}>
                    <img width="100%" src="/parallax2.png" />
                </Parallax>
                <div className="pt-3 pb-3"></div>
                <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure" styleOuter={ParStyle}>
                    <img width="100%" src="/parallax3.png" />
                </Parallax>
            </ParallaxProvider>
        </div>
   )
}
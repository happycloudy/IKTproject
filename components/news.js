import styles from '../styles/Home.module.css'
import {Container,Jumbotron,Col,Row} from 'react-bootstrap'
import React from 'react'

const jumboStyle ={
    background: '#308DE4',
    color:'white',
}

const containerStyle ={
    background: 'rgba(255,255,255,0.2)',
    textAlign:'center', 
    borderRadius:'15px',
}

export default class News extends React.Component {
    /*constructor(props){
        super(props)
        this.getMatrix = this.getMatrix.bind(this); 
    }
    componentDidMount(){
        this.getMatrix();
    }

    getMatrix = async (e) => {
        let c = document.getElementById("c");
        let ctx = c.getContext("2d");

        c.height = window.innerHeight /2;
        c.width = window.innerWidth;

        let matrix = "fuck";

        matrix = matrix.split("");

        let font_size = 10;
        let columns = c.width/font_size; 
        let drops = [];
        
        for(let x = 0; x < columns; x++)
            drops[x] = 1; 


        function draw()
        {
            ctx.fillStyle = "rgba(0, 0, 20, 0.04)";
            ctx.fillRect(0, 0, c.width, c.height);

            ctx.fillStyle = "#308DE4";
            ctx.font = font_size + "px arial";
            for(let i = 0; i < drops.length; i++)
            {
                let text = matrix[Math.floor(Math.random()*matrix.length)];
                ctx.fillText(text, i*font_size, drops[i]*font_size);
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;
                drops[i]++;
            }
        }
        setInterval(draw, 35);
    }
    <canvas id="c" style={{position:'absolute',background:'black',width:'100%',height:'100%'}}/>*/

render(){
    return(
    <div style={{position: 'relative'}}>
    
    <Jumbotron style={jumboStyle} fluid className="mb-0 mt-0 pt-3 pb-3">
                <Container className="pb-3 pt-3" style={containerStyle}>
                    <h1 className="mb-3" style={{color:'white',textAlign:'center'}}>Новости</h1>
                    <Row>
                        <Col>
                            <Container> 
                                <img
                                    src="/news.png"
                                    width="80%"
                                    height="50%"
                                    className="align-top"
                                    alt="IKT logo"
                                />
                                <h2>Новость 1</h2>
                                <p>Осознание непонимания приходит постепенно<br/>Но непонимания осознания неизлечимо</p>
                            </Container>
                        </Col>
                        <Col >
                            <Container> 
                                <img
                                    src="/news.png"
                                    width="80%"
                                    height="50%"
                                    className="align-top"
                                    alt="IKT logo"
                                />
                                <h2>Новость 2</h2>
                                <p>Осознание непонимания приходит постепенно<br/>Но непонимания осознания неизлечимо</p>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <Container> 
                                <img
                                    src="/news.png"
                                    width="80%"
                                    height="50%"
                                    className="align-top"
                                    alt="IKT logo"
                                />
                                <h2>Новость 3</h2>
                                <p>Осознание непонимания приходит постепенно<br/>Но непонимания осознания неизлечимо</p>
                            </Container>
                        </Col>
                        <Col>
                            <Container> 
                                <img
                                    src="/news.png"
                                    width="80%"
                                    height="50%"
                                    className="align-top"
                                    alt="IKT logo"
                                />
                                <h2>Новость 4</h2>
                                <p>Осознание непонимания приходит постепенно<br/>Но непонимания осознания неизлечимо</p>
                            </Container>
                        </Col>
                    </Row>
                </Container> 
    </Jumbotron>
    </div>
)}
}


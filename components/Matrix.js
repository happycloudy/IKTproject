import React from 'react'


export default class Matrix extends React.Component {
    constructor(props){
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

        let matrix = "1234567890qwertyuiop[]asdfghjkl;'zxcvbnm,./`~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:ZXCVBNM<>?";

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
    

render(){
    return(
    <div style={{background:'#308DE4'}}>
        <h1 style={{color:'white'}}>Wake up, neo...</h1>
        <canvas id="c" style={{background:'black',width:'100%',height:'100%'}}/>
    </div>)
}
}
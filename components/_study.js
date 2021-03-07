import styles from '../styles/Home.module.css'
import {Container,Jumbotron,Col,Row,Collapse} from 'react-bootstrap'

export default  function StudyInfo(props) {
    const jumboStyle ={
        background: '#308DE4',
        color:'white',
    }
    return(
        <div>
            <Jumbotron style={jumboStyle} fluid className="mb-0 pb-5">
            <Container style={{backgroundColor:'rgba(255,255,255,0.2)', textAlign:'center', borderRadius:'15px'}}>
               <h1>Fill in...</h1>
            </Container>   
            </Jumbotron> 
        </div>
    )
}
import {Component} from "react";
import ReactCardFlip from 'react-card-flip';
import {Card, Container} from "react-bootstrap";


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleRotate = this.handleRotate.bind(this);
    }

    handleRotate(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        const containerStyle = {
            textAlign: 'center',
            color: 'white'
        }
        const cardStyle = {
            border: '1px solid',
            borderRadius: '10px',
            margin: 'auto',
            width: '20vw',
            backgroundColor: '#308DE4',
        }

        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div onMouseEnter={this.handleRotate}>
                    <Container style={containerStyle} className="mt-3 mb-3">
                        <Card style={cardStyle}>
                            <Card.Img variant="top" src="/Jensa.png"/>
                            <Card.Body>
                                <Card.Title>Женса А.В.</Card.Title>
                                <Card.Text>Доцент</Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
                <div onMouseLeave={this.handleRotate}>
                    <Container style={containerStyle} className="mt-3 mb-3">
                        <Card style={cardStyle}>
                            <Card.Body style={{textAlign: "left"}}>
                                <Card.Title>Женса Андрей Вячеславович</Card.Title>
                                <Card.Text><b>Заместитель заведующего кафедрой</b><br/>Окончил: РХТУ им. Д.И.Менделеева<br/>
                                    Специальность по диплому: Основные процессы химических производств и химическая кибернетика<br/>
                                    Ученая степень: кандидат технических наук<br/>
                                    Ученое звание: Доцент<br/>
                                    Основное место работы: ФГБОУ ВО «Российский химико-технологический университет им. Д.И. Менделеева»</Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
            </ReactCardFlip>
        )
    }
}
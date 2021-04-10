import {Component} from "react";
import ReactCardFlip from 'react-card-flip';
import {Card, Container} from "react-bootstrap";


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
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
                <div onClick={this.handleClick}>
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
                <div onClick={this.handleClick}>
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
            </ReactCardFlip>
        )
    }
}
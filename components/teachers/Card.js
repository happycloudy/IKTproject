import {Card} from "react-bootstrap";
import styles from '../../styles/teachers.module.css'

export default function TutorCard(props) {
    return (
        <div className={styles.wrap}>
            <div className={styles.card}>
                <div className={styles.front}>
                    <Card className={styles.frontCard}>
                        <img
                            width={300}
                            height={300}
                            className="card-img-top"
                            src={props.img}
                            alt={props.name}
                        />
                        <Card.Body>
                            <Card.Title>{props.name}</Card.Title>
                            <Card.Text>{props.position}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className={styles.back}>
                    <Card className={styles.backCard}>
                        <Card.Body style={{textAlign: "left"}}>
                            <Card.Title>{props.name}</Card.Title>
                            <Card.Text>
                                <b>{props.position}</b>
                                <br/>
                                {props.biography}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
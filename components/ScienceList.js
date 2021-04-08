import {Container} from 'react-bootstrap'
import Devs from '../components/science/Devs'
import ScienceLectures from './science/ScienceLectures'

export default function ScienceInfo(props) {
    return (
        <div>
            <Container className='mt-5 mb-5' style={{backgroundColor: 'rgba(255,255,255,0.2)', textAlign: 'center', borderRadius: '15px'}}>
                <Devs/>
                <ScienceLectures/>
            </Container>
        </div>
    )
}
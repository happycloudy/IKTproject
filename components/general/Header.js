import {Navbar, Nav, NavDropdown, Dropdown} from 'react-bootstrap'
import {Fade} from 'react-reveal'


export default function Header() {
    const NavbarStyle = {
        background: '-webkit-linear-gradient(right, rgba(15,76,134,0.8), #308DE4 100%)',
    }

    return (
        <div style={{backgroundColor: '#308DE4'}}>
            <Fade top delay={500}>
                <Navbar
                    style={NavbarStyle}
                    expand="lg"
                >
                    <Navbar.Brand href="/">
                        <img
                            src="/logo.png"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="IKT logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="text-white" href="/">Главная</Nav.Link>
                            <NavDropdown title={
                                <span className="text-white my-auto">Студентам</span>
                            } id="collasible-nav-dropdown">
                                <NavDropdown.Item style={{color:"#308DE4"}} href="/infoForStudents">Студентам</NavDropdown.Item>
                                <NavDropdown.Item style={{color:"#308DE4"}} href="/grants">О&nbsp;грантах</NavDropdown.Item>
                                <NavDropdown.Item style={{color:"#308DE4"}} href="/olympic">Олимпиады</NavDropdown.Item>
                                <NavDropdown.Item style={{color:"#308DE4"}} href="/conferencesAndStateGrants">Конференции&nbsp;и<br/>гос.&nbsp;гранты</NavDropdown.Item>
                                <NavDropdown.Item style={{color:"#308DE4"}} href="/publicationsAndStudentsWorks">Публикации&nbsp;и<br/>студенческие&nbsp;работы</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={
                                <span className="text-white my-auto">Аспирантам</span>
                            } id="collasible-nav-dropdown">
                                <NavDropdown.Item style={{color:"#308DE4"}} href="/graduate">Аспирантам</NavDropdown.Item>
                                <NavDropdown.Item style={{color:"#308DE4"}} href="/grants">О&nbsp;грантах</NavDropdown.Item>
                                <NavDropdown.Item style={{color:"#308DE4"}} href="/olympic">Олимпиады</NavDropdown.Item>
                                <NavDropdown.Item style={{color:"#308DE4"}} href="/conferencesAndStateGrants">Конференции&nbsp;и<br/>гос.&nbsp;гранты</NavDropdown.Item>
                                <NavDropdown.Item  style={{color:"#308DE4"}} href="/publicationsAndStudentsWorks">Публикации&nbsp;и<br/>студенческие&nbsp;работы</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="text-white" href="/infoForEntrants">Абитуриентам</Nav.Link>
                            <Nav.Link className="text-white" href="/teachers">Преподаватели</Nav.Link>
                            <Nav.Link className="text-white" href="/about">О&nbsp;кафедре</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fade>
        </div>
    )
}
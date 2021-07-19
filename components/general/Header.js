import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Link from 'next/link'


export default function Header() {
    const NavbarStyle = {
        background: '-webkit-linear-gradient(right, rgba(15,76,134,0.8), #308DE4 100%)',
    }

    return (
        <div style={{backgroundColor: '#308DE4'}}>
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
                        <Link href="/" passHref>
                            <Nav.Link className="text-white" >
                                Главная
                            </Nav.Link>
                        </Link>

                        <Link href="/infoForStudents" passHref>
                            <Nav.Link className="text-white">
                                Студентам
                            </Nav.Link>
                        </Link>

                        <Link href="/infoForEntrants" passHref>
                            <Nav.Link className="text-white">
                                Абитуриентам
                            </Nav.Link>
                        </Link>

                        <NavDropdown title={
                            <span className="text-white my-auto">Наука</span>
                        }
                                     id="collasible-nav-dropdown"
                        >
                            <Link href="/grants" passHref>
                                <NavDropdown.Item style={{color: "#308DE4"}}>
                                    Гранты
                                </NavDropdown.Item>
                            </Link>

                            <Link href="/olympic" passHref>
                                <NavDropdown.Item style={{color: "#308DE4"}}>
                                    Олимпиады
                                </NavDropdown.Item>
                            </Link>

                            <Link href="/conferences" passHref>
                                <NavDropdown.Item style={{color: "#308DE4"}}>
                                    Конференции
                                    и<br/>гос. гранты
                                </NavDropdown.Item>
                            </Link>

                            <Link href="/publicationsAndStudentsWorks" passHref>
                                <NavDropdown.Item style={{color: "#308DE4"}}>
                                    Публикации
                                </NavDropdown.Item>
                            </Link>
                        </NavDropdown>

                        <Link href="/teachers" passHref>
                            <Nav.Link className="text-white">
                                Преподаватели
                            </Nav.Link>
                        </Link>

                        <Link href="/about" passHref>
                            <Nav.Link className="text-white">
                                О кафедре
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
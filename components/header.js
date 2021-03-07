import {Navbar,Nav} from 'react-bootstrap'



export default  function Header(props) {
    const NavbarStyle = {
      background: '-moz-linear-gradient(right, rgba(15,76,134,1), #308DE4 100%)', /* FF3.6+ */
      background: 'linear-gradient(right, rgba(15,76,134,1), #308DE4 100%)', /* W3C */
      background: '-webkit-linear-gradient(right, rgba(15,76,134,0.8), #308DE4 100%)',
    }

    return (
    <div>

      <Navbar 
        style={NavbarStyle}
        expand="lg">
        
        <Navbar.Brand href="/">
        <img
            src="/logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="IKT logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
           <Nav.Item>
              <Nav.Link className="text-white" href="/">Главная</Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link className="text-white" href="/info">Информация</Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link className="text-white" href="/science">Наука</Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link className="text-white" href="/study">Учеба</Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link className="text-white" href="/teachers">Преподаватели</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-white" href="/about">О кафедре</Nav.Link>
            </Nav.Item>
          </Navbar.Collapse>
      </Navbar>
      
    </div>
    )
}
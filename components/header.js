import {Navbar,Nav} from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import Head from 'next/head'


export default  function Header(props) {
    const NavbarStyle = {
      color:'black !important',
      background: '-moz-linear-gradient(right, rgba(15,76,134,1), #308DE4 100%);', /* FF3.6+ */
      background: 'linear-gradient(right, rgba(15,76,134,1), #308DE4 100%);', /* W3C */
      background: '-webkit-linear-gradient(right, rgba(15,76,134,1), #308DE4 100%);',
    }

    return (
    <div>
      <Head>
        <title>Главная</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        style={NavbarStyle}
        width="100vw"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        
        <Navbar.Brand href="/">
        <img
            src="/logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="IKT logo"
        />
        </Navbar.Brand>
        <Nav.Item>
          <Nav.Link className="text-white" href="/">Главная</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link className="text-white" eventKey="link-1">Информация</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link className="text-white" eventKey="link-1">Наука</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link className="text-white" eventKey="link-1">Учеба</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link className="text-white" eventKey="link-1">Преподаватели</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-white" eventKey="link-2">О кафедре</Nav.Link>
        </Nav.Item>
      </Navbar>
    </div>
    )
}
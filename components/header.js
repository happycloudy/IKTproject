import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import Head from 'next/head'


export default  function Header(props) {
    return (
    <div>
      <Head>
        <title>Главная</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar 
        bg="light" 
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
          <Nav.Link href="/">Главная</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Информация</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Наука</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Учеба</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Преподаватели</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">О кафедре</Nav.Link>
        </Nav.Item>
      </Navbar>
    </div>
    )
}
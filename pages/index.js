import Head from 'next/head'
import {Nav,Container} from 'react-bootstrap'
export default function Home() {
  return (
    <Container fluid
      width="100vw"
    >
      <Head>
        <title>Главная</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav
        activeKey="/home"
        width="100vw"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <img
            scr="http://ikt.muctr.ru/images/1logo.png"
            width={50}
            height={50}
          />
        </Nav.Item>
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
      </Nav>      
    </Container>
  )
}

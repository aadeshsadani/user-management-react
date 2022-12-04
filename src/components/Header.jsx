import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Header(props) {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Login/Signup</Navbar.Brand>
          <Nav>
            <Link to={props.target} onClick={props.statusChange}>{props.targetName}</Link>
            {/* <Nav.Link to="login">Login</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
  )
}

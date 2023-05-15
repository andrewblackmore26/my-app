import React from "react"
import '../styles/NavBar.css'
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-scroll";

function NavBar() {

  return (
      <div className="navbar-container">
        <Container>
          <Row>
            <Col lg={6}>
            <h1>AB - Porfolio</h1>
            </Col>
            <Col></Col>
            <Col className="links" lg={3}>
            <Nav.Link className="navbar-link" to="/">Home</Nav.Link>
            <Nav.Link className="navbar-link" to="/about">About</Nav.Link>
            <Nav.Link className="navbar-link" to="home" spy={true} smooth={true}>Projects</Nav.Link>
            <Nav.Link className="navbar-link" href="#">Skills</Nav.Link>
            </Col>
          </Row>    
        </Container>  
      </div>
  )
}

export default NavBar
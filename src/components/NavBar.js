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
            <Link className="link" to="home" smooth={true} duration={500}>Home</Link>
            <Link className="link" to="about" smooth={true} duration={500}>About</Link>
            <Link className="link" to="Projects" smooth={true} duration={500}>Projects</Link>
            <Link className="link" to="Skills" smooth={true} duration={500}>Skills</Link>
            </Col>
          </Row>    
        </Container>  
      </div>
  )
}

export default NavBar
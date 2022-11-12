import React from "react"
import '../styles/NavBar.css'
import { Navbar, Nav, Container } from "react-bootstrap"

function NavBar() {

  return (
    <Navbar>
      <h1>AB - Personal Portfolio</h1>
      <Nav.Link className="navbar-link" href="#">Projects</Nav.Link>
      <Nav.Link className="navbar-link" href="#">Skills</Nav.Link>
    </Navbar>
  )
}

export default NavBar
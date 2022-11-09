import React from "react"
import '../styles/NavBar.css'
import { Navbar } from "react-bootstrap"

function NavBar() {

  return (
    <Navbar>
      <h1>AB - Personal Portfolio</h1>
      <a href="#">Projects</a>
      <a href="#">Skills</a>
    </Navbar>
  )
}

export default NavBar
import React from "react"
import '../styles/Skills.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Row, Container } from "react-bootstrap";
import java from "../assets/java.png";
import python from "../assets/python.png";
import javascript from "../assets/javascript2.png";
import react from "../assets/react.png";


function Skills() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className="skills-container" name="skills">  
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <br></br>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={java} alt="Image" />
                  <h5>Java</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <footer className="footer">
        <p>Footer content goes here</p>
      </footer>
    </div>
  )
}

export default Skills;
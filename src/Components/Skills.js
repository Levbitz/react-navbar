import React from "react";
import { Row, Col } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import {
  // Card,
  // CardImg,
  CardText,
  CardBody,
  CardTitle,
  // CardSubtitle,
  // Button,
} from "reactstrap";

//img
import Flo from "./img/flo.png";

//import css
import "./css/Skill.css";

function Skills() {
  return (
    <div className="skillContainer">
      <div className="one">
        <Row>
          <img src={Flo} alt="" />
          <h3 class="skillsHeader">My Skills</h3>

          <img src={Flo} alt="" />
        </Row>
        <Row>
          <Col className="myCard">
            <div className="skillsCard">
              <div class="iconWrapper">
                <p class="myIcon">
                  <i class="fab fa-3x fa-html5 skilIcon"></i>
                </p>
                <img height="5px" width="100%" src="/img/line-1.png" alt="" />
              </div>
              <CardBody class="card-body">
                <CardTitle class="card-title">HTMl</CardTitle>
                <CardText class="card-text">
                  Lorem ipsum dolor sit amet.
                </CardText>
              </CardBody>
            </div>
          </Col>
          <Col>
            <div className="skillsCard">
              <div class="iconWrapper">
                <p class="myIcon">
                  <i class="fab fa-3x fa-css3-alt skilIcon"></i>
                </p>
                <img height="5px" width="100%" src="/img/line-1.png" alt="" />
              </div>
              <CardBody class="card-body">
                <CardTitle class="card-title">CSS</CardTitle>
                <CardText class="card-text">
                  Lorem ipsum dolor sit amet.
                </CardText>
              </CardBody>
            </div>
          </Col>
          <Col>
            <div className="skillsCard">
              <div class="iconWrapper">
                <p class="myIcon">
                  <i class="fab fa-3x fa-bootstrap skilIcon"></i>
                </p>
                <img height="5px" width="100%" src="/img/line-1.png" alt="" />
              </div>
              <CardBody class="card-body">
                <CardTitle class="card-title">JAVASCRIPT</CardTitle>
                <CardText class="card-text">
                  Lorem ipsum dolor sit amet.
                </CardText>
              </CardBody>
            </div>
          </Col>
          <Col>
            <div className="skillsCard">
              <div class="iconWrapper">
                <p class="myIcon">
                  <i class="fab fa-3x fa-html5 skilIcon"></i>
                </p>
                <img height="5px" width="100%" src="/img/line-1.png" alt="" />
              </div>
              <CardBody class="card-body">
                <CardTitle class="card-title">BOOTSTRAP</CardTitle>
                <CardText class="card-text">
                  Lorem ipsum dolor sit amet.
                </CardText>
              </CardBody>
            </div>
          </Col>
          <Col>
            <div className="skillsCard">
              <div class="iconWrapper">
                <p class="myIcon">
                  <i class="fab fa-3x fa-html5 skilIcon"></i>
                </p>
                <img height="5px" width="100%" src="/img/line-1.png" alt="" />
              </div>
              <CardBody class="card-body">
                <CardTitle class="card-title">TAILWIND</CardTitle>
                <CardText class="card-text">
                  Lorem ipsum dolor sit amet.
                </CardText>
              </CardBody>
            </div>
          </Col>
          <Col>
            <div className="skillsCard">
              <div class="iconWrapper">
                <p class="myIcon">
                  <i class="fab fa-3x fa-html5 skilIcon"></i>
                </p>
                <img height="5px" width="100%" src="/img/line-1.png" alt="" />
              </div>
              <CardBody class="card-body">
                <CardTitle class="card-title">MATERIAL CSS</CardTitle>
                <CardText class="card-text">
                  Lorem ipsum dolor sit amet.
                </CardText>
              </CardBody>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Skills;

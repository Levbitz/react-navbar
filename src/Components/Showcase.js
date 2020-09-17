import React from "react";

import { Container, Row, Col } from "reactstrap";

//import image
import ShowImg from "./img/about2.png";

//import css
import "./css/Showcase.css";
// import Example from "./Example";

function Showcase() {
  return (
    <div className="my__showcase">
      <Container className="showcase">
        <Row>
          <Col className="myshowCaseImg">
            <div className="showcaseImgWrapper">
              <img className="showcaseImage" src={ShowImg} alt="" />
            </div>
          </Col>
          <Col>
            <div className="showscaseContentWrapper">
              <h2>
                <span>Hi Am</span> <span className="tomato">Sarvan </span>
              </h2>
              <h4>Am a web Designer With Ten Year Expreience</h4>

              <div class="showcaseBtn">
                <button type="button" className="btn btn-light my__showcaseBtn">
                  VIEW MY WORK
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Showcase;

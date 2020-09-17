import React from "react";
import { Container, Row, Col } from "reactstrap";

const Example = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="3">.col-3</Col>
        <Col xs="3">.col-auto - variable width content</Col>
        <Col xs="3">.col-3</Col>
      </Row>
      <hr />
      <Row>
        <Col xs="6">.col-6</Col>
        <Col xs="6">.col-6</Col>
      </Row>
      <Row>
        <hr />
        <Col xs="6" sm="4">
          .col-6 .col-sm-4
        </Col>
        <Col xs="6" sm="4">
          .col-6 .col-sm-4
        </Col>
        <Col sm="6">.col-sm-4</Col>
      </Row>
    </Container>
  );
};

export default Example;

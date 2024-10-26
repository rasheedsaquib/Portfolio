import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

import {
  meta,
  worktimeline,
  skills,
} from "../../content_option";

export const Skills = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Skills | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Skills and Certifications</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h1 className="color_sec py-4">Skills</h1>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="service__title">{data.name}</h3>
                  <p className="">{data.language}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h1 className="color_sec py-4">Certifications</h1>
          </Col>
          <Col lg="7">
            {worktimeline.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.where}</h5>
                  <p className="">{data.Certifications}</p>
                  <p className="">{data.date}</p>
                </div>
                
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

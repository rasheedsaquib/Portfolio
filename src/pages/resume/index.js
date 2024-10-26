import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import downloadPDF from "../../assets/images/Resume.pdf";

import {
  meta,
  resume,
} from "../../content_option";

export const Resume = () => {
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
            <h1 className="display-4 mb-4">My Resume &nbsp;&nbsp;
            <Link to={downloadPDF} download="Resume.pdf" onClick={downloadPDF}>
                    <div id="button_h" className="ac_btn btn">
                      Download Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
            </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
          {resume.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
              </div>
            );
          })}

      </Container>
    </HelmetProvider>
  );
};

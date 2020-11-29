import React from "react";

import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <footer style={{ backgroundColor: '#2E2E37' }}
          className="pt-5 px-6 ml--5 footer mt-9"
          id="footer-main"
        >
          <Container>
          <Row className="justify-content-center">

            <Col lg="4">



                <div className="data">
                  <a href="/">
                    <i className="fab fa-facebook fa-2x" style={{ color: "#3b5998" }} />
                  </a>
                  <a href="/">
                    <i className="fab fa-instagram fa-2x ml-3" style={{ color: "#8a3ab9" }} />
                  </a>
                  <a href="/">
                    <i className="fab fa-twitter fa-2x ml-3" style={{ color: "#1da1f2" }} />
                  </a>
                  <a href="/" >
                    <i className="fab fa-linkedin fa-2x ml-3" style={{ color: "#1da1f2" }} />
                  </a>
                  <a href="/">
                    <i className="fab fa-whatsapp fa-2x ml-3" style={{ color: "#01DF3A" }} />
                  </a>
                  <a href="/">
                    <i className="far fa-envelope fa-2x ml-3" style={{ color: "#ffffff" }} />
                  </a>
                </div>

            </Col>
          </Row>

          </Container>
        </footer>
      </>
    );
  }
}

export default Login;

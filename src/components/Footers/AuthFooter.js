import React from "react";

import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <footer style={{ backgroundColor: '#2E2E37' }}
          className="pt-5 px-6 ml--5 footer"
          id="footer-main"
        >
          <Container>
          <Row className="justify-content-center">
            <Col lg="3">              
              <div style={{ fontSize: 13, textAlign: 'justify' }}
                className="ml-4"
              >
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, 
                nam no suscipit quaerendum. At nam minimum ponderum. Est audiam 
                animal molestiae te. Ex duo eripuit mentitum.                
              </div>
            </Col>
            <Col>
              <div className="mb-4 font-weight-bold ml-6">
                SOBRE NÓS
              </div>
              <Nav style={{ marginLeft: 60, color: '#FFF' }}>
                <NavItem>
                  <NavLink
                    href="#"
                  >
                    Sobre o Escholar
                    </NavLink>
                </NavItem>
                <div className="w-100" />
              </Nav>
            </Col>
            <Col lg="4">
              <div className="mb-4 font-weight-bold ml-5">
                NOSSAS MÍDIAS DIGITAIS
                </div>
              <Nav style={{ marginLeft: 35 }}>                
                <div className="w-100" />
                <NavItem>
                  <NavLink
                    href="/auth/chat"
                  >
                    Contato
                  </NavLink>

                </NavItem>
                <div className="w-100" />
                <NavItem>
                  <NavLink
                    href="https://www.gmail.com.br"
                    target="_blank"
                  >
                    <i class="far fa-envelope"></i>
                    &nbsp; apoio@escholar.com
                  </NavLink>
                </NavItem>
                <div className="w-100" />
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
                </div>
              </Nav>
            </Col>           
          </Row>
          <Row className="mb-1">
            <Col className="d-flex justify-content-center">
              <div
                style={{ fontSize: 13 }}
                className="text-center"
              >
                São José dos Campos - SP <br />
                Desenvolvido por <i class="far fa-copyright"></i> Escholar                
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

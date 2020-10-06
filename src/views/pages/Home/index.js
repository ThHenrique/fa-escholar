import React from 'react';

import { Container, Row, Col, Button, CardHeader, Card } from "reactstrap";

import AdminNavbar from '../../../components/Navbars/AdminNavbar'
import AuthFooter from "../../../components/Footers/AuthFooter.js";

export default function Home() {
  return (
    <>
      <Container fluid>
        <Row className="align-items-center pt-8 pb-8" style={{background: '#F3F6FA'}}>
          <Col md="6" >
            <Card style={{height: 512, width: 635, background: '#EFF3F9'}}/> 
          </Col>
          <Col md="6">
            <h3 className="text-primary mb-3">
              Sobre nós
            </h3>
            <h1 className="mb-3">
              E-SCHOLAR
            </h1>
            <div className="mb-5 h4 text-light ls-1">              
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
            </div>
            <Button color="primary" outline type="button">Contato</Button>
          </Col>
        </Row>
         
        <Col md="12" className="bg-secondary pr-8 pl-8">
          <h3>Disciplinas</h3>
          {Array(4).fill().map(() => (
            <Row className="pt-6 pb-6 align-items-center" >
              <Col md="4" >
                <div className="card-profile-image">
                  <img
                    alt="..."
                    className="square"
                    src={require("assets/img/theme/team-4-800x800.jpg")}
                  />
                </div>
              </Col>  
              <Col md="8" className="d-flex justify-content-around flex-column">
                <div className="text-justify">
                  <h2>Lingua Portuguesa Concordância e Pontuação</h2>
                </div>
                <Row className="d-flex justify-content-around mt-4">
                  <Col md="4">
                    <i className="ni ni-air-baloon text-blue"></i>
                    <h4 className="text-light">
                      Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.
                    </h4>
                  </Col>
                  <Col md="4">
                    <i className="ni ni-air-baloon text-blue"></i>
                    <h4 className="text-light">
                      Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.
                    </h4>
                  </Col>
                </Row>
              </Col> 
           </Row> 
          ))}          
        </Col>           
      </Container>
    </>
  )
}


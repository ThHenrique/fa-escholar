import React, { useState, useEffect } from "react";

import {
  Container, Row, Col, Button, Card, CardImg,
} from "reactstrap";

import { useHistory } from "react-router-dom";

import api from "../../../services/api"

export default function Home() {
  const [discipline, setDiscipline] = useState([]);
  const history = useHistory();

  const image = "https://www.enemaction.com.br/wp-content/themes/enem-action/assets/images/icon-disciplinas.png"

  async function getDiscipline() {
    const response = await api.get('discipline/index')
    setDiscipline(response.data)
  }

  useEffect(() => {
    getDiscipline()
  }, [])

  return (
    <>
      <Container fluid className="mb-5">
        <Row className="align-items-center pt-8 pb-8" style={{ background: "#F3F6FA" }}>
          <Col md={6} sm={12}>
            <div
              id="background"
              className={image ? "has-background" : ""}
              style={{
                backgroundImage: `url(${image})`,
                height: 412, width: 535,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Col>
          <Col md={6} sm={12}>
            <h3 className="text-primary mb-3">
              Sobre nós
            </h3>
            <h1 className="mb-3">
              E-SCHOLAR
            </h1>
            <div className="mb-5 h4 text-light ls-1">
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. At nam minimum ponderum.
              Est audiam animal molestiae te. Ex duo eripuit mentitum.
            </div>
            <Button color="primary" outline type="button">Contato</Button>
          </Col>
        </Row>

        <Col className="mt-6">
          <div style={{ marginLeft: 20, marginTop: 20 }}>
            <h1 style={{ color: "#828282", fontWeight: "bold", fontSize: 20 }}>
              Disciplinas
            </h1>
          </div>
          {discipline.map(discipline => (
            <>
              <Card
                key={discipline.id}
                className="pt-5 pb-5 mt-3 border-0 bg-transparent"
                onClick={() => history.push(`saleDiscipline/${discipline.id}`)}
                style={{ cursor: "pointer" }}
              >
                <Row className=" justify-content-center align-items-center">
                  <Col lg="3" md="6" className="d-flex justify-content-center">
                    <CardImg
                      id="background"
                      className={discipline.image ? "has-background" : ""}
                      style={{
                        backgroundImage: `url(${discipline.image})`,
                        width: 200,
                        height: 200,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </Col>
                  <Col lg="6" md="6">
                    <h2>{discipline.name}</h2>
                    <Row>
                      <Col>
                        <i className="fa fa-book text-blue" />
                        <h4 className="text-light">
                          {discipline.about}
                        </h4>
                      </Col>
                      <Col>
                        <i className="fa fa-pencil-alt text-blue" />
                        <h4 className="text-light">
                          {discipline.description}
                        </h4>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </>
          ))}
        </Col>
      </Container>
    </>
  );
}

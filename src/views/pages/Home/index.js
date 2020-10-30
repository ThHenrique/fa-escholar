import React, { useState, useEffect } from "react";

import {
  Container, Row, Col, Button, Card, CardImg,
} from "reactstrap";

import { useHistory } from "react-router-dom";

export default function Home() {
  const [array, setArray] = useState([]);

  const allowedState = [
    {
      id: 1, name: "Português: Pontuação", alunos: 59, lucro: 299.00, uri: "https://s3.amazonaws.com/midia.korntraducoes.com.br/wp-content/uploads/2018/06/14103621/Depositphotos_68180183_original.jpg",
    },
    {
      id: 2, name: "Matemática", alunos: 99, lucro: 475.00, uri: "https://sto-blog.s3.amazonaws.com/images/2018/06/13/matematica-o-guia-completo.jpg",
    },
    {
      id: 3, name: "Inglês", alunos: 159, lucro: 799.00, uri: "https://www.fapcom.edu.br/wp-content/uploads/2019/02/Dicas-para-melhorar-o-ingl%C3%AAs-1-750x500.jpeg",
    },
    {
      id: 2, name: "Hadware", alunos: 99, lucro: 475.00, uri: "https://i.ytimg.com/vi/IfpbpvP-FgU/maxresdefault.jpg",
    },
    {
      id: 3, name: "Lógica de programação", alunos: 159, lucro: 799.00, uri: "https://becode.com.br/wp-content/uploads/2016/06/Algoritmos-1.jpg",
    },
  ];

  useEffect(() => {
    setArray(allowedState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();
  return (
    <>
      <Container fluid className="mb-5">
        <Row className="align-items-center pt-8 pb-8" style={{ background: "#F3F6FA" }}>
          <Col md={6} style={{ background: "#EFF3F9" }} sm={12} />
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

        <Col>
          <div style={{ marginLeft: 20, marginTop: 20 }}>
            <h1 style={{ color: "#828282", fontWeight: "bold", fontSize: 20 }}>
              Disciplinas
            </h1>
          </div>
          {array.map((item) => (
            <>
              <Card
                key={item.id}
                className="pt-5 pb-5 mt-3 border-0 bg-transparent"
                onClick={(e) => history.push(e.id)}
                style={{ cursor: "pointer" }}
              >
                <Row className=" justify-content-center align-items-center">
                  <Col lg="3" md="6" className="d-flex justify-content-center">
                    <CardImg
                      id="background"
                      className={item.uri ? "has-background" : ""}
                      style={{
                        backgroundImage: `url(${item.uri})`,
                        width: 200,
                        height: 200,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </Col>
                  <Col lg="6" md="6">
                    <h2>{item.name}</h2>
                    <Row>
                      <Col>
                        <i className="fa fa-book text-blue" />
                        <h4 className="text-light">
                          Et has minim elitr intellegat.
                          Mea aeterno eleifend antiopam ad,
                          nam no suscipit quaerendum.
                        </h4>
                      </Col>
                      <Col>
                        <i className="fa fa-pencil-alt text-blue" />
                        <h4 className="text-light">
                          Et has minim elitr intellegat. Mea aeterno eleifend
                          antiopam ad, nam no suscipit quaerendum.
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

import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

import CardDiscipline from "../../../components/Utils/CardDiscipline";
import CardProfile from "../../../components/Utils/CardProfile";
import api from "../../../services/api"

// NÃO SUBIR (Feito de teste)

export default function MyDisciplines() {
  const [disciplines, setDisciplines] = useState([]);
  const username = localStorage.getItem('username');


  async function getDiscipline() {
    const {data} = await api.get("purchase/getHist")
    setDisciplines(data)
    console.log(data);
  }

  useEffect(() => {
    getDiscipline()
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg="3" md="6">
            <CardProfile username={username} />
          </Col>
          <Col lg="9">
            <Col md={4}>
              Minhas Disciplinas
              <FormGroup>
                <InputGroup>
                  <Input
                    placeholder="Pesquisar"
                    type="text"
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText><i className="fa fa-search" /></InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md="12">
              {disciplines.map(item => (
                <div className="card-deck">
                  <CardDiscipline
                    discipline={item}
                    image
                    mydiscipline
                  />
                </div>
              ))}
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

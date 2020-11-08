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
  const [w, setW] = useState("");
  const token = localStorage.getItem('token');

  async function getDiscipline() {
    const {data} = await api.get("purchase/getHist/1", {
      headers:{
        Authorization:`Bearer ${token}`
      }}
    )
    setDisciplines(data)
  }

  useEffect(() => {
    getDiscipline()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg="3" md="6">
            <CardProfile profile={disciplines} />
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
            <Col lg="8">
              {disciplines.map(item => (
                <Row>
                  <CardDiscipline discipline={item} />
                </Row>
              ))}
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

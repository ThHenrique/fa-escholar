import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Container,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
// import { Link } from "react-router-dom";

import CardProfile from "../../../components/Utils/CardProfile";
import CardDiscipline from "../../../components/Utils/CardDiscipline";
import api from "services/api";

export default function HistCompras() {
  const [discipline, setDiscipline] = useState([]);
  const username = localStorage.getItem('username');

  async function getHist(){
    const {data} = await api.get("purchase/getHist")
    setDiscipline(data)
    console.log(data);
  }

  useEffect(() => {
    getHist()
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg="3" md="6">
            <CardProfile username={username} />
          </Col>
          <Col lg="8" md="6">
            <Col md={4}>
              <big>Suas Compras</big>
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
            <Col>
              {discipline.map(item => (
                <div className="card-deck">
                  <CardDiscipline
                    discipline={item}
                    hist
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

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
import api from '../../../services/api'

export default function MyDiscipline() {
  const [displines, setDisplines] = useState([]);
  const [w, setW] = useState("");

  useEffect(() => {
    setW(window.innerWidth);
  }, []);

  useEffect(() => {
    (async () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIxLCJpYXQiOjE2MDQwMzA0ODksImV4cCI6MTYwNDg5NDQ4OX0.boUGnnJhkD-JoHg_JqNvJNqcM7YmNZAoXA712qMDjdA"

      const { data } = await api.get('purchase/index/1', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setDisplines(data.discipline);
    })()
  }, [])

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg="3" md="6">
            <CardProfile profile={displines} />
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
            <Row>
              {displines.map((item) => (
                <Col lg={w > 1245 ? "4" : "6"} className="mb-5">
                  <CardDiscipline discipline={item.discipline} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

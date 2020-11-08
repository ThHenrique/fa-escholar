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
  const [user, setUser] = useState([]);
  const [discipline, setDiscipline] = useState([]);
  const [w, setW] = useState("");

  async function getHist(){
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYwNDY4MjQwMSwiZXhwIjoxNjA1NTQ2NDAxfQ.N0LsXm5KOfJH1ZnmBtuqekCLwVw_smQ0QDeSss3oE0o"
    const {data} = await api.get("purchase/getHist/1", {
      headers:{
        Authorization:`Bearer ${token}`
      }}
    )
    setDiscipline(data)
  }

  const allowedState = [
    {
      id: 1, name: "Português: Pontuação", alunos: 59, lucro: 299.00, uri: "https://s3.amazonaws.com/midia.korntraducoes.com.br/wp-content/uploads/2018/06/14103621/Depositphotos_68180183_original.jpg", description: "Descrição do produto",
    },
    {
      id: 2, name: "Matemática", alunos: 99, lucro: 475.00, uri: "https://sto-blog.s3.amazonaws.com/images/2018/06/13/matematica-o-guia-completo.jpg", description: "Descrição do produto",
    },
    {
      id: 3, name: "Inglês", alunos: 159, lucro: 799.00, uri: "https://www.fapcom.edu.br/wp-content/uploads/2019/02/Dicas-para-melhorar-o-ingl%C3%AAs-1-750x500.jpeg", description: "Descrição do produto",
    },
    {
      id: 2, name: "Hadware", alunos: 99, lucro: 475.00, uri: "https://i.ytimg.com/vi/IfpbpvP-FgU/maxresdefault.jpg", description: "Descrição do produto",
    },
    {
      id: 3, name: "Lógica de programação", alunos: 159, lucro: 799.00, uri: "https://becode.com.br/wp-content/uploads/2016/06/Algoritmos-1.jpg", description: "Descrição do produto",
    },
  ];

  useEffect(() => {
    setUser(allowedState);
    setW(window.innerWidth);
    getHist()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg="3" md="6">
            <CardProfile profile={user} />
          </Col>
          <Col lg="8" md="6">
            <Col md={4}>
              Histórico de Compras
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
              {discipline.map(item => (
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

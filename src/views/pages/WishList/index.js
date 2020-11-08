import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button

} from "reactstrap";

import CardDiscipline from "../../../components/Utils/CardDiscipline";
import CardProfile from "../../../components/Utils/CardProfile";
import api from "../../../services/api"

export default function WishList() {
  const [disciplines, setDisciplines] = useState([]);
  const [w, setW] = useState("");
  const allowedState = [
    {
      id: 1, name: "Português: Pontuação", icon:"fa fa-heart", alunos: 59, lucro: 299.00, uri: "https://s3.amazonaws.com/midia.korntraducoes.com.br/wp-content/uploads/2018/06/14103621/Depositphotos_68180183_original.jpg",
    },
    {
      id: 2, name: "Matemática", icon:"fa fa-heart", alunos: 99, lucro: 475.00, uri: "https://sto-blog.s3.amazonaws.com/images/2018/06/13/matematica-o-guia-completo.jpg",
    },
    {
      id: 3, name: "Inglês", icon:"fa fa-heart", alunos: 159, lucro: 799.00, uri: "https://www.fapcom.edu.br/wp-content/uploads/2019/02/Dicas-para-melhorar-o-ingl%C3%AAs-1-750x500.jpeg",
    },
    {
      id: 2, name: "Hadware", icon:"fa fa-heart", alunos: 99, lucro: 475.00, uri: "https://i.ytimg.com/vi/IfpbpvP-FgU/maxresdefault.jpg",
    },
    {
      id: 3, name: "Lógica de programação", icon:"fa fa-heart", alunos: 159, lucro: 799.00, uri: "https://becode.com.br/wp-content/uploads/2016/06/Algoritmos-1.jpg",
    },
  ];

  async function getWishlist() {
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYwNDY4MjQwMSwiZXhwIjoxNjA1NTQ2NDAxfQ.N0LsXm5KOfJH1ZnmBtuqekCLwVw_smQ0QDeSss3oE0o"
    const {data} = await api.get("purchase/getHist/1", {
      headers:{
        Authorization:`Bearer ${token}`
      }}
    )
    setDisciplines(data)
  }

  useEffect(() => {
    getWishlist();
    setW(window.innerWidth);
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
            <Col md={6}>
              Lista de Desejo
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
                  <CardDiscipline
                    wishlist
                    discipline={item} />
                </Row>
              ))}
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

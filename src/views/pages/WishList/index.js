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
  CardImg
} from "reactstrap";

import { Link, useHistory } from "react-router-dom";

import CardDiscipline from "../../../components/Utils/CardDiscipline";
import CardProfile from "../../../components/Utils/CardProfile";
import api from "../../../services/api"

export default function WishList() {
  const [disciplines, setDisciplines] = useState([]);
  const username = localStorage.getItem('username');
  const image = "https://www.enemaction.com.br/wp-content/themes/enem-action/assets/images/icon-disciplinas.png"

  async function getWishlist() {
    const { data } = await api.get("client/wishlist/show")
    console.log(data);
    setDisciplines(data.wish_list)
  }

  useEffect(() => {
    getWishlist();
  }, []);
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg="3" md="6">
            <CardProfile username={username} />
          </Col>
          <Col lg="9">
            <Col md={6}>
              <big>Lista de Desejo</big>
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
              {disciplines.length > 0 ? (
                <>
                  <div className="card-deck">
                    <CardDiscipline
                      wishlist
                      about
                      image
                      discipline={disciplines}
                    />
                  </div>
                </>
              ):(
                <>
                  <Row>
                    <Col>
                      <big>
                        Que pena! Parece que você ainda não <br/> adicionou
                        nenhuma disciplina à sua lista de desejo. <br/><br/>
                        Faça isso agora mesmo!!! {' '}
                        <Link to="/home">Verificar</Link>
                      </big>
                    </Col>
                    <Col className="mt-5">
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
                  </Row>
                </>
              )}
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

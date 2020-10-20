import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Container,
  Col,
  Row,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav

} from "reactstrap";

export default function WishList() {

  return (
    <>
    <Container>
    <Navbar
          className="navbar-horizontal navbar-dark bg-primary mt-4"
          expand="lg"
        >
          <Container>
          <a
          className="avatar"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          <img alt="..." src={require("assets/img/theme/angular.jpg")} />
        </a>
            <button
              aria-controls="navbar-primary"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-primary"
              data-toggle="collapse"
              id="navbar-primary"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-primary">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/blue.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-primary"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-primary"
                      data-toggle="collapse"
                      id="navbar-primary"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto" navbar>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Minhas Disciplinas <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Lista de Desejo
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <NavLink
                    aria-expanded={false}
                    aria-haspopup={true}
                    data-toggle="dropdown"
                    href="#pablo"
                    id="navbar-primary_dropdown_1"
                    onClick={e => e.preventDefault()}
                    role="button"
                  >
                    Carrinho
                  </NavLink>
                  <DropdownMenu
                    aria-labelledby="navbar-primary_dropdown_1"
                    right
                  >
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Perfil
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
    </Container>
      <Container>
        <Row>
        <Col md={3}>
        <Card>
          <CardImg
            alt="..."
            src={require("assets/img/theme/react.jpg")}
            top
          />
        <Button color="secondary" outline type="button">
          Editar Perfil
        </Button>
        <Button color="secondary" outline type="button">
          Minhas Disciplinas
        </Button> <Button color="secondary" outline type="button">
          Histórico de Compras
        </Button>
        <Button color="secondary" outline type="button">
          Lista de Desejos
        </Button> 
          </Card>
        </Col>
        <Col md={8}>
          <Col md={4}>
          <FormGroup>
            <InputGroup
            >
              <Input
                placeholder="Pesquisar"
                type="text"
              />
              <InputGroupAddon addonType="append">
                <InputGroupText><i className="fa fa-search"></i></InputGroupText>
              </InputGroupAddon>
              <i md={12}
              className="fa fa-search">
              </i>
            </InputGroup>
          </FormGroup>
          </Col>
          <div className="card-deck row">
                <Card>
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/matematica-image.jpg")}
                    top
                  />
                  <CardBody>
                  <Button color="secondary" type="button">
          Ver Mais
        </Button>
                    <CardTitle>Matemática</CardTitle>
                    <CardText>
                      <small className="text-muted">Lógica</small>
                    </CardText>
                    <CardText>
                      Descrição da disciplina etc...
                    </CardText>
                    <CardText>
                      <small className="text-muted">R$ 000,00</small>
                    </CardText>
                  </CardBody>
                </Card>
                <Card>
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/port-image.jpg")}
                    top
                  />
                  <CardBody>
                  <Button color="secondary" type="button">
          Ver Mais
        </Button>
                    <CardTitle>Português</CardTitle>
                    <CardText>
                      <small className="text-muted">Pontuação e Concordância</small>
                    </CardText>
                    <CardText>
                      Descrição da disciplina etc...
                    </CardText>
                    <CardText>
                      <small className="text-muted">R$ 000,00</small>
                    </CardText>
                  </CardBody>
                </Card>
                <Card>
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/matematica-image.jpg")}
                    top
                  />
                  <CardBody>
                  <Button color="secondary" type="button">
          Ver Mais
        </Button>
                    <CardTitle>Matemática</CardTitle>
                    <CardText>
                      <small className="text-muted">Gráficos</small>
                    </CardText>
                    <CardText>
                      Descrição da disciplina etc...
                    </CardText>
                    <CardText>
                      <small className="text-muted">R$ 000,00</small>
                    </CardText>
                  </CardBody>
                </Card>
                <Card>
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/angular.jpg")}
                    top
                  />
                  <CardBody>
                  <Button color="secondary" type="button">
          Ver Mais
        </Button>
                    <CardTitle>Disciplina (Ex: Matemática)</CardTitle>
                    <CardText>
                      <small className="text-muted">Ex: Lógica</small>
                    </CardText>
                    <CardText>
                      Descrição da disciplina etc...
                    </CardText>
                    <CardText>
                      <small className="text-muted">R$ 000,00</small>
                    </CardText>
                  </CardBody>
                </Card> 
          </div>
        </Col>
        </Row>
      </Container>
    </>
  );
}

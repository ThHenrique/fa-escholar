import React, { useState } from "react";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Container,
    Col
  } from "reactstrap";



export default function login(){

    return (
        <>
             <Container>
                <Row className="justify-content-center">
                    <Col md={5}>
                        <Card className="bg-secondary shadow border-0">

                        <CardBody className="px-lg-5 py-lg-7">
                            <div className="text-center text-muted mb-4">
                            <big>Bem-vindo !</big>
                            </div>
                            <Form role="form">
                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                    <i className="ni ni-email-83" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Email" type="email" autoComplete="new-email"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                    <i className="ni ni-lock-circle-open" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Senha" type="password" autoComplete="new-password"/>
                                </InputGroup>
                            </FormGroup>
                            <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                className="custom-control-input"
                                id=" customCheckLogin"
                                type="checkbox"
                                />
                                <label
                                className="custom-control-label"
                                htmlFor=" customCheckLogin"
                                >
                                <span className="text-muted">Lembrar-me</span>
                                </label>
                            </div>
                            <div className="text-center">
                                <Button className="my-4" color="primary" type="button">
                                Entrar
                                </Button>
                            </div>
                            </Form>
                            <Row className="mt-3" >
                        <Col xs="6">
                            <a
                            className="text-gray"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            >
                            <medium>Esqueceu a senha?</medium>
                            </a>
                            <Row></Row>
                            <a
                            className="text-blue"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            >
                            <medium>Crie uma conta</medium>
                            </a>

                        </Col>

                        </Row>
                        </CardBody>
                        </Card>

                    </Col>
                </Row>
            </Container>



        </>
      );
}

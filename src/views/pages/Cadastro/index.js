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


export default function cadastro(){
    
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
                            <FormGroup>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-circle-08" />
                                        </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Nome" type="text" />
                                    </InputGroup>                         
                            </FormGroup>

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

                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                    <i className="ni ni-lock-circle-open" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Repetir Senha" type="password" autoComplete="new-password"/>
                                </InputGroup>
                            </FormGroup>

                            <div className="text-muted font-italic">
                                <small>
                                   Força da senha:{" "}
                                    <span className="text-success font-weight-700">Forte</span>
                                </small>
                            </div>
                                <Row className="my-4">
                                <Col xs="12">
                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                    <input
                                        className="custom-control-input"
                                        id="customCheckRegister"
                                        type="checkbox"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="customCheckRegister"
                                    >
                                        <span className="text-muted">
                                        Concordo com os{" "}
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            Termos de Privacidade
                                        </a>
                                        </span>
                                    </label>
                                    </div>
                                </Col>
                                </Row>
                            <div className="text-center">
                                <Button className="my-4" color="primary" type="button">
                                Cadastrar
                                </Button>
                            </div>
                            </Form>
                            <Row className="mt-3" > 
                        
                        
                        </Row>
                        </CardBody>
                        </Card>
                    
                    </Col>
                </Row>
            </Container>   



        </>
      );
}
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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

  import api from '../../../services/api'

export default function Cadastro(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = {
        name,
        email,
        password
      }

      if (password != confirmPassword) {
        setError('As senhas digitadas estão diferentes')
        return
      }
      const response = await api.post('clientAuth/signUp', data)
      const { token } = response.data;

      localStorage.setItem('token', token);
      history.push('/auth/home');

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container className='p-6'>
      <Row className="justify-content-center">
        <Col md={5}>
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-7">
              <div className="text-center text-muted mb-4">
                <big>Bem-vindo !</big>
              </div>
              <Form role="form" onSubmit={handleSubmit}>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <i className="ni ni-circle-08" />
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Nome"
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Senha"
                      type="password"
                      autoComplete="new-password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Repetir Senha"
                      type="password"
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>

                <div className="text-muted font-italic mb-2">
                  <small className="text-danger font-weight-400">{error?? ''}</small>
                </div>

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
                  <Button className="my-4" color="primary" type="submit">
                    Cadastrar
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

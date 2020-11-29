import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import {
  Alert,
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

import { Spinner } from 'react-activity';

import api from "../../../services/api";
import { isAuthenticated } from '../../../services/auth';

export default function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [remember, setRemember] = useState(false);
  const [validationForm, setValidationForm] = useState('');
  const [load, setLoad] = useState('ENTRAR');

  const history = useHistory();
  const authenticated = isAuthenticated();

  useEffect(() => {
    if ( authenticated ) {
      history.push('/');
    }
    const rememberActive = localStorage.getItem('remember') ? true : false;

    if(rememberActive) {
      setEmail(localStorage.getItem('email'));
    }
    setRemember(rememberActive);
  }, []);

  function handleCheckbox() {
    setRemember(!remember);
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoad(<Spinner color="#FFF" />);

    const data = {
      email,
      password
    }
    try {
      const response = await api.post('clientAuth/signIn', data)
      const { token } = response.data;

      if (remember) {
        localStorage.setItem('email', email);
        localStorage.setItem('remember', remember);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('remember');
      }
      localStorage.setItem('token', token);

      history.push('/');
    } catch (error) {
      console.log(error);
      setValidationForm('Email ou senha incorretos, tente novamente.');
      setLoad('ENTRAR');
    }

  }
  return (
    <>
      <Container className="p-6">
        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="bg-secondary shadow border-0">
              <CardBody className="px-lg-5 py-lg-7">
                <div className="text-center text-muted mb-4">
                  <big>Bem-vindo !</big>
                </div>
                { validationForm && (
                  <Alert color="danger">
                    {validationForm}
                  </Alert>
                )}
                <Form role="form" onSubmit={handleLogin}>
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
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckLogin"
                      type="checkbox"
                      checked={remember}
                      onClick={handleCheckbox}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckLogin"
                    >
                      <span className="text-muted">Lembrar-me</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <Button className="my-4" color="primary" type="submit">
                      {load}
                    </Button>
                  </div>
                </Form>
                <Row className="mt-3" >
                  <Col xs="6">
                    {/* <a
                      className="text-gray"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <medium>Esqueceu a senha?</medium>
                    </a> */}
                    <a
                      className="text-blue"
                      onClick={e => history.push('/auth/register')}
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
  )
}

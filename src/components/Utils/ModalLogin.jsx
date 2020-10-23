import React, { useState } from "react";
// reactstrap components

import { Spinner, Dots, Windmill } from "react-activity";
import {
  Button,
  Card,
  CardHeader,
  FormGroup,
  Form,
  FormFeedback,
  Input,
} from "reactstrap";

import api from "../../services/api";
import { get } from "lodash";

export default function ModalLogin({ path }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);
  const [validationPassword, setvalidationPassword] = useState(false);
  const [validationEmail, setvalidationEmail] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin() {
    setLoad(true);
    try {
      let response = await api.post(`/sessions`, { email, password });
      if (response.data) {
        localStorage.setItem("auth_id", response.data.user.id);
        localStorage.setItem("token", response.data.token.token);
        setTimeout(() => setLoad(false), 3000);

        path ? window.location.replace(path) : window.location.reload();
      }
    } catch (e) {
      setLoad(false);
      const errors = get(e, "response.data.0.message", []);
      const field = get(e, "response.data.0.field", []);
      const validation = get(e, "response.data.0.validation");

      if (validation === undefined) {
        setMessage("Email ou senha inseridos são invalidos!");
        setvalidationEmail(true);
        console.log(message);
        return;
      } else {
        setvalidationEmail(false);
      }

      if (field === "email" || field === "password") {
        if (field === "email") {
          setMessage(errors);
          setvalidationEmail(true);
        } else {
          setvalidationEmail(false);
        }

        if (field === "password") {
          setMessage(errors);
          setvalidationPassword(true);
        } else {
          setvalidationPassword(false);
        }
      }
    }
  }

  return (
    <>
      <div className="modal-body p-0">
        <Card className="bg-secondary shadow border-0">
          <CardHeader>
            <Form role="form">
              {validationEmail == false ? (
                <>
                  <FormGroup style={{ width: "100%" }}>
                    <Input
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="exampleEmail"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </FormGroup>
                </>
              ) : (
                <>
                  <FormGroup style={{ width: "100%" }}>
                    <Input
                      invalid
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="exampleEmail"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <FormFeedback>{message}</FormFeedback>
                  </FormGroup>
                </>
              )}

              {validationPassword == false ? (
                <>
                  <FormGroup style={{ width: "100%" }}>
                    <Input
                      placeholder="Senha"
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </FormGroup>
                </>
              ) : (
                <>
                  <FormGroup style={{ width: "100%" }}>
                    <Input
                      invalid
                      placeholder="Senha"
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <FormFeedback>{message}</FormFeedback>
                  </FormGroup>
                </>
              )}
              <div className="text-center">
                {load == false ? (
                  <button
                    onClick={() => handleLogin()}
                    className="button1"
                    type="button"
                  >
                    ACESSAR
                  </button>
                ) : (
                  <button
                    style={{ width: 115, maxHeight: 45 }}
                    className="button1"
                    type="button"
                  >
                    <Spinner color="#FFF" />
                  </button>
                )}
              </div>
              <div className="text-center my-4 mb--1">
                <a className="text-dark" href="/auth/Forgot">
                  <span style={{ color: "#828282", fontSize: 14 }}>
                    Esqueceu sua senha?
                  </span>
                </a>
              </div>
            </Form>
          </CardHeader>
          <div className="text-center mt-4">
            <a className="text-dark" href="/auth/register">
              <span style={{ color: "#828282", fontSize: 14 }}>
                Ainda não é membro?{" "}
              </span>
              <span style={{ color: "#F69740", fontSize: 14 }}>
                Criar nova conta
              </span>
            </a>
          </div>
        </Card>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";

import {
  Container, Row, Col, Button, Card, CardImg,
} from "reactstrap";

import { useHistory } from "react-router-dom";

export default function Home() {
  const [array, setArray] = useState([]);

  const allowedState = [
    {
      id: 1, name: "Língua Portuguesa - concordância e", alunos: 59, lucro: 299.00, uri: "https://s3.amazonaws.com/midia.korntraducoes.com.br/wp-content/uploads/2018/06/14103621/Depositphotos_68180183_original.jpg",
    },
    {
      id: 2, name: "Matemática", alunos: 99, lucro: 475.00, uri: "https://sto-blog.s3.amazonaws.com/images/2018/06/13/matematica-o-guia-completo.jpg",
    },
  ];

  useEffect(() => {
    setArray(allowedState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();
  return (
    <>
      <Container >
        <Row>
          <Col sm='8'>
            <Row>
              Linha 01
            </Row>
            <Row>
              Linha 02
            </Row>
          </Col>
          <Col sm='4'>
            <Row>
            é pra ser um quadro
            </Row>
            <Row className='d-flex justify-content-end'>
              <Button color="primary" outline type="button">
                Fazer o Checkout
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

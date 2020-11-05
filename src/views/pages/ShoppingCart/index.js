import React, { useState, useEffect } from "react";

import {
  Container, Row, Col, Button, Card, CardImg, CardBody, CardText, CardTitle
} from "reactstrap";

import { useHistory } from "react-router-dom";

export default function Home() {
  const [array, setArray] = useState([]);
  const [total, setTotal] = useState(0);

  const allowedState = [
    {
      id: 1, name: "Português", valor: 19.99, uri: "https://s3.amazonaws.com/midia.korntraducoes.com.br/wp-content/uploads/2018/06/14103621/Depositphotos_68180183_original.jpg",
    },
    {
      id: 2, name: "Matemática", valor: 22.99, uri: "https://sto-blog.s3.amazonaws.com/images/2018/06/13/matematica-o-guia-completo.jpg",
    },

    ];

  useEffect(() => {
    setArray(allowedState);
    allowedState.forEach(item => {
      setTotal(prevstate => prevstate += item.valor)
      console.log(item)
    } )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();
  return (
    <>
      <Container className="mb-8 mt-8">
        <Row className='d-flex justify-content-center align-items-center'>


        <Col md={9}>
          <Row className="justify-content-md-center mt-50">
            <h1>
              Items em seu carrinho
            </h1>
          </Row>
          {array.map((item) => (
            <>
              <Card
                key={item.id}
                className="pt-5 pb-5 mt-3 border-4"
                onClick={(e) => history.push(e.id)}
                style={{ cursor: "pointer" }}
              >
                <Row className=" justify-content-center align-items-center">
                  <Col lg="3" md="6" className="d-flex justify-content-center">
                    <CardImg
                      id="background"
                      className={item.uri ? "has-background" : ""}
                      style={{
                        backgroundImage: `url(${item.uri})`,
                        width: 100,
                        height: 100,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </Col>
                  <Col lg="6" md="6">
                    <h2>{item.name}</h2>
                    <Row>
                      <Col>
                        <h4 className="text-dark">
                         #{item.id}
                        </h4>
                      </Col>
                      <Col>
                        <h4 className="text-dark">
                          R${item.valor}
                        </h4>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </>
          ))}
        </Col>
        <Col md={3}>
        <Card className='p-3'>
          {array.map(item => (

            <>
              <CardTitle>{item.name}</CardTitle>
              <CardText>
                <small className="text-muted">R$ {item.valor}</small>
              </CardText>
            </>
          ))}

          <spam>Total: R$ {total}</spam>

        <Row  className="justify-content-center w-70 m-4">
          <Button color="primary" outline type="button">Fazer o check-out</Button>
        </Row>
          </Card>
        </Col>
        </Row>
      </Container>
    </>
  );
}

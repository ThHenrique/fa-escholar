// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";






// const history = useHistory();
// <Link to="/">
//     <span className={getActiveItem("/")}>
//       Página Inicial
//         </span>
//    </Link>
import React, { useState, useEffect } from "react";

import {
  Container, Row, Col, Button, Card, CardImg, CardBody, CardText, CardTitle, Input, Form, FormGroup, InputGroupText, InputGroupAddon
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
        <Row>
          <Col md={7} >
            <Card className='p-3 border-6'>
                <CardTitle className = 'text-dark'><h2>Finalizar compra</h2></CardTitle>
                  <Row className = 'text-dark ml-1 mb-3'>
                    Endereço de cobrança:
                  </Row>
                 <>
                  <div className="custom-control custom-radio mb-3">
                  <input
                   className="custom-control-input"
                  id="customRadio1"
                   name="customRadio"
                  type="radio"
                  />
                  <label className="custom-control-label" htmlFor="customRadio1">
                  Utilizar o endereço residencial
                 </label>
                 </div>
                 <div className="custom-control custom-radio">
                 <input
                 className="custom-control-input"
                 id="customRadio2"
                  name="customRadio"
                type="radio"
                />
                 <label className="custom-control-label mb-4" htmlFor="customRadio2">
                  Informar outro endereço
                 </label>
                  </div>
                  </>
                   <Row className = 'text-dark ml-1 mb-3 mt-3'>
                    Forma de pagamento:
                  </Row>
                  <>
                  <div className="custom-control custom-radio mb-3">
                   <input
                    className="custom-control-input"
                  id="customRadio3"
                  name="customRadio"
                 type="radio"
                />
                <label className="custom-control-label" htmlFor="customRadio3">
                 Boleto bancário
                 </label>
                </div>
                <div className="custom-control custom-radio">
               <input
              className="custom-control-input"
              id="customRadio4"
              name="customRadio"
              type="radio"
              />
              <label className="custom-control-label mb-2" htmlFor="customRadio4">
               Cartão de crédito
              </label>
              </div>
              </>
              <Card className = 'border-6 p-3 mt-3'>
                <form>
                  <Row>
                    <Col>
                    <Input
                    className= ' mb-2  mt-2'
                    placeholder='Número do cartão'
                    type='text'
                    />
                    </Col>
                    <Col>
                    <Input
                    className= 'mt-2 mb-2'
                    placeholder='CPF do titular'
                    type='text'
                    />
                    </Col>
                  </Row>
                    <Input
                    className= ' mb-2'
                    placeholder='Nome impresso no cartão'
                    type='text'
                    />
                  <Row>
                    <Col>
                    <Input
                    className= ' mb-2'
                    placeholder='Validade do cartão'
                    type='text'
                    />
                    </Col>
                    <Col>
                    <Input
                    className= ' mb-2 mr-2'
                    placeholder='Código de segurança'
                    type='text'
                    />
                    </Col>
                  </Row>
                  </form>

                    <Input type="select" className = ' mb-4'>
                     <option>Selecione o número de parcelas</option>
                    </Input>



                <div className="custom-control custom-checkbox mt-5">
          <input
            className="custom-control-input"
            id="customCheck1"
            type="checkbox"
          />
          <label className="custom-control-label mb-3 m-2" htmlFor="customCheck1">
            Lembrar deste cartão
          </label>
        </div>
              </Card>
            </Card>
          </Col>
          <Col md={5}>
            <Card className='p-3 border-6 w-70 m-4'>
              <CardTitle className = 'text-dark'><h2>Resumo</h2></CardTitle>
                <Row className = 'justify-content-center mt-5 mb-5'>

                  <h2><spam> Valor Total: R$ {total}</spam></h2>

                </Row>
                <Row className = 'justify-content-center'>
                  <h5>
                  Ao concluir a compra você concorda com os Termos de Serviço
                  </h5>
                </Row>
                <Row className="justify-content-center">
                  <Button color="primary" size = "lg" outline type="button">Finalizar compra</Button>
                </Row>
            </Card>
          </Col>
        </Row>
       </Container>
    </>
  );
}

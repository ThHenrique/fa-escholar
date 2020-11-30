import React, { useState, useEffect, useRef } from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardTitle,
  Input,
  Form
} from "reactstrap";

import { useHistory } from "react-router-dom";

import NumberFormat from "react-number-format";
import NotificationAlert from "react-notification-alert";

import api from "../../../services/api"

export default function Payment() {
  const [clientId, setClientId] = useState();
  const [disciplines, setDisciplines] = useState([]);
  const [total, setTotal] = useState(0);
  const [typePayment, setTypePayment] = useState('');
  const history = useHistory();

  const inputRef = useRef("notificationAlert");

  async function getShoppingCart() {
    const { data } = await api.get("client/shoppingCart/show")
    setDisciplines(data.shopping_cart)
    setClientId(data.id)
    getTotal(data.shopping_cart)
  }

  const getTotal = (prices) => {
    prices.forEach(discipline => {
      setTotal(prevState => prevState += discipline.price)
    })
  }

  const handlePayment = async () => {
    try {
      const list = [disciplines.map((id) => id.id)];

      const data = {
        disciplines: list,
        client_id: clientId,
        payment: typePayment
      }

      const response = await api.post('client/purchase/store', data)

      clearShoppingCart()


      setTimeout(history.push(`/auth/mydiscipline`), 3000)
    } catch (error) {
      notify("fas fa-times", "danger", "Erro!", "Ocorreu um erro ao efetuar compra.");

    }
  }

  const clearShoppingCart = async () => {
    try {
      await api.put(`/client/shoppingcart`, {
        shopping_cart: [null], // atualiza shopping_cart para null (vazio)
      });
      notify("fas fa-check", "success", "Sucesso! ", " Compra efetuada com Sucesso! ");

    } catch (error) {
      notify("fas fa-times", "danger", "Erro!", "Falha ao limpar carrinho");
    }
  }

  // const handleSubmit = useCallback(() => {
  //   (async () => {
  //     try {
  //       setLoading(true);
  //       const data = {
  //         vouncherCode: encodeURI(vouncherCode.replace(/^\s+|\s+$/g, '')),
  //       };
  //       const schema = Yup.object().shape({
  //         vouncherCode: Yup.string().required('Informe o Código do Cupom'),
  //       });
  //       await schema.validate(data, {
  //         abortEarly: false,
  //       });

  //       const {data: isVouncherFirstBuy} = await api.get(
  //         `/client/checkVouncherFirstBuy?vouncherCode=${data.vouncherCode}`,
  //       );

  //       if (isVouncherFirstBuy) {
  //         await api.get(`/client/verifyFirstBuy?orderPrice=${total}`);
  //       }

  //       const {data: vouncher} = await api.get(
  //         `client/verifyVouncherCode?vouncherCode=${
  //           data.vouncherCode
  //         }&butcheryId=${butcheryId}&orderPrice=${total}`,
  //       );

  //       setRebate(vouncher.value || (total * vouncher.percent) / 100);
  //       setObservation(vouncher.observation);
  //       setVouncherCodeError('');
  //       if (onVouncher) {
  //         onVouncher(vouncher);
  //       }
  //       setLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //       setLoading(false);

  //       if (REACT_NATIVE_ENV === 'production') {
  //         Sentry.setTag('api', 'put');
  //         Sentry.captureException(err);
  //       }

  //       if (err instanceof Yup.ValidationError) {
  //         err.inner.forEach(error => {
  //           switch (error.path) {
  //             case 'vouncherCode':
  //               setVouncherCodeError(error.message);
  //               break;
  //           }
  //         });
  //         return;
  //       }

  //       setRebate(0);
  //       setIsEntry(false);
  //       setVouncherCode('');
  //       setVouncherCodeError('');

  //       if (err.response && err.response.data) {
  //         console.log(err.response.data);
  //         const {message} = err.response.data;
  //         if (typeof message === 'string') {
  //           Alert.alert('Mensagem', message);
  //         }
  //       }
  //     }
  //   })();
  // }, [butcheryId, onVouncher, total, vouncherCode]);

  useEffect(() => {
    getShoppingCart();
  }, []);

  const notify = (icon, type, title, message) => {
    const options = {
      place: "tr",
      message: (
        <div className="alert-text">
          <span className="alert-title ml-2" data-notify="title">
            {" "}
            {title}
          </span>
          <span data-notify="message" className="ml-2">
            {message}
          </span>
        </div>
      ),
      type,
      icon,
      autoDismiss: 2,
    };
    inputRef.current.notificationAlert(options);
  };

  return (
    <Container className="mb-8 mt-8">
      <div className="rna-wrapper">
        <NotificationAlert ref={inputRef} />
      </div>
      <Row>
        <Col md={7} >
          <Card className='p-3 border-6'>
            <CardTitle className = 'text-dark'>
              <h2>Finalizar compra</h2>
            </CardTitle>
            {/* <Row className = 'text-dark ml-1 mb-3'>
              Endereço de cobrança:
            </Row>
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
            </div> */}
            <Row className='text-dark ml-1 mb-3 mt-3'>
              Forma de pagamento:
            </Row>
            <div className="custom-control custom-radio mb-3">
              <input
                className="custom-control-input"
                id="customRadio3"
                name="payment"
                value='Credit'
                type="radio"
                onChange={e => setTypePayment(e.target.value)}
              />
              <label className="custom-control-label" htmlFor="customRadio3">
                Cartão de Crédito
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                className="custom-control-input"
                id="customRadio4"
                name="payment"
                value='Debit'
                type="radio"
                onChange={e => setTypePayment(e.target.value)}
              />
              <label className="custom-control-label mb-2" htmlFor="customRadio4">
                Cartão de Débito
              </label>
            </div>
            <Card className = 'border-6 p-3 mt-3'>
              <Form>
                <Row>
                  <Col>
                    <NumberFormat
                      format="#### #### #### ####"
                      className="form-control mb-2"
                      placeholder="Número do Cartão"
                      id="example-number-input"
                    />
                  </Col>
                  <Col>
                    <NumberFormat
                      format="###.###.###-##"
                      className="form-control mb-2"
                      placeholder="CPF do titular"
                      id="example-number-input"
                      // value={CPF}
                      // onChange={e => setCpf(e.target.value)}
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
                    <NumberFormat
                      format="##/##"
                      className="form-control mb-2"
                      placeholder="Validade do cartão"
                      id="example-number-input"
                    />
                  </Col>
                  <Col>
                    <Input
                      maxLength={3}
                      className= ' mb-2 mr-2'
                      placeholder='Código de segurança'
                      type='text'
                    />
                  </Col>
                </Row>
              </Form>
              <Input type="select" className='mb-4'>
                <option>Selecione o número de parcelas</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
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
            <CardTitle className='text-dark text-center'>
              <h2>Resumo</h2>
            </CardTitle>
            <Row className='justify-content-center mt-2 mb-5'>
              <Col>
                <h2> Disciplinas: {disciplines.length} </h2>
                {disciplines.map(discipline => (
                  <h3>{discipline.name}</h3>
                ))}
              </Col>
              <Col>
                <h2> Valor Total: </h2>
                <h3 className="text-green">
                  {total.toLocaleString('pt-BR',
                    { style: 'currency', currency: 'BRL' }
                  )}
                </h3>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Button
                color="primary"
                size="lg"
                outline
                type="button"
                onClick={() => handlePayment()}
              >
                Finalizar compra
              </Button>
            </Row>
            <Row className='p-3'>
              <h5 className='text-center'>
                Ao concluir a compra você concorda com os Termos de Serviço
              </h5>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

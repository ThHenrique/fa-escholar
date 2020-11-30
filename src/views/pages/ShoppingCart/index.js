import React, { useState, useEffect } from "react";

import {
  Container, Row, Col, Button, Card, CardImg, CardBody, CardText, CardTitle, Input
} from "reactstrap";

import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import api from "../../../services/api"

export default function ShoppingCart() {
  const [disciplines, setDisciplines] = useState([]);
  const [total, setTotal] = useState(0);
  const [coupon, setCoupon] = useState('');
  const [observation, setObservation] = useState('');
  const [discountCodeError, setDiscountCodeError] = useState('');
  const [rebate, setRebate] = useState(0);

  const image = "https://www.tacticalgear.com.br/skin/frontend/base/default/images/empty-shopping-cart-icon.png"
  const history = useHistory();

  async function getShoppingCart() {
    const { data } = await api.get("client/shoppingCart/show")
    setDisciplines(data.shopping_cart)
    getTotal(data.shopping_cart)
  }

  const getTotal = (prices) => {
    prices.forEach(discipline => {
      setTotal(prevState => prevState += discipline.price)
    })
  }

  const handleCoupon = async (e) => {
    try {
      const data = {
        discountCode: encodeURI(coupon.replace(/^\s+|\s+$/g, '')),
      };

      const {data: isDiscountFirstBuy} = await api.get(
        `/client/checkDiscountFirstBuy?discountCode=${data.discountCode}`,
      );

      if (isDiscountFirstBuy) {
        await api.get(`/client/verifyFirstBuy`);
      }

      const {data: discount} = await api.get(
        `client/verifyDiscountCode?discountCode=${
          data.discountCode
        }`,
      );
        console.log(discount);
      setRebate(discount.value || (total * discount.percent) / 100);
      setObservation(discount.observation);
      setDiscountCodeError('');

    } catch (err) {
      console.log(err);
    }

    setRebate(0);
    setCoupon('');
    setDiscountCodeError('');
  }

  useEffect(() => {
    getShoppingCart();
  }, []);

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
          {disciplines.length > 0 ? (
            <>
              {disciplines.map((item) => (
                <>
                  <Card
                    key={item.id}
                    className="pt-5 pb-5 mt-3 border-4"
                    onClick={(e) => history.push(`saleDiscipline/${item.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <Row className=" justify-content-center align-items-center">
                      <Col lg="3" md="6" className="d-flex justify-content-center">
                        <CardImg
                          id="background"
                          className={item.image ? "has-background" : ""}
                          style={{
                            backgroundImage: `url(${item.image})`,
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
                            <h4 className="text-green">
                             {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </h4>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </>
              ))}
            </>
          ):(
            <>
              <div
                id="background"
                style={{
                  backgroundImage: `url(${image})`,
                  height: 212, width: 335,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <Col className="mt-5 text-center text-black-50">
                <big>
                  Que pena! Seu carrinho está vazio
                  Adicione agora mesmo! {' '}
                  <Link to="/home">Ir</Link>
                </big>
              </Col>
            </>
          )}
        </Col>
        <Col md={3}>
        <Card className='p-3'>
          {disciplines.map(item => (
            <>
              <CardTitle>{item.name}</CardTitle>
              <CardText>
                <small className="text-muted">
                  {item.price.toLocaleString('pt-BR',
                    { style: 'currency', currency: 'BRL' })
                  }
                </small>
              </CardText>
            </>
          ))}
          {rebate == 0 ? (
            <span>Total: {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          ):(
            <span>Total:
              {(total - rebate).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          )}
          <CardText className="mt-3">Cupom de desconto </CardText>
          <Input
            className='mb-2'
            placeholder='Adicione o cupom'
            type='text'
            value={coupon}
            onChange={e => setCoupon(e.target.value)}
          />
          <Button
            className="btn-icon btn-3"
            size="sm"
            color="primary"
            type="button"
            onClick={() => handleCoupon()}
            >
              <span className="btn-inner--icon">
                <i className="fa fa-search mr-2" />
                Verificar
              </span>
          </Button>


            <Row className="justify-content-center m-4">
              <Button
                color="primary"
                outline
                type="button"
                disabled={disciplines.length == 0}
                onClick={() => history.push('/auth/payment')}
              >
                Realizar Pagamento
              </Button>
            </Row>
          </Card>
        </Col>
        </Row>
      </Container>
    </>
  );
}

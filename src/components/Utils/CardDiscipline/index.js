import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Row, Col, Card, CardImg, CardBody, CardFooter, Button
} from "reactstrap";

const CardDiscipline = ({
  discipline,
  image,
  wishlist,
  about,
  mydiscipline,
  hist
}) => {
  const history = useHistory();

  return (
    <>
      {discipline.map(discipline => (
        <Col className="mb-3">
          <Card
            className="Card shadow-sm center"
            style={{ cursor: "pointer"}}
            onClick={() => history.push(`/auth/saleDiscipline/${discipline.discipline_id?? discipline.id}`)}
          >
            {discipline.discipline_id}
            {image && (
              <CardImg
                id="background"
                className={discipline.image ? "has-background" : ""}
                style={{
                  backgroundImage: `url(${discipline.image})`,
                  height: 200,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}

            <CardBody
              className="text text-left"
            >
              {/* <div style={{ height: 28 }} /> */}
              <Row>
                <Col>
                  <big
                    className="h4"
                    style={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    {discipline.name}
                  </big>
                </Col>
                {wishlist && (
                  <Col>
                    <i className="fa fa-heart text-danger">
                    </i>
                  </Col>
                )}
              </Row>
              {hist && (
                <Row>
                  <Col>
                    <p className="h4"
                      style={{
                        fontWeight: "400",
                        color: "#205FE5"
                      }}
                    >
                      ID da compra: #{discipline.purchase_id}
                    </p>
                  </Col>
                </Row>
              )}
              {mydiscipline  && (
                <Row>
                  <Col>
                    <p className="h4"
                      style={{
                        fontWeight: "400",
                      }}
                    >
                      {discipline.description}
                    </p>
                  </Col>
                </Row>
              )}
              {!wishlist && (
                <Row style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p className="h4 w-100">
                    <span style={{ color: "#205FE5" }}>Valor: </span>
                  </p>
                  <span mt="2" mb="2" style={{ fontWeight: "bold", fontSize: 18 }}>
                    {discipline.price.toLocaleString('pt-BR',
                      { style: 'currency', currency: 'BRL' })
                    }
                  </span>
                </Row>
              )}

              {about && (
                <span>
                  {discipline.about}
                </span>
              )}
            </CardBody>
            {wishlist && (
              <CardFooter
                className="small text-center mt-5"
              >
                <Row style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                  <Link to="/">
                    <Button color="primary">
                        Ver Mais
                    </Button>
                  </Link>
                  <span>
                    {discipline.price.toLocaleString('pt-BR',
                      { style: 'currency', currency: 'BRL' })
                    }
                  </span>
                </Row>
              </CardFooter>
            )}
          </Card>
        </Col>
      ))}
    </>
  );
};

export default CardDiscipline;

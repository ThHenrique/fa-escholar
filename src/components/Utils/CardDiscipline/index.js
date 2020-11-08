import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Row, Col, Card, CardImg, CardBody, CardFooter, Button
} from "reactstrap";

const CardDiscipline = ({ discipline, premium, icon, wishlist, about }) => {
  const history = useHistory();

  async function handleOpenAd(id) {
    try {
      history.push(premium ? `/auth/payment/${premium}/${id}` : `/auth/details/${id}`);
    } catch (err) {
      console.error(err);
    }
  }
  const [w, setW] = useState("");

  useEffect(() => {
    console.log(discipline)
    setW(window.innerWidth);
  }, []);

  return (

    <>
      {discipline.map(discipline => (
        <Col>
          <Card
            className="Card shadow-sm center"
            style={{ aspectRatio: "16:10", cursor: "pointer" }}
          >
            <CardImg
              id="background"
              className={discipline.uri ? "has-background" : ""}
              style={{
                backgroundImage: `url(${discipline.uri})`,
                height: 200,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <CardBody
              className="text text-left mb--5"
              onClick={() => handleOpenAd(discipline.id)}
            >
              <div style={{ height: 28 }} />
              <Row>
                <Col>
                  <p
                    className="h4"
                    style={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    {discipline.name}
                  </p>
                </Col>
                {wishlist && (
                  <Col>
                    <i className="fa fa-heart text-danger">
                    </i>
                  </Col>
                )}
              </Row>
              <Row>
                <Col>
                  <p
                    className="h4"
                    style={{
                      fontWeight: "400",
                    }}
                  >
                    {discipline.description}
                  </p>
                </Col>
              </Row>
              <Row style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p className="h4 w-100">
                  <span style={{ color: "#205FE5" }}>Valor: </span>
                </p>
                <span mt="2" mb="2" style={{ fontWeight: "bold", fontSize: 18 }}>
                  R$
                  {' '}
                  {discipline.price}
                </span>
              </Row>
              {about && (
                <span>
                  Texto super foda que tem quec caspi
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
                    {discipline.price}
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

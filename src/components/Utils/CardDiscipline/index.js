import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Row, Col, Card, CardImg, CardBody, CardFooter,
} from "reactstrap";

const CardDiscipline = ({ discipline, premium }) => {
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
    setW(window.innerWidth);
  }, []);

  return (
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
        style={{ height: "51%" }}
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
            {" "}
            {(234.78).toLocaleString("pt-br", { minimumFractionDigits: 0 })}
          </span>
        </Row>
      </CardBody>
      <CardFooter
        className="small text-center mt-5"
        style={{ height: 30 }}
      >
        <Link to="/">
          Ver mais
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardDiscipline;

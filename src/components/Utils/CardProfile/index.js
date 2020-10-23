import React from "react";

import {
  Col, Card, CardBody, CardHeader, CardText,
} from "reactstrap";

import { Link } from "react-router-dom";

const CardProfile = ({ profile }) => (
  <Card>
    <CardHeader className="mb-2">
      <center>
        <div
          style={{
            width: 200,
            height: 200,
            backgroundImage: `url(${
              profile.uri
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "50%",
          }}
        />
      </center>
      <div
        className="mt-3"
        style={{
          cursor: "pointer",
          fontSize: 12,
          fontWeight: "600",
        }}
      />
    </CardHeader>

    <Col lg="12" className="justify-content-end text text-justify">
      <CardBody className="mt--3">
        <CardText className="px-lg-1">
          <div className="mt-4">
            <i className="ni ni-circle-08 mr-2 text-blue" />
            <Link
              style={{ cursor: "pointer" }}
              to="/auth/mydiscipline"
            >
              <span className="text-dark">Editar Perfil</span>
            </Link>
            <br />
            <Link to="/auth/mydiscipline">
              <i className="ni ni-bullet-list-67 mr-2 text-blue" />
              <span className="text-dark">Minhas Disciplinas</span>
            </Link>
            <br />
            <Link
              style={{ cursor: "pointer" }}
              to="/auth/hist"
            >
              <i className="ni ni-notification-70 mr-2 text-blue" />
              <span className="text-dark">Histórico de Compras</span>
            </Link>
            <br />
            <Link
              style={{ cursor: "pointer" }}
              to="/auth/wishlist"
            >
              <i className="ni ni-favourite-28 mr-2 text-blue" />
              <span className="text-dark">Lista de Desejos</span>
            </Link>
          </div>
        </CardText>
      </CardBody>
    </Col>
  </Card>
);

export default CardProfile;

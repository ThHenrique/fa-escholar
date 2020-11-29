import React from "react";

import {
  Col, Card, CardBody, CardHeader, CardText,
} from "reactstrap";

import { Link } from "react-router-dom";

const CardProfile = ({ username }) => (
  <Card>
    <CardHeader className="mb-2 ">
      <Col
        className="bg-gradient-info rounded-circle img-center shadow shadow-lg--hover
          d-flex justify-content-center align-items-center
        "
        style={{ width: "140px", height: "140px" }}
      >
        <big className="text-white" style={{ textTransform: 'uppercase'}}>
          {username[0]?? '...'}
          {username[1]?? ''}
        </big>
      </Col>
    </CardHeader>

    <Col lg="12">
      <CardBody className="mt--3">
        <CardText>
          <div className="mt-4">
            <i className="ni ni-circle-08 mr-2 text-blue" />
            <Link
              style={{ cursor: "pointer" }}
              to="/auth/profile"
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
              <span className="text-dark text-left">Compras Anteriores</span>
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

import React, {useState, useEffect} from 'react';

import {
  Container,
  Row,
  Col,
  Button,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Card,
  }
from "reactstrap";

import AdminNavbar from '../../../components/Navbars/AdminNavbar'
import AuthFooter from "../../../components/Footers/AuthFooter.js";
import api from "../../../services/api"

export default function SaleDiscipline({ match }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [about, setAbout] = useState('')
  const [objectives, setObjectives] = useState('')
  const [session, setSession] = useState([])

  const getDiscipline = async () => {
    try {
      const id = match.params.id;
      const { data } = await api.get(`discipline/show/${id}`)
      setName(data.name)
      setDescription(data.description)
      setAbout(data.about)
      setObjectives(data.objectives)
      setSession(data.session)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDiscipline()
  }, [])

  return (
    <>
      <Container fluid>
        <Row className="align-items-center pt-8 pb-8" style={{background: '#F3F6FA'}}>
          <Col md="6" >
              <Card style={{height: 512, width: 635, background: '#EFF3F9'}}/>
          </Col>
          <Col md="6">
              <h3 className="text-primary mb-3">
              DISCIPLINA
              </h3>
              <h1 className="mb-3">
                {name}
              </h1>
              <div className="mb-5 h4 text-light ls-1">
                {description}
              </div>
              <Button color="primary" outline type="button">ADICIONAR AO CARRINHO</Button>
              <Button color="primary" outline type="button">COMPRE AGORA</Button>
          </Col>
        </Row>
        <Col md="12" className="bg-secondary pr-5 pl-7">
          <h2>SOBRE A DISCIPLINA</h2>
            <Row className="pt-5 pb-5 align-items-center">
              <Col md="12" className="bg-secondary pr-5 pl-4">
                <h5 className="text-black">
                  {about}
                </h5>
              </Col>
            </Row>
        </Col>
        <Col md="12" className="bg-secondary pr-5 pl-7">
          <h2>OBJETIVOS</h2>
          <Row className="pt-3 pb-5 align-items-center">
            <Col md="12" className="bg-secondary pr-5 pl-4">
              <h5 className="text-light-black">
                {objectives}
              </h5>
            </Col>
          </Row>
        </Col>
        <Col md="12" className="bg-secondary pr-5 pl-7">
          <h2>CONTEÚDO</h2>
          <Row className="pt-3 pb-7 align-items-center">
            <ListGroup>
              {session.map(session => (
                <ListGroupItem>{session.name}</ListGroupItem>
              ))}
            </ListGroup>
          </Row>
        </Col>
        {/* <Row className="pt-2 pb-4 align-items-center">
          <Col md="12" className="bg-secondary pr-5 pl-7">
            <h3>Avaliações do Cliente</h3>
          </Col>
        </Row>
        <Row>
          <Col md="12" className="bg-secondary pr-5 pl-7">
          <h4>
              nome cliente  ______ ⭐⭐⭐⭐⭐
          </h4>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel metus id nibh venenatis dapibus.
            Nam at feugiat nisl
          </Col>
        </Row> */}
      </Container>
    </>
  )
}









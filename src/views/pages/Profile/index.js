import React, {useEffect, useState} from 'react'

import {
    Container,
    Col,
    Row,
    Button,
    Input,
    Form
} from 'reactstrap'

import CardProfile from '../../../components/Utils/CardProfile'

export default function Profile (){
  const [displines, setDisplines] = useState([]);
  const allowedState = [
    {
      id: 1, name: "Português: Pontuação", alunos: 59, lucro: 299.00, uri: "https://s3.amazonaws.com/midia.korntraducoes.com.br/wp-content/uploads/2018/06/14103621/Depositphotos_68180183_original.jpg",
    },
    {
      id: 2, name: "Matemática", alunos: 99, lucro: 475.00, uri: "https://sto-blog.s3.amazonaws.com/images/2018/06/13/matematica-o-guia-completo.jpg",
    },
    {
      id: 3, name: "Inglês", alunos: 159, lucro: 799.00, uri: "https://www.fapcom.edu.br/wp-content/uploads/2019/02/Dicas-para-melhorar-o-ingl%C3%AAs-1-750x500.jpeg",
    },
    {
      id: 2, name: "Hadware", alunos: 99, lucro: 475.00, uri: "https://i.ytimg.com/vi/IfpbpvP-FgU/maxresdefault.jpg",
    },
    {
      id: 3, name: "Lógica de programação", alunos: 159, lucro: 799.00, uri: "https://becode.com.br/wp-content/uploads/2016/06/Algoritmos-1.jpg",
    },
  ];

  useEffect(() => {
    setDisplines(allowedState);
  }, []);
    return (
        <Container className="mt-3">
          <Row>
            <Col lg="3" md="4">
              <CardProfile profile={displines} />
            </Col>
            <Col md={8} className="d-flex justify-content-center">
                <form>
                  <h3 className='text-dark m-1'>
                    Dados Pessoais
                  </h3>
                    <Input
                      className='mb-2'
                      placeholder='Nome Completo'
                      type='text'
                     />
                    <Input
                      className= 'mb-2'
                      placeholder='Como deseja ser chamado(a)'
                      type='text'
                     />
                    <Input maxLength='14'
                      className= 'mb-2'
                      placeholder='CPF'
                      type='text'
                      />
                    <Row>
                      <Col>
                        <Input
                          className= 'mb-2'
                          placeholder='Data de nascimento'
                          type='date'
                        />
                      </Col>
                      <Col>
                        <Input maxLength='14'
                          className= 'mb-2'
                          placeholder='Telefone/Whatsapp'
                          type='tel'
                         />
                      </Col>
                    </Row>
                    <Input
                      className= 'mb-2'
                      placeholder='E-mail'
                      type='email'
                      />
                    <Input
                      className= 'mb-2'
                      placeholder='Rua'
                      type='text'
                      />
                     <Row>
                      <Col>
                        <Input
                          className= 'mb-2'
                          placeholder='Número'
                          type='text'
                        />
                      </Col>
                      <Col>
                        <Input
                          className= 'mb-2'
                          placeholder='Complemento/Bl/Apto'
                          type='text'
                         />
                      </Col>
                    </Row>
                    <Input
                      className= 'mb-2'
                      placeholder='Bairro'
                      type='text'
                      />
                    <Input
                      className= 'mb-2'
                      placeholder='Cidade'
                      type='text'
                      />
                    <Row>
                      <Col>
                        <Input maxLength='10'
                          className= 'mb-2'
                          placeholder='CEP'
                          type='text'
                        />
                      </Col>
                      <Col>
                        <Input
                          className= 'mb-2'
                          placeholder='Estado'
                          type='text'
                         />
                      </Col>
                    </Row>
                    <Col className='d-flex justify-content-end m-4'>
                      <Button color="primary" outline type="button">
                          Salvar Alterações
                      </Button>
                    </Col>
                </form>
            </Col>
          </Row>
        </Container>
    )
}

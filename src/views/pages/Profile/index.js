import React, {useEffect, useState} from 'react'

import {
    Container,
    Col,
    Row,
    Button,
    Input,
    Form
} from 'reactstrap'

import api from '../../../services/api'

import CardProfile from '../../../components/Utils/CardProfile'

export default function Profile (){
  const [displines, setDisplines] = useState([]);
  const [name, setName] = useState('')
  const [socialName, setSocialname] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [birthday, setBirthday] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [complement, setComplement] = useState('')
  const [CPF, setCpf] = useState('')
  const [district, setDistrict] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')


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

  async function getUser() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYwNDY3OTE3NywiZXhwIjoxNjA1NTQzMTc3fQ.MFgNCF8iT3nsNF2j1OWv0F78HqONIsbJ20D4WC92By0'
    const response = await api.get('clientAuth/getUser', {
      headers: {
        Authorization: `Bearer ${token}`,
      },

    })
    console.log(response.data)
    setName(response.data.name)
    setCity(response.data.city)
    // setSocialname(response.data.Socialname)
    setStreet(response.data.street)
    setBirthday(response.data.birthday)
    setCellphone(response.data.cellphone)
    setComplement(response.data.complement)
    setCpf(response.data.cpf)
    setDistrict(response.data.district)
    setEmail(response.data.email)
    setNumber(response.data.number)
    setState(response.data.state)
    setZipCode(response.data.zip_code)
  }

  async function handleUpdate(e){
    e.preventDefault()

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYwNDY3OTE3NywiZXhwIjoxNjA1NTQzMTc3fQ.MFgNCF8iT3nsNF2j1OWv0F78HqONIsbJ20D4WC92By0'

    const data = {
      name,
      city,
      // street,
      birthday,
      cellphone,
      complement,
      cpf: CPF,
      zip_code: zipCode,
      district,
      number,
      state

    }
    const response = await api.put('clientAuth/update/1', data, {

      headers: {
        Authorization: `Bearer ${token}`,
      },

    })

    console.log(response.data)
  }

  useEffect(() => {
    setDisplines(allowedState);
    getUser()
  }, []);
    return (
        <Container className="mt-3">
          <Row>
            <Col lg="3" md="4">
              <CardProfile profile={displines} />
            </Col>
            <Col md={8} className="d-flex justify-content-center">
                <form onSubmit={handleUpdate}>
                  <h3 className='text-dark m-1'>
                    Dados Pessoais
                  </h3>
                    <Input
                      className='mb-2'
                      placeholder='Nome Completo'
                      type='text'
                      value={name}
                      onChange={e => setName(e.target.value)}
                     />
                    <Input
                      className= 'mb-2'
                      placeholder='Como deseja ser chamado(a)'
                      type='text'
                      value={socialName}
                      onChange={e => setSocialname(e.target.value)}
                     />
                    <Input maxLength='14'
                      className= 'mb-2'
                      placeholder='CPF'
                      type='text'
                      value={CPF}
                      onChange={e => setCpf(e.target.value)}
                      />
                    <Row>
                      <Col>
                        <Input
                          className= 'mb-2'
                          placeholder='Data de nascimento'
                          type='date'
                          value={birthday}
                          onChange={e => setBirthday(e.target.value)}
                        />
                      </Col>
                      <Col>
                        <Input maxLength='14'
                          className= 'mb-2'
                          placeholder='Telefone/Whatsapp'
                          type='tel'
                          value={cellphone}
                          onChange={e => setCellphone(e.target.value)}
                         />
                      </Col>
                    </Row>
                    <Input
                      className= 'mb-2'
                      placeholder='E-mail'
                      type='email'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      />
                    <Input
                      className= 'mb-2'
                      placeholder='Rua'
                      type='text'
                      value={street}
                      onChange={e => setStreet(e.target.value)}
                      />
                     <Row>
                      <Col>
                        <Input
                          className= 'mb-2'
                          placeholder='Número'
                          type='text'
                          value={number}
                          onChange={e => setNumber(e.target.value)}
                        />
                      </Col>
                      <Col>
                        <Input
                          className= 'mb-2'
                          placeholder='Complemento/Bl/Apto'
                          type='text'
                          value={complement}
                          onChange={e => setComplement(e.target.value)}
                         />
                      </Col>
                    </Row>
                    <Input
                      className= 'mb-2'
                      placeholder='Bairro'
                      type='text'
                      value={district}
                      onChange={e => setDistrict(e.target.value)}
                      />
                    <Input
                      className= 'mb-2'
                      placeholder='Cidade'
                      type='text'
                      value={city}
                      onChange={e => setCity(e.target.value)}
                      />
                    <Row>
                      <Col>
                        <Input maxLength='10'
                          className= 'mb-2'
                          placeholder='CEP'
                          type='text'
                          value={zipCode}
                          onChange={e => setZipCode(e.target.value)}
                        />
                      </Col>
                      <Col>
                        <Input
                          className= 'mb-2'
                          placeholder='Estado'
                          type='text'
                          value={state}
                          onChange={e => setState(e.target.value)}
                         />
                      </Col>
                    </Row>
                    <Col className='d-flex justify-content-end m-4'>
                      <Button color="primary" outline type="submit">
                          Salvar Alterações
                      </Button>
                    </Col>
                </form>
            </Col>
          </Row>
        </Container>
    )
}

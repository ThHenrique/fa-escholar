import React, {useEffect, useState, useRef} from 'react'

import {
    Container,
    Col,
    Row,
    Button,
    Input,
    Form,
    Alert
} from 'reactstrap'

import NumberFormat from "react-number-format";
import NotificationAlert from "react-notification-alert";

import api from '../../../services/api'
import apiCep from '../../../services/cep';

import CardProfile from '../../../components/Utils/CardProfile'

export default function Profile (){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [CPF, setCpf] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [birthday, setBirthday] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [district, setDistrict] = useState('')
  const [complement, setComplement] = useState('')
  const [number, setNumber] = useState('')
  const [state, setState] = useState('')
  const [zipCodeError, setZipCodeError] = useState(false)
  const [cityError, setCityError] = useState('')
  const [streetError, setStreetError] = useState('')
  const [districtError, setDistrictError] = useState('')
  const [complementError, setComplementError] = useState('')
  const [numberError, setNumberError] = useState('')
  const [stateError, setStateError] = useState('')

  const username = localStorage.getItem('username');

  const inputRef = useRef("notificationAlert");

  useEffect(() => {
    getUser()
  }, []);

  async function getUser() {
    const response = await api.get('clientAuth/getUser')
    setName(response.data.name)
    setCity(response.data.city)
    setStreet(response.data.address)
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

    try {
      const data = {
        name,
        city,
        address: street,
        birthday,
        cellphone,
        complement,
        cpf: CPF,
        zip_code: zipCode,
        district,
        number,
        state
      }
      await api.put('clientAuth/update', data)
      notify("fas fa-check", "success", "Sucesso! ", " Perfil Atualizado ");
    } catch (error) {
      notify("fas fa-times", "danger", "Erro!", "Ocorreu um erro ao atualizar o Perfil.");
    }
  }

  async function searchZipCodeAddress() {
    try {
      resetFields();
      const response = await apiCep.get(`/${zipCode}/json`);

      const {logradouro, bairro, localidade, uf} = response.data;

      if (response.data.erro) {
        setZipCode('');
        notify("fas fa-times", "warning", "", "Endereço não encontrado");
      } else {
        setStreet(logradouro);
        setDistrict(bairro);
        setCity(localidade);
        setState(uf);
        clearError();
      }
    } catch (err) {
      console.log(err);
      setZipCode('');
    }
  }

  const clearError = () => {
    setZipCodeError(false);
    setStateError('');
    setCityError('');
    setDistrictError('');
    setStreetError('');
    setNumberError('');
  };

  const resetFields = () => {
    setState('');
    setCity('');
    setDistrict('');
    setStreet('');
    setNumber('');
    setComplement('');
  };

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
    <Container className="mt-3">
      <div className="rna-wrapper">
        <NotificationAlert ref={inputRef} />
      </div>
      <Row>
        <Col lg="3" md="4">
          <CardProfile username={username} />
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
            <NumberFormat
              format="###.###.###-##"
              className="form-control mb-2"
              placeholder="000.000.000-00"
              id="example-number-input"
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
                <NumberFormat
                  format="(##) #####-####"
                  className="form-control mb-2"
                  placeholder='Telefone/Whatsapp'
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
              disabled
            />
            <Row>
              <Col md={9}>
                <NumberFormat
                  format="#####-###"
                  className="form-control mb-2"
                  placeholder="Informe seu CEP"
                  id="example-number-input"
                  value={zipCode}
                  onChange={event => setZipCode(event.target.value)}
                />
              </Col>
              <Col md={2} className="align-self-center">
                <Button
                  className="btn-icon btn-3"
                  size="sm"
                  color="primary"
                  type="button"
                  onClick={() => searchZipCodeAddress()}
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-search mr-2" />
                      Buscar
                    </span>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Input
                  maxLength={2}
                  className='mb-2'
                  placeholder='Estado'
                  type='text'
                  value={state}
                  onChange={e => setState(e.target.value)}
                  />
              </Col>
              <Col md={9}>
                <Input
                  className= 'mb-2'
                  placeholder='Rua'
                  type='text'
                  value={street}
                  onChange={e => setStreet(e.target.value)}
                />
              </Col>
            </Row>
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

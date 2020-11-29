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
  CardImg
}
from "reactstrap";

import api from "../../../services/api"

export default function SaleDiscipline({ match }) {
  const disciplineId = match.params.id
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [about, setAbout] = useState('')
  const [objectives, setObjectives] = useState('')
  const [image, setImage] = useState('')
  const [session, setSession] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])
  const [disciplineInCart, setDisciplineInCart] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false);
  const [listFavorites, setListFavorites] = useState([]);

  const getDiscipline = async () => {
    try {
      const id = match.params.id;
      const { data } = await api.get(`discipline/show/${id}`)
      setName(data.name)
      setDescription(data.description)
      setAbout(data.about)
      setObjectives(data.objectives)
      setImage(data.image)
      setSession(data.session)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDiscipline()
  }, [])

  useEffect(() => {
    const getDisciplinesFavorite = async () => {
      try {
        const response = await api.get("client/wishlist/show")

        setListFavorites(response.data.wish_list);

        for (let i of response.data.wish_list) {
          if (i.id == disciplineId) {
            setIsFavorite(true);
          }
        }
      } catch (error) {
        console.log('Falha na conexão');
      }
    };

    getDisciplinesFavorite();
  }, []);

  useEffect(() => {
    const getDisciplineInCart = async () => {
      try {
        const response = await api.get("client/shoppingcart/show")

        setShoppingCart(response.data.shopping_cart);

        for (let i of response.data.shopping_cart) {
          if (i.id == disciplineId) {
            setDisciplineInCart(true);
          }
        }
      } catch (error) {
        console.log('Falha na conexão');
      }
    };

    getDisciplineInCart();
  }, []);

  const favoriteDiscipline = async () => {
    const list = [listFavorites.map((id) => id.id)]; // armazenando wishList em um array
    if (!isFavorite) {
      if (listFavorites == null || listFavorites.length == 0) {
        // se não tiver nenhum id na wishList
        try {
          await api.put(`/client/wishlist`, {
            wish_list: [disciplineId],
          }); // atualiza a wishList com id local

          console.log('favoritei 1');
        } catch (e) {
          console.log(e.response.data);
        }
      } else {
        // se ja tiver id's na wishList
        try {
          list.forEach((value) => value.push(parseInt(disciplineId))); // adicionando id local a wishList

          await api.put(`/client/wishlist`, {
            wish_list: list[0], // atualizando wishList com id local
          });
          console.log('Adicionei à lista de favoritos');
        } catch (e) {
          console.log(e.response.data);
        }
      }
    }

    if (isFavorite) {
      // se o anúncio local já estiver na wishList

      let removeIdLocal = [];
      list.filter((value) => {
        value.forEach((Ids) => {
          if (Ids != disciplineId) {
            removeIdLocal.push(Ids); // retirando o id local da wishList
          }
        });
      });

      if (removeIdLocal.length < 1) {
        // se wishList só tiver um anúncio
        try {
          await api.put(`/client/wishlist`, {
            wish_list: [null], // atualiza wish_list para null (vazio)
          });

          console.log('desfavoritei');
        } catch (err) {
          console.log('Erro ao desfavoritar anúncio');
        }
      } else {
        try {
          await api.put(`/client/wishlist`, {
            wish_list: removeIdLocal, // atualiza wishList sem o anúncio local
          });
          console.log('desfavoritei uma aula');
        } catch (err) {
          console.log('Erro ao desfavoritar anúncio');
        }
      }
    }
  };

  const setCartShopping = async () => {
    const list = [shoppingCart.map((id) => id.id)]; // armazenando wishList em um array

    if (!disciplineInCart) {
      if (shoppingCart == null || shoppingCart.length == 0) {
        // se não tiver nenhum id na wishList
        try {
          await api.put(`/client/shoppingcart`, {
            shopping_cart: [disciplineId],
          }); // atualiza a shoppingcart com id local

          console.log('favoritei 1');
        } catch (e) {
          console.log(e.response.data);
        }
      } else {
        // se ja tiver id's na shoppingcart
        try {
          list.forEach((value) => value.push(parseInt(disciplineId))); // adicionando id local a shoppingcart

          await api.put(`/client/shoppingcart`, {
            shopping_cart: list[0], // atualizando shoppingcart com id local
          });
          console.log('Adicionei à lista de favoritos');
        } catch (e) {
          console.log(e.response.data);
        }
      }
    }

    if (disciplineInCart) {
      // se o anúncio local já estiver na shoppingcart

      let removeIdLocal = [];
      list.filter((value) => {
        value.forEach((Ids) => {
          if (Ids != disciplineId) {
            removeIdLocal.push(Ids); // retirando o id local da shoppingcart
          }
        });
      });

      if (removeIdLocal.length < 1) {
        // se shoppingcart só tiver um anúncio
        try {
          await api.put(`/client/shoppingcart`, {
            shopping_cart: [null], // atualiza shopping_cart para null (vazio)
          });

          console.log('desfavoritei');
        } catch (err) {
          console.log('Erro ao desfavoritar anúncio');
        }
      } else {
        try {
          await api.put(`/client/shoppingcart`, {
            shopping_cart: removeIdLocal, // atualiza shoppingcart sem o anúncio local
          });
          console.log('desfavoritei uma aula');
        } catch (err) {
          console.log('Erro ao desfavoritar anúncio');
        }
      }
    }
  };


  return (
    <>
      <Container fluid className="bg-white">
        <Row className="align-items-center pt-8 pb-8" style={{background: '#F3F6FA'}}>
          <Col md="6" >
            <div
              id="background"
              className={image ? "has-background" : ""}
              style={{
                backgroundImage: `url(${image})`,
                height: 412, width: 535,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Col>
          <Col md="6">
            <h4 className="mb-3">DISCIPLINA</h4>
            <h1 className="mb-3 text-primary">{name}</h1>
            <div className="mb-5 h4 text-gray ls-1">{description}</div>
            <Button
              color={disciplineInCart ? "danger" : "primary"}
              outline={!disciplineInCart}
              type="button"
              onClick={() => {
                setDisciplineInCart((prevState) => !prevState);
                setCartShopping();
              }}
            >
              {disciplineInCart ? 'REMOVER DO CARRINHO' : 'ADICIONAR AO CARRINHO'}
            </Button>
            <Button
              color={isFavorite ? "danger" : "primary"}
              type="button"
              onClick={() => {
                setIsFavorite((prevState) => !prevState);
                favoriteDiscipline();
              }}
            >
              {isFavorite ? (
                <i className="fa fa-heart-broken" />
              ):(
                <i className="fa fa-heart" />
              )}
               {' '}
              {isFavorite ? 'DESFAVORITAR' : 'FAVORITAR'}
            </Button>
          </Col>
        </Row>
        <Col md="12" className=" pr-5 pl-7 mt-5">
          <h2>SOBRE A DISCIPLINA</h2>
            <Row className="pt-5 pb-5 align-items-center">
              <Col md="12" className=" pr-5 pl-4">
                <h5 className="text-black">
                  {about}
                </h5>
              </Col>
            </Row>
        </Col>
        <Col md="12" className=" pr-5 pl-7">
          <h2>OBJETIVOS</h2>
          <Row className="pt-3 pb-5 align-items-center">
            <Col md="12" className=" pr-5 pl-4">
              <h5 className="text-light-black">
                {objectives}
              </h5>
            </Col>
          </Row>
        </Col>
        <Col md="12" className="pr-5 pl-7">
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









import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  NavbarToggler,
  Collapse,
  Modal,
} from "reactstrap";

import ModalLogin from "../Utils/ModalLogin";
import api from '../../services/api'

export default function AdminNavbar() {
  const [authUser, setAuthUser] = useState("");
  const [dropdownOpen, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [path, setPath] = useState("");

  const history = useHistory();
  const token = localStorage.getItem('token');

  const toggle = () => setOpen(!dropdownOpen);
  const toggle2 = () => setIsOpen(!isOpen);

  useEffect(() => {
    async function getUserName() {
      if (token) {
        const response = await api.get('/clientAuth/getUser')
        setAuthUser(response.data.name);
        localStorage.setItem('username', response.data.name);
      }
    }
    getUserName();
  }, []);

  async function handleLogin(redirect) {
    setPath(redirect);
    setModal(!modal);
    setAuthUser();
  }

  function getActiveItem(path) {
    if (window.location.pathname === path) {
      return "navbar active";
    }
    return "navbar";
  }

  async function logout() {
    localStorage.clear();
    window.location.replace("/auth/login");
  }

  return (
    <>
      <Navbar
        fixed="top"
        color="white"
        ligth
        expand="lg"
        style={{ zIndex: 5, width: "100%" }}
        className="d-flex"
      >
        <Container className="d-flex">
          <NavbarBrand to="/" tag={Link} style={{ cursor: "pointer" }}>
            <img alt="..." src={require("assets/img/logo.png")} style={{ height: 60 }} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle2} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/">
                  <span className={getActiveItem("/")}>
                    Página Inicial
                  </span>
                </Link>
              </NavItem>
              {/* {token && (
                <>
                  <NavItem>
                    <Link to="/auth/mydiscipline">
                      <span className={getActiveItem("/auth/mydiscipline")}>
                        Minhas Disciplinas
                      </span>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/auth/wishlist">
                      <span className={getActiveItem("/auth/wishlist")}>
                        Lista de Desejo
                      </span>
                    </Link>
                  </NavItem>
                </>
              )} */}
            </Nav>
            <Nav className="d-flex">
              {token ? (
                <NavItem className="justify-content-end">
                  <Button
                    className="btn-icon btn-3 fa fa-shopping-cart"
                    color="primary"
                    type="button"
                    onClick={() => history.push("/auth/shoppingcart")}
                  >
                  </Button>
                  <ButtonDropdown
                    isOpen={dropdownOpen}
                    toggle={toggle}
                    style={{ zIndex: 4 }}
                  >
                    <DropdownToggle
                      className="bg-primary"
                      caret
                      style={{
                        borderRadius: 2,
                        border: 30,
                        color: "#fff",
                      }}
                    >
                      Olá,
                      {" "}
                      {authUser}
                      {" "}
                      &nbsp;
                    </DropdownToggle>
                    <DropdownMenu right className="text-center shadow-sm">
                      <DropdownItem
                        style={{ cursor: "pointer" }}
                        onClick={() => history.push("/auth/profile")}
                      >
                        <div style={{ fontWeight: 575, color: "#3C64B1" }}>
                          Meu Perfil
                        </div>
                      </DropdownItem>
                      <DropdownItem
                        style={{ cursor: "pointer" }}
                        onClick={() => history.push("/auth/wishlist")}
                      >
                        <div style={{ fontWeight: 575, color: "#3C64B1" }}>
                          Lista de Desejos
                        </div>
                      </DropdownItem>
                      <DropdownItem
                        style={{ cursor: "pointer" }}
                        onClick={() => history.push("/auth/mydiscipline")}
                      >
                        <div style={{ fontWeight: 575, color: "#3C64B1" }}>
                          Minhas Disciplinas
                        </div>
                      </DropdownItem>
                      <DropdownItem
                        style={{ cursor: "pointer" }}
                        onClick={() => history.push("/auth/hist")}
                      >
                        <div style={{ fontWeight: 575, color: "#3C64B1" }}>
                          Histórico de compras
                        </div>
                      </DropdownItem>

                      <DropdownItem divider />
                      <DropdownItem
                        onClick={logout}
                        style={{ backgroundColor: "#fff", cursor: "pointer" }}
                      >
                        <div
                          style={{ fontWeight: "bolder", color: "#3C64B1" }}
                        >
                          Encerrar Sessão
                        </div>
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </NavItem>
              ) : (
                <>
                  <NavItem>
                    <Button
                      className="btn-neutral btn-icon bg-primary"
                      color="default"
                      onClick={() => history.push("/auth/login")}
                      style={{
                        backgroundColor: "#3C64B1",
                        border: 0,
                        color: "#fff",
                      }}
                      >
                      <span className="nav-link-inner--text">ENTRAR</span>
                    </Button>
                  </NavItem>
                  <NavItem>
                    <Button
                      className="ml-2"
                      color="primary"
                      outline
                      type="button"
                      onClick={() => history.push("/auth/register")}
                    >
                      <span className="nav-link-inner--text">CADASTRAR</span>
                  </Button>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal
        className="modal-dialog-centered"
        size="sm"
        isOpen={modal}
        toggle={() => handleLogin()}
      >
        <div className="modal-header">
          <span style={{ fontSize: 18, fontWeight: "bold" }}>Bem-vindo</span>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => handleLogin()}
          >
            <span aria-hidden>×</span>
          </button>
        </div>
        <ModalLogin path={path} />
      </Modal>
    </>
  );
}

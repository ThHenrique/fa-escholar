import React, { useState } from "react";
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

export default function AdminNavbar() {
  const [authUser, setAuthUser] = useState("");
  const [token, setToken] = useState("");
  const [dropdownOpen, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [path, setPath] = useState("");

  const history = useHistory();

  const toggle = () => setOpen(!dropdownOpen);
  const toggle2 = () => setIsOpen(!isOpen);

  async function handleLogin(redirect) {
    setPath(redirect);
    setModal(!modal);
    setToken();
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
              <NavItem>
                <Link to="/auth/mydiscipline">
                  <span className={getActiveItem("/auth/mydiscipline")}>
                    Minhas Disciplinas
                  </span>
                </Link>
              </NavItem>
              {token ? (
                <NavItem>
                  <Link to="/auth/wishlist">
                    <span className={getActiveItem("/auth/wishlist")}>
                      Lista de Desejo
                    </span>
                  </Link>
                </NavItem>
              ) : (
                <NavItem>
                  <span
                    className={getActiveItem("/auth/wishlist")}
                    style={{ cursor: "pointer" }}
                  >
                    Lista de Desejo
                  </span>
                </NavItem>
              )}
              <NavItem>
                <Link to="/auth/throw">
                  <span className={getActiveItem("/auth/throw")}>
                    Perfil
                  </span>
                </Link>
              </NavItem>
            </Nav>
            <Nav className="d-flex">
              {token ? (
                <NavItem className="justify-content-end">
                  <ButtonDropdown
                    isOpen={dropdownOpen}
                    toggle={toggle}
                    style={{ zIndex: 4 }}
                  >
                    <DropdownToggle
                      caret
                      style={{
                        borderRadius: 2,
                        border: 30,
                        color: "#fff",
                        backgroundColor: "#fdbd5c",
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
                        onClick={() => history.push("/auth/myprofile")}
                      >
                        <div style={{ fontWeight: 575, color: "#505051" }}>
                          Meu Perfil
                        </div>
                      </DropdownItem>
                      <DropdownItem
                        style={{ cursor: "pointer" }}
                        onClick={() => history.push("/auth/myadverts")}
                      >
                        <div style={{ fontWeight: 575, color: "#505051" }}>
                          Meus Anúncios
                        </div>
                      </DropdownItem>
                      <DropdownItem
                        style={{ cursor: "pointer" }}
                        onClick={() => history.push("/auth/mythrow")}
                      >
                        <div style={{ fontWeight: 575, color: "#505051" }}>
                          Meus Lances
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
                <NavItem>
                  <Button
                    className="btn-neutral btn-icon"
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

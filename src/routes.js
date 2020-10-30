import Home from "views/pages/Home";
import WishList from "views/pages/WishList";
import MinhasDisciplinas from "views/pages/MinhasDisciplinas";
import HistCompras from "views/pages/HistCompras";

const routes = [
  {
    collapse: true,
    name: "Examples",
    icon: "ni ni-ungroup text-orange",
    state: "examplesCollapse",
    views: [
      {
        path: "/home",
        name: "Página principal",
        component: Home,
        layout: "/auth",
      },
      {
        path: "/wishlist",
        name: "Lista de desejo",
        component: WishList,
        layout: "/auth",
      },
      {
        path: "/mydiscipline",
        name: "Minhas Disciplinas",
        component: MinhasDisciplinas,
        layout: "/auth",
      },
      {
        path: "/hist",
        name: "Histórico de compras",
        component: HistCompras,
        layout: "/auth",
      },
    ],
  },
<<<<<<< HEAD
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
  
=======
>>>>>>> 274a3d25dbe7e49b2c0422268e8691a7838c05ce
];
export default routes;

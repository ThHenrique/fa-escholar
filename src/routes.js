import Home from "views/pages/Home";
import WishList from "views/pages/WishList";
import MinhasDisciplinas from "views/pages/MinhasDisciplinas";
import HistCompras from "views/pages/HistCompras";
import Login from "views/pages/Login";
import Cadastro from "views/pages/Cadastro";
import SaleDiscipline from "views/pages/SaleDiscipline";
import Profile from "views/pages/Profile"
import ShoppingCart from "views/pages/ShoppingCart"
import Pagamento from "views/pages/Pagamento";

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
      {
        path: "/saleDiscipline/:id",
        name: "Venda da disciplina",
        component: SaleDiscipline,
        layout: "/auth",
      },
      {
        path: "/profile",
        name: "Perfil",
        component: Profile,
        layout: "/auth",
      },

      {
        path: "/shoppingcart",
        name: "Carrinho de Compras",
        component: ShoppingCart,
        layout: "/auth",
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
        component: Cadastro,
        layout: "/auth"
      },
      {
        path: "/payment",
        name: "Pagamento",
        component: Pagamento,
        layout: "/auth"
      }
    ]
  }
]
export default routes;

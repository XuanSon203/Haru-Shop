import LayoutClient from "../components/layout/LayoutClient";
import Login from "../pages/client/auth/Login";
import Register from "../pages/client/auth/Register";
import Cart from "../pages/client/cart/Cart";
import Home from "../pages/client/home/Home";
import Pets from "../pages/client/products/pets/Pet";
import Products from "../pages/client/products/Produtcs";
import Accessories from "../pages/client/products/accessories/Accessories";
import AccessoryDetail from "../pages/client/products/accessories/AccessoryDetail";
import Services from "../pages/client/services/Services";
import ServiceBooking from "../pages/client/services/ServiceBooking";
import Setting from "../pages/settings/Setting";
import FoodDetail from "../pages/client/products/foods/FoodDetail";
import Foods from "../pages/client/products/foods/Food";

export const routes = [
  {
    path: "/",
    element: <LayoutClient />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },{
        path: "register",
        element:<Register/>
      },
      {
        path: "products",
        element:<Products />
      },
      {
        path: "products/:id",
        element:<FoodDetail />
      },
      {
        path: "accessories",
        element:<Accessories/>
      },
      {
        path: "accessories/:id",
        element:<AccessoryDetail/>
      },
      {
        path:'settings',
        element:<Setting/>
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path:"pets",
        element:<Pets/>
      },
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"services/:id",
        element:<ServiceBooking/>
      },
      {
        path:"foods",
        element:<Foods/>
      },
      {
        path:"food/:id",
        element:<FoodDetail/>
      }
    ],
  },
  
];

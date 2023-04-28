import Cart from "../page/Cart";
import NotFound from "../page/NotFound";
import Products from "../page/Products";

export const routesConfig = [
  {
    element: <Products />,
    path: "/",
  },
  {
    element: <Cart />,
    path: "/cart",
  },
  {
    element: <NotFound />,
    path: "*",
  },
];

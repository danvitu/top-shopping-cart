import App from "./components/App";
import MainContent from "./components/Pages/MainContent";
import ShopContent from "./components/Pages/ShopContent";
import ErrorPage from "./components/Pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainContent /> },
      { path: "shop", element: <ShopContent /> },
    ],
  },
];

export default routes;

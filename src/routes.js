import App from "./pages/App";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export default routes;

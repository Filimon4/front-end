import { createBrowserRouter } from "react-router-dom";
import {Router} from "@remix-run/router"
import Landing from "@pages/Landing";
import App from "@pages/App";
import ImgView from "@pages/ImgView";
import NotFound from "@pages/NotFound";
import Auth from "@pages/Auth";
import Login from "@pages/Auth/Login";
import Registartion from "@pages/Auth/Registration";

export const ROUTER_MAP: Router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "app",
    element: <App />
  },
  {
    path: "imgs/:id",
    element: <ImgView />
  },
  {
    path: "auth",
    element: <Auth />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'registration',
        element: <Registartion />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

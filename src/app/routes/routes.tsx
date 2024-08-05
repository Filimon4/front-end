import { createBrowserRouter } from "react-router-dom";
import {Router} from "@remix-run/router"
import Landing from "@pages/Landing";
import App from "@pages/App";
import ImgView from "@pages/ImgView";
import NotFound from "@pages/NotFound";

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
    path: "*",
    element: <NotFound />
  }
])

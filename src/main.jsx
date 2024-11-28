import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/store";

import App from "./App";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import ExplorePage from "./pages/ExplorePage";

/**setup axios */
const token = import.meta.env.TMDb_ACCESS_TOKEN;
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWE0OTQ4NzQxZTljOGI3NzNmYTBhYjAxYTcxOTQxOCIsIm5iZiI6MTczMjc5MTEzNC45Nzk4NTg5LCJzdWIiOiI2NDc3ZGM3ZjkzODI4ZTAwZGNkYjA0NGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Y_VlBmQ88wPbZ1jMKhN74LPwq2nq8PSWssT_SuEY71U`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":explore",
        element: <ExplorePage />,
      },
      {
        path: ":explore/:id",
        element: <DetailsPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

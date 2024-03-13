import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import {createHashRouter, RouterProvider} from "react-router-dom"
import Home from "./App.jsx";
import DescriptionRoute from "./components/DescriptionCard";
import TechnologiesRoute from "./components/Technologies";
import ProjetsRoute from "./components/Projets";
import ContactRoute from "./components/Contact";


const router = createHashRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/description",
        element:<DescriptionRoute/>
    },
    {
        path:"/technologies",
        element:<TechnologiesRoute/>
    },
    {
        path:"/projets",
        element:<ProjetsRoute/>
    },
    {
        path:"/contact",
        element:<ContactRoute/>
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalContextProvider>
            <RouterProvider router={router}/>
            {/* <App /> */}
        </GlobalContextProvider>
    </React.StrictMode>
);

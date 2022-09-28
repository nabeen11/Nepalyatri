import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Assets/Css/index.css";
import "swiper/css/bundle";
import Url from "./Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Url />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

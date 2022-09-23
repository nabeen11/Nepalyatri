import React from "react";
import { Routes, Route } from "react-router-dom";
import Activities from "./Activities";
import Destination from "./Destination";
import Planning from "./Planning";
import Review from "./Review";
import Contact from "./Contact";
import App from "../App";
import Home from "./Home";
import SingleDestination from "./SingleDestination";
import Notfound from "./404";

export default function Url() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/destinations" element={<Destination />} />
          <Route path="/destinations/:id" element={<SingleDestination />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

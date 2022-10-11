import React from "react";
import { Routes, Route } from "react-router-dom";
// import Activities from "../Pages/Activities";
import Destination from "../Pages/Destination";
import Planning from "../Pages/Planning";
import Review from "../Pages/Review";
import Contact from "../Pages/Contact";
import App from "../App";
import Home from "../Pages/Home";
import SingleDestination from "../Pages/SingleDestination";
import Notfound from "../Pages/404";
import SingleActivity from "./../Pages/activity/SingleActivity";

export default function Url() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destination />} />
          <Route path="/destinations/:id" element={<SingleDestination />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/activities/:activity"
            element={<SingleActivity />}
          ></Route>
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

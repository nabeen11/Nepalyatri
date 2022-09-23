import React from "react";
import { Link } from "react-router-dom";
import Logo from "/image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar bg-white">
      <div className="w-11/12 mx-auto sm:w-10/12 md:w-9/12 flex h-24 items-center justify-between px-14">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Travel Logo" />
          </Link>
        </div>
        <div className="menu flex  items-center space-x-9">
          <ul className="flex space-x-9 text-base">
            <li>
              <Link to="/activities">Activities</Link>
            </li>
            <li>
              <Link to="/destinations">Destinations</Link>
            </li>
            <li>
              <Link to="/planning">Planning</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className=" flex user border-success border rounded-xl space-x-1 px-1">
            <div className="bars px-1 py-1 m-[2px]">
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="bars bg-success px-2 py-1 m-[2px]  rounded-md">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

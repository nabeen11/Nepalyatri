import React from "react";
import { Link } from "react-router-dom";
import Logo from "/image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "./DropdownMenu";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-white">
        <div className="w-11/12 mx-auto sm:w-10/12 md:w-9/12 flex h-24 items-center justify-between md:px-8 px-10 lg:px-10 xl:px-12">
          <div className="logo w-24 sm:w-28 lg:w-36 ">
            <Link to="/">
              <img className="object-cover" src={Logo} alt="Travel Logo" />
            </Link>
          </div>
          <div className="menu flex items-center">
            <ul className="md:space-x-3 md:text-sm hidden md:flex lg:space-x-6 lg:text-base xl:space-x-9 text-gray-800">
              <li>
                <DropdownMenu />
              </li>

              <li className="hover:text-green-600">
                <Link to="/destinations">Destinations</Link>
              </li>
              <li className="hover:text-green-600">
                <Link to="/planning">Plan Your Trip</Link>
              </li>
              <li className="hover:text-green-600">
                <Link to="/reviews">Reviews</Link>
              </li>
              <li className="hover:text-green-600">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className=" flex user border-success border rounded-xl space-x-1 px-1 md:hidden">
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
    </>
  );
}

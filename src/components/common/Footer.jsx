import React from "react";
import footbg from "/image/footbg.png";
import Logo from "/image/logo.png";

import Ntb from "/image/ntb.png";
import Hra from "/image/hra.png";
import Keep from "/image/keep.png";
import Taan from "/image/taan.png";
import Nepal from "/image/nepal-gov.png";
import Nma from "/image/nma.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full mt-10 h-[573px] relative">
      <img
        className="w-full h-full object-cover object-top"
        src={footbg}
        alt="Footer"
      />
      <div className="overlay  w-full absolute top-0 left-0 bg-gradient-to-t from-white/70 to-white/100 h-1/2"></div>
      <div className="overlay h-1/2 w-full absolute bottom-0 left-0 opacity-70 bg-white"></div>
      <div className="flex justify-center flex-col items-center absolute top-0 h-1/2 w-full space-y-8">
        <p className="text-center text-xl text-gray-500 font-medium block">
          Our Association
        </p>
        <div className="flex-wrap flex justify-center gap-14">
          <img src={Ntb} alt="Our Partners" />
          <img src={Hra} alt="Our Partners" />
          <img src={Keep} alt="Our Partners" />
          <img src={Taan} alt="Our Partners" />
          <img src={Nepal} alt="Our Partners" />
          <img src={Nma} alt="Our Partners" />
        </div>
      </div>
      <div className="absolute w-full h-1/2 justify-center bottom-0 left-0 flex">
        <div className="grid grid-cols-10 w-10/12 sm:w-9/12 md:w-8/12 h-fit ">
          <div className="col-span-4 space-y-4">
            <img src={Logo} alt="Logo" />
            <p className="block text-gray-600 pr-6 leading-relaxed">
              Spell travels is established in 1998 by an Act of Parliament in
              the form of partnership between the Government of Nepal and
              private sector tourism industry to develop and market Nepal as an
              attractive tourist destination.
            </p>
            <span className="block">
              © 2019 Spell travels. All Rights Reserved.
            </span>
          </div>
          <div className="col-span-6">
            <div className="flex justify-evenly">
              <div className="findUs">
                <h1 className="text-xl font-semibold text-black mb-4">
                  Find us on
                </h1>
                <ul className="space-y-4">
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        className="text-gray-700 mr-3"
                        icon={faFacebookF}
                      />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        className="text-gray-700 mr-3"
                        icon={faInstagram}
                      />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        className="text-gray-700 mr-3"
                        icon={faTwitter}
                      />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        className="text-gray-700 mr-3"
                        icon={faYoutube}
                      />
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
              <div className="QUicklinks">
                <h1 className="text-xl font-semibold text-black mb-4">
                  Quick Links
                </h1>
                <ul className="space-y-4">
                  <li>
                    <Link to="#">Things To Do</Link>
                  </li>
                  <li>
                    <Link to="#">Destination</Link>
                  </li>
                  <li>
                    <Link to="#">Write Review</Link>
                  </li>
                  <li>
                    <Link to="#">Blogs</Link>
                  </li>
                </ul>
              </div>
              <div className="About">
                <h1 className="text-xl font-semibold text-black mb-4">About</h1>
                <ul className="space-y-4">
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Contact us</Link>
                  </li>
                  <li>
                    <Link to="#">Sitemap</Link>
                  </li>
                  <li>
                    <Link to="#">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

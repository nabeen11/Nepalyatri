import React from "react";
import Footer from "../Components/common/Footer";
import { Link } from "react-router-dom";
import Kathmandu from "/image/slider1.jpg";
import Pokhara from "/image/pokhara.jpg";
import Rara from "/image/rara.jpg";
import Manakamana from "/image/manakamana.jpg";
import Kalinchowk from "/image/Kuri_Village.jpg";
import MountEverest from "/image/slider2.jpg";
import Langtang from "/image/langtang.jpg";
import Muktinath from "/image/muktinath.jpg";

export default function Destination() {
  return (
    <>
      <div className="Destination">
        <div className="w-10/12 mx-auto sm:w-9/12 md:w-8/12 mt-16">
          <div className="flex flex-col justify-center items-center space-y-4">
            <h1 className="text-3xl text-black font-bold">
              Find 10+ Destination for your Next Holiday
            </h1>
            <div className="lg:w-6/12 sm:w-9/12 w-11/12">
              <p className="text-xl text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda soluta id quos ex, reprehenderit at amet temporibus
                voluptas accusantium soluta id quos soluta id quos
              </p>
            </div>
          </div>

          {/* Top Group  */}
          <div className="mt-16 grid grid-cols-6 lg:gap-5 gap-y-3">
            <div className="relative h-80 overflow-hidden col-span-6 md:col-span-4 lg:col-span-3 md:col-start-2">
              <img
                className="rounded-xl h-80  w-full object-cover absolute top-0 left-0"
                src={Kathmandu}
                alt="Kathmandu"
              />
              <div className="bg-gray-800/25 absolute top-0 left-0 h-full w-full rounded-xl"></div>
              <Link
                className="text-3xl text-white font-semibold absolute bottom-6 left-6"
                to="#"
              >
                Kathmandu
              </Link>
            </div>
            <div className="relative h-80 overflow-hidden col-span-6 md:col-span-4 lg:col-span-3 md:col-start-2">
              <img
                className="rounded-xl h-80  w-full object-cover absolute top-0 left-0"
                src={Pokhara}
                alt="Pokhara"
              />
              <div className="bg-gray-800/25 absolute top-0 left-0 h-full w-full rounded-xl"></div>
              <Link
                className="text-3xl text-white font-semibold absolute bottom-6 left-6"
                to="#"
              >
                Pokhara
              </Link>
            </div>

            {/* Mid group  */}

            {/* <div className="mt-5 grid grid-cols-3 gap-5"> */}
            <div className="relative h-80 overflow-hidden  col-span-6 md:col-span-4 lg:col-span-2 md:col-start-2">
              <img
                className="rounded-xl h-80  w-full object-cover absolute top-0 left-0"
                src={Rara}
                alt="Rara"
              />
              <div className="bg-gray-800/25 absolute top-0 left-0 h-full w-full rounded-xl"></div>
              <Link
                className="text-3xl text-white font-semibold absolute bottom-6 left-6"
                to="#"
              >
                Rara
              </Link>
            </div>
            <div className="relative h-80 overflow-hidden col-span-6 md:col-span-4 lg:col-span-2 md:col-start-2">
              <img
                className="rounded-xl h-80  w-full object-cover absolute top-0 left-0"
                src={Manakamana}
                alt="Manakamana"
              />
              <div className="bg-gray-800/25 absolute top-0 left-0 h-full w-full rounded-xl"></div>
              <Link
                className="text-3xl text-white font-semibold absolute bottom-6 left-6"
                to="#"
              >
                Manakamana
              </Link>
            </div>
            <div className="relative h-80 overflow-hidden col-span-6 md:col-span-4 lg:col-span-2 md:col-start-2">
              <img
                className="rounded-xl h-80  w-full object-cover absolute top-0 left-0"
                src={Kalinchowk}
                alt="Kalinchowk"
              />
              <div className="bg-gray-800/25 absolute top-0 left-0 h-full w-full rounded-xl"></div>
              <Link
                className="text-3xl text-white font-semibold absolute bottom-6 left-6"
                to="#"
              >
                Kalinchowk
              </Link>
            </div>
          </div>

          <div className="mt-12 mb-12 bg-[#EDFAF0] rounded-xl text-center py-16 space-y-8">
            <h1 className="text-3xl font-semibold text-[#192638] text-center">
              Enjoy Summer deals upto
              <span className="text-5xl font-semibold">30%</span> Discount
            </h1>
            <button className="py-3 px-4 bg-[#19A948] text-white rounded-md ">
              Get Information
            </button>
          </div>
          {/* Bottom Group  */}
          <div className="mt-5 grid grid-cols-3 gap-5">
            <div className="relative h-80 overflow-hidden">
              <img
                className="rounded-xl h-80  w-full object-cover absolute top-0 left-0"
                src={MountEverest}
                alt="Mount Everest"
              />
              <div className="bg-gray-800/25 absolute top-0 left-0 h-full w-full rounded-xl"></div>
              <Link
                className="text-3xl text-white font-semibold absolute bottom-6 left-6"
                to="#"
              >
                Mount Everest
              </Link>
            </div>
            <div className="relative h-80 overflow-hidden">
              <img
                className="rounded-xl h-80  w-full object-cover absolute top-0 left-0"
                src={Langtang}
                alt="Langtang"
              />
              <div className="bg-gray-800/25 absolute top-0 left-0 h-full w-full rounded-xl"></div>
              <Link
                className="text-3xl text-white font-semibold absolute bottom-6 left-6"
                to="#"
              >
                Langtang
              </Link>
            </div>
            <div className="relative h-80 overflow-hidden">
              <img
                className="rounded-xl h-80  w-full object-cover absolute top-0 left-0"
                src={Muktinath}
                alt="Muktinath"
              />
              <div className="bg-gray-800/25 absolute top-0 left-0 h-full w-full rounded-xl"></div>
              <Link
                className="text-3xl text-white font-semibold absolute bottom-6 left-6"
                to="#"
              >
                Muktinath
              </Link>
            </div>
          </div>

          {/* <Link to="1">Nepal</Link>
          <Link to="2">India</Link>
          <Link to="3">China</Link>
          <Link to="4">Germany</Link> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

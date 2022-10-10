import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import Footer from "./../Components/common/Footer";
import About from "/image/w_review.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";
import { Autoplay, Lazy, Pagination, Navigation } from "swiper";

import Slider1 from "/image/slider1.jpg";
import Slider2 from "/image/slider2.jpg";
import Manakamana from "/image/manakamana.jpg";

const carousel = [
  {
    name: "Nabin Adhikari",
    desti: "Kathmandu",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    picture: [Slider1, Slider2],
  },
  {
    name: "Ranjit Shrestha",
    desti: "Everest Tour",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    picture: [],
  },
  {
    name: "Saurav Sanjel",
    desti: "Manakamana",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    picture: [Manakamana],
  },
  {
    name: "Saroj Bhujel",
    desti: "Kalinchowk",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    picture: [],
  },
  {
    name: "Shuvam Koirala",
    desti: "Pokhara Tour",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere olor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere.. ",
    picture: [Slider1, Slider2],
  },
  {
    name: "Sushank Pokharel",
    desti: "Rara Tour",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    picture: [],
  },
  {
    name: "Roshan Dahal",
    desti: "Muktinath",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    picture: [],
  },
];

export default function Review() {
  return (
    <>
      <div className="Review">
        <div className="w-11/12 mx-auto sm:w-10/12 md:w-9/12">
          <div className="relative w-full h-[484px]">
            <img
              src="/image/review.png"
              className="w-full absolute top-0 right-0 object-cover h-full rounded-xl"
              alt="Banner Image"
            />
            <div className="absolute left-12 top-1/3 space-y-4">
              <h1 className="text-5xl font-semibold text-white">Reviews</h1>
              <p className="block text-white w-2/3">
                These are the reviews given by the travellers based upon their
                experience.
              </p>
              <Link
                to="#"
                className="text-white bg-[#19A948] rounded-md px-3 py-2 block w-32 text-center"
              >
                Write Review
              </Link>
            </div>
          </div>
          <div className="w-9/12 mx-auto mt-24">
            <div className="text-center space-y-4  mb-9">
              <h1 className="text-4xl font-semibold">Testimonials</h1>
              <p className="text-center block">
                See what the travellers are saying for us and the experience
                they enjoyed.
              </p>
            </div>
            {/* <div className="w-11/12 mx-auto grid sm:grid-cols md:grid-cols-2 gap-5 mt-9"> */}
            <div className="w-11/12 mx-auto md:columns-2 gap-5 mb-12">
              {carousel?.map((value) => (
                <div className="bg-[#E6FAF0] rounded-xl w-full mb-5 break-inside-avoid">
                  {value.picture.length === 0 || (
                    <div className="slider">
                      <Swiper
                        centeredSlides={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        pagination={{
                          clickable: true,
                        }}
                        lazy={true}
                        loop={true}
                        modules={[Autoplay, Lazy, Pagination, Navigation]}
                        className="mySwiper review-swiper rounded-t-xl overflow-hidden"
                      >
                        {value?.picture?.map((curr) => (
                          <SwiperSlide key={curr}>
                            <img
                              className="object-cover h-40 w-full -z-10 swiper-lazy"
                              src={curr}
                              alt="Image"
                            />
                            <div className="overlay h-full w-full absolute top-0 left-0 opacity-40 bg-gray-800"></div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  )}
                  <div className="content px-4 py-4 space-y-4">
                    <p className="block">{value.desc}</p>
                    <span className="flex items-center space-x-1">
                      <FontAwesomeIcon
                        className="text-yellow-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-yellow-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-yellow-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-yellow-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-yellow-500"
                        icon={faStarHalfAlt}
                      />
                    </span>
                    <div className="flex justify-between">
                      <span className="font-semibold">{value.name}</span>
                      <span className="font-semibold">{value.desti}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="px-4 py-2 border-2 border-green-500 rounded-md text-green-500">
                Load More
              </button>
            </div>
          </div>
          <div className="w-11/12 mx-auto sm:w-9/12 md:w-10/12 lg:w-11/12 xl:w-10/12 mt-16">
            <div className="book relative w-full">
              <div className="w-full h-[355px] sm:h-96 md:h-80 rounded-xl overflow-hidden">
                <img
                  className=" object-cover h-full mx-auto lg:w-full"
                  src={About}
                  alt="About Image"
                />
              </div>
              <div className="absolute flex flex-col top-0 w-full h-full justify-center items-center space-y-4">
                <h1 className="text-[28px] font-medium text-white">
                  Contribute Us by Writing Review
                </h1>
                <p className="text-center w-56 sm:w-72 md:w-2/5 text-base text-white block">
                  You can contibute and help us by sharing your experience with
                  other traveller.
                </p>
                <Link className="py-3 px-3 w-fit bg-green-500 text-lg block text-white rounded-lg">
                  Write Review
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

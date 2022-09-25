import { useState, React, useEffect } from "react";
import Slider1 from "/image/slider1.jpg";
import Slider2 from "/image/slider2.jpg";
import Slider3 from "/image/langtang.jpg";
import Slider4 from "/image/pokhara.jpg";
import LocationPin from "/image/location.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faLocationDot,
  faPersonRunning,
  faClock,
  faMoneyBill,
  faStar,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Searchbox from "./Searchbox";
import Package from "./Package";

const carousel = [Slider1, Slider2, Slider3, Slider4];

const destination = [
  { id: 1, name: "Kathmandu" },
  { id: 2, name: "Bhaktapur" },
  { id: 3, name: "Lalitpur" },
  { id: 4, name: "Pokhara" },
  { id: 5, name: "Lumbini" },
  { id: 6, name: "Chitwan" },
  { id: 7, name: "Annapurna Base Camp" },
  { id: 8, name: "Everest Base Camp" },
  { id: 9, name: "Rara Tour" },
  { id: 10, name: "Tilicho Tour" },
];

const activity = [
  { id: 1, destinationId: 1, name: "Rafting" },
  { id: 2, destinationId: [4, 7, 8], name: "Paragliding" },
  { id: 3, destinationId: [1, 2, 3, 4, , 5, 6, 9], name: "Sight Seeing" },
  { id: 4, destinationId: 4, name: "Bunjee Jumping" },
  { id: 5, destinationId: [1, 2, 3, 4], name: "Camping" },
  { id: 6, destinationId: 10, name: "Rock Climbing" },
];

const duration = [
  { id: 1, name: "1 Day" },
  { id: 2, name: "2 Days" },
  { id: 3, name: "5 Days" },
  { id: 4, name: "7 Days" },
];

const packages = [
  {
    id: 1,
    title: "Kathmandu Tour - 2 Days",
    activities: "Heritage Tour",
    price: "5,000",
    image: Slider1,
  },
  {
    id: 2,
    title: "Everest Base Camp - 4 Days-3 Nights",
    activities: "Trekking",
    price: "15,000",
    image: Slider2,
  },
  {
    id: 3,
    title: "Pokhara Tour - 2 Days-1 Night",
    activities: "Paragliding",
    price: "10,000",
    image: Slider4,
  },
  // {
  //   id: 4,
  //   title: "Langtang Tour - 2 Days-1 Night",
  //   activities: "Hiking",
  //   price: "10,000",
  //   image: Slider3,
  // },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      currentImage >= 3
        ? setCurrentImage(0)
        : setCurrentImage((curr) => curr + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentImage]);

  const [queryDestination, setQueryDestination] = useState("");
  const [selectedDestination, setselectedDestination] = useState();

  const [queryActivity, setQueryActivity] = useState("");
  const [selectedActivity, setSelectedActivity] = useState();

  const [queryDuration, setQueryDuration] = useState("");
  const [selectedDuration, setSelectedDuration] = useState();

  const filteredDestination =
    queryDestination === ""
      ? destination
      : destination.filter((person) => {
          return person.name
            .toLowerCase()
            .includes(queryDestination.toLowerCase());
        });

  const filteredDuration =
    queryDuration === ""
      ? duration
      : duration.filter((person) => {
          return person.name
            .toLowerCase()
            .includes(queryDuration.toLowerCase());
        });

  const filteredActivity =
    queryActivity === ""
      ? activity
      : activity.filter((person) => {
          return person.name
            .toLowerCase()
            .includes(queryActivity.toLowerCase());
        });

  return (
    <div className="home">
      <div className="w-11/12 mx-auto sm:w-10/12 md:w-9/12 flex items-center justify-between">
        <div className="object-cover w-full relative">
          <img
            className="object-cover h-[56vh] w-full rounded-3xl -z-10"
            src={carousel[currentImage]}
            alt="Slide 1"
          />
          <div className="overlay h-full w-full absolute top-0 left-0 opacity-40 bg-gray-800 rounded-3xl"></div>
          <div className="slider-title absolute w-full bottom-24 text-white text-2xl flex justify-center items-center space-x-3">
            <FontAwesomeIcon icon={faCamera} />
            <p>Mount Everest, Solukhumbu</p>
          </div>
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-16 left-1/2">
            <button
              type="button"
              className={`w-3 h-3 rounded-full  ${
                currentImage === 0 ? "bg-slate-50" : "border-2 border-white"
              }`}
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
              onClick={() => functionCarousel(0)}
            ></button>
            <button
              type="button"
              className={`w-3 h-3 rounded-full  ${
                currentImage === 1 ? "bg-slate-50" : "border-2 border-white"
              }`}
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
              onClick={() => functionCarousel(1)}
            ></button>
            <button
              type="button"
              className={`w-3 h-3 rounded-full  ${
                currentImage === 2 ? "bg-slate-50" : "border-2 border-white"
              }`}
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
              onClick={() => functionCarousel(2)}
            ></button>
            <button
              type="button"
              className={`w-3 h-3 rounded-full  ${
                currentImage === 3 ? "bg-slate-50" : "border-2 border-white"
              }`}
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
              onClick={() => functionCarousel(3)}
            ></button>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto sm:w-10/12 md:w-9/12">
        <div className="search flex items-center justify-center">
          <form className="w-9/12 py-3 px-10 gap-x-4 bg-white shadow-xl -mt-[42.5px] z-20 rounded-xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center ">
            <div className="where flex ">
              <Searchbox
                selected={selectedDestination}
                setSelected={setselectedDestination}
                icon={faLocationDot}
                setQuery={setQueryDestination}
                filtered={filteredDestination}
                label="Destination"
                bottomBorder={true}
              ></Searchbox>
              <div className="border-r-2 pl-4 mb-1 border-gray-300 h-10 my-auto"></div>
            </div>
            <div className="activity flex">
              <Searchbox
                selected={selectedActivity}
                setSelected={setSelectedActivity}
                icon={faPersonRunning}
                setQuery={setQueryActivity}
                filtered={filteredActivity}
                label="Activity"
              ></Searchbox>
              <div className="xl:block border-r-2 sm:hidden pl-4 mb-1 border-gray-300 h-10 my-auto"></div>
            </div>
            <div className="duration">
              <Searchbox
                selected={selectedDuration}
                setSelected={setSelectedDuration}
                icon={faClock}
                setQuery={setQueryDuration}
                filtered={filteredDuration}
                label="Duration"
              ></Searchbox>
            </div>
            <div className="search pt-5 justify-self-end xl:w-full">
              <button
                type="button"
                className="h-12 rounded-lg bg-green-600 w-28  xl:w-full text-white"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-10/12 mx-auto sm:w-9/12 md:w-8/12 mt-16">
        <div className="features grid xl:grid-cols-3 sm:grid-cols-2 space-x-8 ">
          <div className="flexible flex justify-around bg-gradient-to-b from-[#cbf8e17a] to-[#e3f5e38a] rounded-xl px-2 space-x-4 py-6 items-center">
            <div className="icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.7799 24.708C36.7799 22.248 36.0359 19.836 34.6199 17.784C33.2065 15.729 31.2201 14.1349 28.9079 13.2C26.5716 12.2647 24.0153 12.022 21.5448 12.5008C19.0742 12.9796 16.7937 14.1597 14.9759 15.9C13.1869 17.6109 11.9629 19.8272 11.4676 22.2525C10.9722 24.6778 11.2291 27.1966 12.2039 29.472C13.1639 31.752 14.8079 33.696 16.9079 35.064C19.3774 36.6671 22.3171 37.3868 25.2479 37.1057C28.1788 36.8246 30.9281 35.5593 33.0479 33.516C34.2224 32.3676 35.1579 30.998 35.8005 29.4863C36.4431 27.9746 36.78 26.3506 36.7919 24.708H36.7799ZM23.0399 32.988V31.44H22.7279C21.7968 31.4394 20.9022 31.0781 20.2319 30.432C19.904 30.1162 19.6427 29.738 19.4634 29.3196C19.2841 28.9012 19.1904 28.4512 19.1879 27.996C19.1879 27.744 19.2839 27.504 19.4759 27.324C19.6574 27.1473 19.9006 27.0485 20.1539 27.0485C20.4071 27.0485 20.6504 27.1473 20.8319 27.324C21.0119 27.504 21.1199 27.744 21.1199 27.996C21.1199 28.404 21.2879 28.812 21.5999 29.1C21.8999 29.4 22.3079 29.568 22.7279 29.568H24.8759C25.1463 29.5667 25.4138 29.5119 25.663 29.4069C25.9122 29.3019 26.1381 29.1486 26.3279 28.956C26.5142 28.7645 26.6593 28.5368 26.7542 28.2871C26.8491 28.0374 26.8919 27.7709 26.8799 27.504C26.8214 26.9801 26.5636 26.4989 26.1599 26.16C25.7558 25.8153 25.2389 25.6316 24.7079 25.644H23.1239C23.0753 25.6397 23.0272 25.6317 22.9799 25.62C22.0117 25.5735 21.0922 25.1819 20.3879 24.516C19.6923 23.8615 19.2646 22.972 19.1879 22.02C19.1556 21.4946 19.2352 20.9684 19.4214 20.4761C19.6075 19.9837 19.8961 19.5365 20.2679 19.164C20.9879 18.432 21.9839 18 23.0279 17.976V16.416C23.0279 16.176 23.1479 15.936 23.3159 15.756C23.4979 15.5757 23.7437 15.4746 23.9999 15.4746C24.2561 15.4746 24.5019 15.5757 24.6839 15.756C24.8639 15.936 24.9599 16.176 24.9599 16.428V17.976H25.2719C26.2029 17.9766 27.0975 18.3379 27.7679 18.984C28.4399 19.632 28.8119 20.508 28.8119 21.42C28.8119 21.672 28.7159 21.912 28.5239 22.092C28.3424 22.2686 28.0991 22.3675 27.8459 22.3675C27.5926 22.3675 27.3494 22.2686 27.1679 22.092C27.0767 22.0054 27.0041 21.9012 26.9546 21.7857C26.9051 21.6701 26.8796 21.5457 26.8799 21.42C26.8799 21.012 26.7119 20.604 26.3999 20.316C26.1119 20.016 25.6919 19.848 25.2719 19.848H23.1239C22.8535 19.8493 22.586 19.904 22.3368 20.009C22.0876 20.1141 21.8616 20.2673 21.6719 20.46C21.4856 20.6515 21.3405 20.8791 21.2456 21.1288C21.1506 21.3786 21.1079 21.6451 21.1199 21.912C21.1799 22.44 21.4319 22.908 21.8399 23.256C22.2359 23.604 22.7639 23.784 23.2919 23.772H24.8759C25.8974 23.79 26.8745 24.1928 27.6119 24.9C28.3079 25.56 28.7399 26.46 28.8119 27.396C28.8442 27.9213 28.7646 28.4476 28.5784 28.9399C28.3922 29.4322 28.1037 29.8794 27.7319 30.252C27.0119 30.984 26.0159 31.416 24.9719 31.44V33C24.9719 33.24 24.8639 33.48 24.6839 33.66C24.5019 33.8402 24.2561 33.9414 23.9999 33.9414C23.7437 33.9414 23.4979 33.8402 23.3159 33.66C23.2269 33.5724 23.1565 33.4677 23.1091 33.3522C23.0616 33.2367 23.0381 33.1128 23.0399 32.988Z"
                  fill="#0FA88A"
                />
                <path
                  d="M36.9961 37.68L31.2841 36.888C31.0313 36.8483 30.7731 36.9085 30.5641 37.056C30.4626 37.1284 30.3769 37.2206 30.312 37.3269C30.2471 37.4333 30.2045 37.5517 30.1865 37.675C30.1686 37.7984 30.1758 37.924 30.2077 38.0445C30.2395 38.1649 30.2955 38.2777 30.3721 38.376C30.5283 38.5752 30.7569 38.7045 31.0081 38.736L34.4641 39.228C31.4216 41.3057 27.8297 42.4312 24.1456 42.4611C20.4615 42.491 16.8519 41.424 13.7761 39.396C10.7354 37.3967 8.37816 34.5161 7.02006 31.14C5.6802 27.7959 5.41594 24.1173 6.26406 20.616C6.294 20.4941 6.2988 20.3674 6.27817 20.2436C6.25754 20.1199 6.21191 20.0016 6.14406 19.896C6.00421 19.6866 5.78939 19.5388 5.54384 19.483C5.29829 19.4271 5.04068 19.4676 4.82406 19.596C4.71455 19.6594 4.61885 19.7441 4.5426 19.8451C4.46634 19.9461 4.41107 20.0613 4.38006 20.184C3.67643 23.0735 3.65493 26.087 4.31725 28.9862C4.97957 31.8854 6.30753 34.5907 8.19606 36.888C10.0951 39.2224 12.4941 41.1006 15.2161 42.384C18.4561 43.9059 22.0365 44.558 25.6051 44.2761C29.1736 43.9941 32.6073 42.7879 35.5681 40.776L35.0881 44.052C35.0401 44.292 35.1121 44.544 35.2681 44.748C35.3593 44.8643 35.476 44.9583 35.6091 45.0228C35.7421 45.0872 35.8882 45.1205 36.0361 45.12C36.2761 45.12 36.4921 45.036 36.6721 44.892C36.8401 44.748 36.9601 44.532 36.9961 44.316L37.8121 38.748C37.8301 38.6258 37.8234 38.5013 37.7925 38.3818C37.7616 38.2622 37.707 38.1501 37.6321 38.052C37.4758 37.8528 37.2472 37.7234 36.9961 37.692V37.68ZM41.6521 32.112C41.4215 32.0074 41.1598 31.9945 40.9201 32.076C40.6799 32.1569 40.4815 32.3294 40.3681 32.556C39.9721 33.324 39.5161 34.08 39.0001 34.8C38.9052 34.9278 38.8449 35.0779 38.825 35.2358C38.8052 35.3937 38.8265 35.5541 38.8869 35.7013C38.9472 35.8486 39.0446 35.9778 39.1695 36.0764C39.2945 36.1749 39.4428 36.2396 39.6001 36.264C39.7836 36.3001 39.9737 36.2832 40.1479 36.2152C40.3222 36.1472 40.4735 36.0309 40.5841 35.88C41.1481 35.076 41.6641 34.248 42.0961 33.372C42.2161 33.156 42.2161 32.892 42.1441 32.652C42.0605 32.4164 41.8883 32.2226 41.6641 32.112H41.6521ZM24.0001 5.06399C21.0361 5.06399 18.1201 5.7 15.4321 6.936L16.3441 4.104C16.3811 3.98531 16.3938 3.86037 16.3815 3.73665C16.3691 3.61294 16.3319 3.49299 16.2721 3.38399C16.1509 3.16409 15.9485 3.0004 15.7081 2.928C15.4655 2.85277 15.2032 2.87427 14.9761 2.988C14.8635 3.04363 14.7631 3.12107 14.6807 3.21583C14.5983 3.31059 14.5355 3.42078 14.4961 3.54L12.8881 8.568C12.8071 8.78136 12.8114 9.01771 12.9001 9.228L12.9481 9.348L12.9601 9.372L13.0441 9.456C13.0921 9.528 13.1521 9.57599 13.2121 9.63599L13.2841 9.672C13.3441 9.72 13.4281 9.756 13.5001 9.792L18.7081 11.376C18.8896 11.4313 19.0832 11.4336 19.2661 11.3826C19.4489 11.3316 19.6134 11.2294 19.7401 11.088C19.8193 10.9938 19.8791 10.8849 19.9162 10.7675C19.9532 10.6501 19.9668 10.5266 19.9561 10.404C19.9454 10.2809 19.9102 10.1612 19.8525 10.052C19.7948 9.94272 19.7157 9.84616 19.6201 9.768C19.521 9.68641 19.4068 9.62523 19.2841 9.588L16.2241 8.652C19.0096 7.37134 22.0681 6.79769 25.1284 6.98189C28.1887 7.1661 31.1562 8.10247 33.7681 9.708C36.3452 11.2948 38.4793 13.5073 39.9721 16.14C42.1428 19.9751 42.7776 24.4911 41.7481 28.776C41.7174 28.8978 41.7122 29.0246 41.7329 29.1485C41.7535 29.2724 41.7996 29.3907 41.8681 29.496C42.007 29.7052 42.2224 29.8517 42.4681 29.904C42.609 29.9341 42.7548 29.9336 42.8956 29.9025C43.0364 29.8715 43.1688 29.8106 43.2841 29.724C43.4555 29.5967 43.5783 29.4147 43.6321 29.208C44.4135 25.9399 44.3275 22.5242 43.3824 19.2996C42.4373 16.075 40.666 13.1533 38.2441 10.824C34.4247 7.12644 29.3161 5.06062 24.0001 5.06399ZM8.85606 14.16C9.00079 14.1593 9.14359 14.1266 9.27426 14.0644C9.40494 14.0022 9.52028 13.9119 9.61206 13.8L9.73206 13.668C9.85206 13.488 9.91206 13.428 10.1041 13.2C10.1866 13.1085 10.2501 13.0014 10.2906 12.885C10.3312 12.7686 10.348 12.6453 10.3402 12.5223C10.3324 12.3993 10.3 12.2791 10.245 12.1688C10.1901 12.0585 10.1136 11.9603 10.0201 11.88C9.82657 11.717 9.57774 11.6348 9.32523 11.6504C9.07273 11.6661 8.83594 11.7784 8.66406 11.964C8.42406 12.216 8.36406 12.3 8.19606 12.504L8.10006 12.636C8.01562 12.7387 7.95434 12.8585 7.92043 12.9871C7.88651 13.1156 7.88075 13.25 7.90353 13.381C7.92632 13.5121 7.97711 13.6366 8.05245 13.7462C8.12779 13.8558 8.22589 13.9478 8.34006 14.016C8.49606 14.112 8.67606 14.16 8.85606 14.16ZM6.01206 18.096C6.15806 18.1608 6.31793 18.1882 6.47719 18.1756C6.63644 18.163 6.79004 18.1109 6.92406 18.024C7.08006 17.916 7.21206 17.784 7.28406 17.604L7.88406 16.38C7.94449 16.2717 7.98252 16.1524 7.99588 16.0292C8.00925 15.9059 7.99767 15.7812 7.96184 15.6626C7.92601 15.5439 7.86666 15.4336 7.78732 15.3383C7.70799 15.2431 7.6103 15.1647 7.50006 15.108C7.272 14.988 7.00598 14.9623 6.75916 15.0363C6.51234 15.1104 6.30441 15.2783 6.18006 15.504C5.94006 15.936 5.72406 16.392 5.52006 16.86C5.44473 17.0285 5.42162 17.2158 5.4537 17.3976C5.48579 17.5794 5.57159 17.7474 5.70006 17.88C5.78865 17.972 5.89472 18.0455 6.01206 18.096Z"
                  fill="#323C52"
                />
              </svg>
            </div>
            <div className="content">
              <h2 className="font-medium">Book With Confidence</h2>
              <p>Easy Booking and skip the line ticket on your phone </p>
            </div>
          </div>
          <div className="travel flex justify-around bg-gradient-to-b from-[#cbf8e17a] to-[#e3f5e38a] rounded-xl px-2 space-x-4 py-6 items-center">
            <div className="icon">
              <img src={LocationPin} alt="Location Pin" />
            </div>
            <div className="content">
              <h2 className="font-medium">Book With Confidence</h2>
              <p>Easy Booking and skip the line ticket on your phone </p>
            </div>
          </div>
          <div className="book flex justify-around bg-gradient-to-b from-[#cbf8e17a] to-[#e3f5e38a] rounded-xl px-2 space-x-4 py-6 items-center">
            <div className="icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.8254 12.1431L26.7646 16.0599L31.0846 16.6839C31.2632 16.7082 31.4313 16.7823 31.5697 16.8977C31.7082 17.0131 31.8113 17.1651 31.8674 17.3364C31.9235 17.5077 31.9303 17.6913 31.8869 17.8662C31.8435 18.0411 31.7518 18.2003 31.6222 18.3255L28.4926 21.3783L29.2318 25.6983C29.2589 25.8737 29.2369 26.0532 29.1682 26.2168C29.0995 26.3805 28.9868 26.5219 28.8426 26.6253C28.6984 26.7287 28.5283 26.7902 28.3513 26.8028C28.1743 26.8154 27.9972 26.7787 27.8398 26.6967L23.971 24.6615L20.0926 26.6967C19.9336 26.7803 19.7544 26.8176 19.5752 26.8044C19.3961 26.7912 19.2242 26.728 19.0792 26.622C18.9342 26.516 18.8219 26.3715 18.7549 26.2048C18.688 26.0381 18.6692 25.856 18.7006 25.6791L19.4398 21.3687L16.3198 18.3255C16.1932 18.2006 16.1038 18.0429 16.0616 17.87C16.0194 17.6972 16.026 17.5161 16.0808 17.3468C16.1356 17.1775 16.2363 17.0268 16.3717 16.9115C16.5071 16.7961 16.672 16.7207 16.8478 16.6935L21.1774 16.0599L23.1166 12.1335C23.1952 11.9712 23.3179 11.8343 23.4707 11.7386C23.6236 11.6428 23.8002 11.592 23.9806 11.592C24.1609 11.592 24.3376 11.6428 24.4904 11.7386C24.6432 11.8343 24.766 11.9712 24.8446 12.1335L24.8254 12.1431Z"
                  fill="#0FA88A"
                />
                <path
                  d="M33.6001 28.1271C33.7677 28.1261 33.932 28.0812 34.0768 27.997C34.2217 27.9128 34.342 27.7922 34.4257 27.6471L37.3057 22.6743C37.433 22.4528 37.4671 22.1898 37.4005 21.9431C37.3339 21.6965 37.172 21.4864 36.9505 21.3591C36.729 21.2318 36.466 21.1977 36.2194 21.2643C35.9727 21.3309 35.7626 21.4928 35.6353 21.7143L32.7649 26.6871C32.6805 26.8333 32.6361 26.9992 32.6363 27.168C32.6365 27.3369 32.6812 27.5027 32.7659 27.6487C32.8506 27.7948 32.9723 27.9159 33.1188 27.9999C33.2652 28.0839 33.4313 28.1278 33.6001 28.1271ZM26.9185 30.8343H23.9617C23.7071 30.8343 23.4629 30.9354 23.2829 31.1155C23.1029 31.2955 23.0017 31.5397 23.0017 31.7943C23.0017 32.0489 23.1029 32.2931 23.2829 32.4731C23.4629 32.6531 23.7071 32.7543 23.9617 32.7543H26.9185C27.1731 32.7543 27.4173 32.6531 27.5973 32.4731C27.7774 32.2931 27.8785 32.0489 27.8785 31.7943C27.8785 31.5397 27.7774 31.2955 27.5973 31.1155C27.4173 30.9354 27.1731 30.8343 26.9185 30.8343ZM28.1569 6.83429H19.8433C18.832 6.83558 17.8387 7.10224 16.9627 7.60763C16.0867 8.11301 15.3587 8.83942 14.8513 9.71429L10.6945 16.9143C10.1908 17.7906 9.92578 18.7836 9.92578 19.7943C9.92578 20.805 10.1908 21.798 10.6945 22.6743L14.8513 29.8743C15.3587 30.7492 16.0867 31.4756 16.9627 31.981C17.8387 32.4863 18.832 32.753 19.8433 32.7543C20.0979 32.7543 20.3421 32.6531 20.5221 32.4731C20.7022 32.2931 20.8033 32.0489 20.8033 31.7943C20.8033 31.5397 20.7022 31.2955 20.5221 31.1155C20.3421 30.9354 20.0979 30.8343 19.8433 30.8343C19.1701 30.8326 18.5091 30.6545 17.9263 30.3176C17.3435 29.9807 16.8592 29.4968 16.5217 28.9143L12.3649 21.7143C12.0279 21.1305 11.8505 20.4684 11.8505 19.7943C11.8505 19.1202 12.0279 18.458 12.3649 17.8743L16.5217 10.6743C16.8592 10.0918 17.3435 9.60791 17.9263 9.27101C18.5091 8.93412 19.1701 8.75595 19.8433 8.75429H28.1569C28.4115 8.75429 28.6557 8.65315 28.8357 8.47311C29.0158 8.29308 29.1169 8.0489 29.1169 7.79429C29.1169 7.53968 29.0158 7.2955 28.8357 7.11547C28.6557 6.93543 28.4115 6.83429 28.1569 6.83429Z"
                  fill="#323C52"
                />
                <path
                  d="M46.6186 35.3271L39.0058 27.6951L41.5018 23.3751C42.1301 22.2829 42.4608 21.0448 42.4608 19.7847C42.4608 18.5246 42.1301 17.2866 41.5018 16.1943L36.1162 6.86311C35.4843 5.7725 34.5771 4.86688 33.4854 4.23681C32.3938 3.60674 31.1558 3.27429 29.8954 3.27271H19.1338C17.8701 3.27093 16.6281 3.60178 15.5328 4.23202C14.4375 4.86226 13.5273 5.76968 12.8938 6.86311L7.51776 16.1943C6.88939 17.2866 6.55868 18.5246 6.55868 19.7847C6.55868 21.0448 6.88939 22.2829 7.51776 23.3751L10.0714 27.8199L2.46816 35.4231C2.3448 35.5446 2.25656 35.6971 2.21281 35.8646C2.16906 36.0321 2.17141 36.2083 2.21961 36.3746C2.26782 36.5408 2.36009 36.691 2.48666 36.8091C2.61322 36.9272 2.76937 37.0089 2.93856 37.0455L7.87296 38.1687L9.00576 43.1031C9.04345 43.2704 9.12526 43.4245 9.24268 43.5495C9.36011 43.6745 9.50887 43.7657 9.67349 43.8137C9.83812 43.8618 10.0126 43.8648 10.1788 43.8226C10.345 43.7803 10.4968 43.6943 10.6186 43.5735L17.9914 36.1911C18.3658 36.2583 18.7402 36.2871 19.1146 36.2871H29.8858C30.3178 36.2871 30.7498 36.2391 31.1626 36.1623L38.4586 43.4583C38.5794 43.5817 38.7312 43.6701 38.898 43.7144C39.0649 43.7588 39.2406 43.7572 39.4067 43.7101C39.5728 43.6629 39.7231 43.5718 39.8417 43.4464C39.9604 43.321 40.043 43.1659 40.081 42.9975L41.2138 38.0631L46.1482 36.9303C46.3147 36.8913 46.4678 36.8086 46.5916 36.6906C46.7154 36.5726 46.8055 36.4237 46.8524 36.2593C46.8994 36.0949 46.9016 35.9209 46.8588 35.7553C46.816 35.5897 46.7298 35.4386 46.609 35.3175L46.6186 35.3271ZM10.4938 40.9911L9.62016 37.1703C9.58135 36.9931 9.49312 36.8305 9.36569 36.7014C9.23826 36.5722 9.07685 36.4819 8.90016 36.4407L5.06016 35.5671L11.0794 29.5479L12.9034 32.7159C13.6174 33.9361 14.6761 34.9181 15.9466 35.5383L10.4938 41.0007V40.9911ZM19.1242 34.3767C18.2013 34.3765 17.2947 34.1343 16.4946 33.6745C15.6945 33.2147 15.0289 32.5532 14.5642 31.7559L9.18816 22.4247C8.7283 21.6243 8.4863 20.7174 8.4863 19.7943C8.4863 18.8712 8.7283 17.9643 9.18816 17.1639L14.5642 7.83271C15.0277 7.03369 15.6928 6.37026 16.493 5.90869C17.2931 5.44711 18.2004 5.20355 19.1242 5.20231H29.8858C30.8095 5.20355 31.7168 5.44711 32.517 5.90869C33.3171 6.37026 33.9822 7.03369 34.4458 7.83271L39.8218 17.1639C40.2816 17.9643 40.5236 18.8712 40.5236 19.7943C40.5236 20.7174 40.2816 21.6243 39.8218 22.4247L34.4458 31.7559C33.981 32.5532 33.3154 33.2147 32.5153 33.6745C31.7152 34.1343 30.8086 34.3765 29.8858 34.3767H19.1338H19.1242ZM40.2058 36.3351C40.0303 36.3755 39.8697 36.4645 39.7424 36.5918C39.6151 36.7191 39.5262 36.8797 39.4858 37.0551L38.6026 40.8855L33.1978 35.4807C34.4146 34.8566 35.4273 33.8972 36.1162 32.7159L38.0074 29.4327L44.0362 35.4519L40.2058 36.3351Z"
                  fill="#323C52"
                />
              </svg>
            </div>
            <div className="content">
              <h2 className="font-medium">Book With Confidence</h2>
              <p>Easy Booking and skip the line ticket on your phone </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto sm:w-9/12 md:w-8/12 mt-16">
        <div>
          <h2 className="font-medium text-2xl">Packages In Demand</h2>
          <p className="text-base mt-1">
            These are the packages that has won the heart of many trekkers
          </p>
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-6 mt-12 mb-32 relative">
            {packages.map((value) => (
              <Package
                Image={value.image}
                icon={faHeart}
                review={faStar}
                activities={value.activities}
                title={value.title}
                price={value.price}
              />
            ))}
            <button
              type="button"
              className="slide bg-white rounded-full flex justify-center px-5 py-4 absolute bottom-1/3 -right-5 drop-shadow-lg"
            >
              <FontAwesomeIcon
                className="text-green-600 text-xl"
                icon={faChevronRight}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="h-[70vh] w-full mt-14 mb-20">
        <img
          className="w-[100%] h-[100%] object-cover overflow-hidden"
          src={Slider1}
          alt="Destination"
        />
        <div className="w-10/12 mx-auto sm:w-9/12 md:w-8/12 mt-16 flex">
          <div className="desti"></div>
          <div className="desti-slider"></div>
        </div>
      </div>
    </div>
  );
}

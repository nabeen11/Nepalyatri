import { useState, React } from "react";
import Slider1 from "/image/slider1.jpg";
import Slider2 from "/image/slider2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faLocationDot,
  faPersonRunning,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Searchbox from "./Searchbox";

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

const duration = [
  { id: 1, name: "1 Day" },
  { id: 2, name: "2 Days" },
  { id: 3, name: "5 Days" },
  { id: 4, name: "7 Days" },
];

const activity = [
  { id: 1, name: "Rafting" },
  { id: 2, name: "Paragliding" },
  { id: 3, name: "Sight Seeing" },
  { id: 4, name: "Bunjee Jumping" },
  { id: 5, name: "Camping" },
  { id: 6, name: "Rock Climbing" },
];

export default function Home() {
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
            src={Slider2}
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
              className="w-3 h-3 rounded-full bg-slate-50"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full border-2 border-white"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full border-2 border-white"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full border-2 border-white"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
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
    </div>
  );
}

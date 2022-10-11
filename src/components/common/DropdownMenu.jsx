import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState, React } from "react";
import { Link } from "react-router-dom";

const dropdown = [
  { name: "Family Tour", url: "family" },
  { name: "Cultural Tour", url: "cultural" },
  { name: "Outdoor Activities", url: "outdoor" },
  { name: "Adventure & Nature", url: "nature" },
  { name: "Luxury Tour", url: "luxury" },
];
export default function DropdownMenu() {
  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center md:text-sm lg:text-base text-gray-800 hover:text-green-600">
            Activities
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-20 absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {dropdown.map((value) => (
                <Menu.Item>
                  <Link
                    to={`activities/${value.url}`}
                    className="group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-[#E6FAF0] hover:text-[#374253] hover:ring-1 ring-[#19A948] text-gray-900"
                  >
                    {value.name}
                  </Link>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

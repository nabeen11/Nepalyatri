import React from "react";
import { Link } from "react-router-dom";

export default function Review() {
  return (
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
        <div className="w-8/12 mx-auto mt-24">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-semibold">Testimonials</h1>
            <p className="text-center block">
              See what the travellers are saying for us and the experience they
              enjoyed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

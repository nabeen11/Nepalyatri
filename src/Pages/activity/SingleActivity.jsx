import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Fragment, React } from "react";
import { Link, useParams } from "react-router-dom";
import Package from "../../Components/common/Package";
import HeroImage from "/image/family.png";
import { packages } from "./../Home";
import Footer from "../../Components/common/Footer";
import { useForm } from "react-hook-form";
import Input from "../../Components/common/fields/input";

const sactivities = {
  id: 1,
  title: "Family Tour",
  desc: "Travel with your family, friend & loved ones and have life time experience.",
  image: HeroImage,
  action: "Get customized packages",
  ptitle: "Tours For Family",
  pdesc: "These are the packages that we have been providing to",
  packages: packages,
};
export default function SingleActivity() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const { activity } = useParams();
  return (
    <>
      <div className="Planning">
        <div className="w-11/12 mx-auto sm:w-10/12 md:w-9/12">
          <div className="relative w-full h-[388px]">
            <img
              src={sactivities.image}
              className="w-full absolute top-0 right-0 object-cover h-full rounded-xl"
              alt="Banner Image"
            />
            <div className="absolute left-12 top-1/3 space-y-3">
              <span className="text-white">
                <Link to="/" className="text-white">
                  Home<span> / </span>
                </Link>
                Things To Do
              </span>
              <h1 className="text-5xl font-semibold text-white">
                {sactivities.title}
              </h1>
              <p className="block text-white w-2/3">{sactivities.desc}</p>
              <Link
                to="/planning"
                className="text-white bg-[#19A948] rounded-md px-3 py-3 block w-fit text-center"
              >
                {sactivities.action}
              </Link>
            </div>
          </div>
        </div>
        <div className="w-10/12 mx-auto sm:w-9/12 md:w-8/12 mt-16 mb-28">
          <div>
            <div className="flex justify-between">
              <div className="head">
                <h2 className="font-medium text-2xl">{sactivities.ptitle}</h2>
                <p className="text-base mt-1">{sactivities.pdesc}</p>
              </div>
              {/* <div className="view my-auto">
                <Link
                  to="/activities"
                  className="border justify-end border-green-600 text-green-600 text-base px-3 py-[10px] rounded-lg"
                >
                  View All
                  <FontAwesomeIcon
                    icon={faLongArrowAltRight}
                    className="text-green-600 pl-4"
                  />
                </Link>
              </div> */}
            </div>
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-6 mt-9 relative">
              {sactivities?.packages?.map((curr, i) => (
                <Fragment key={`packages${curr.id}`}>
                  {i < 6 && (
                    <Package
                      Image={curr.image}
                      icon={faHeart}
                      review={faStar}
                      activities={sactivities?.title}
                      title={curr.title}
                      price={curr.price}
                    />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full mt-14 bg-[#EDFAF0] py-16 space-y-8">
          <div className="flex items-center justify-center w-full">
            <div className="space-y-4 w-9/12 break-words">
              <h1 className="text-3xl font-semibold text-center">
                Not sure which package to pick for ?
              </h1>
              <p className="text-center">
                Talk to our trip experts now to get the best deal
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <form
              className="text-center w-9/12 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
                <div>
                  <Input
                    name="firstName"
                    register={register}
                    required={true}
                    errors={errors}
                    placeholder="Full Name"
                    type="text"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    register={register}
                    required={true}
                    errors={errors}
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <Input
                    name="mobile"
                    register={register}
                    required={true}
                    errors={errors}
                    type="number"
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    className="bg-[#19A948] rounded-lg text-white text-base h-fit w-6/12 py-3 hover:-translate-y-1 hover:scale-110 hover:bg-[#19A948] duration-300"
                    type="submit"
                    value="Get Callback"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<SingleActivity />, rootElement);

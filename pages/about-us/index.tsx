/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import AppLayout from "../../components/utils/AppLayout";
import {
  FaUser,
  FaLock,
  FaFastForward,
  FaTree,
  FaMedal,
  FaPoll,
  FaLightbulb,
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaFingerprint,
  FaHtml5,
  FaPaperPlane,
  FaRocket,
  FaFacebook,
  FaDollarSign,
  FaHeart,
  FaHome,
  FaMapMarkerAlt,
} from "react-icons/fa";

// import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import houseNepal from '../../public/house-image.jpeg';
import Image from "next/image";

const AboutUs: React.FC = () => {
  // useEffect(() => {
  //   // Initialize AOS with your preferred configuration
  //   AOS.init({
  //     duration: 1000, // Animation duration in milliseconds
  //     once: true, // Whether the animation should happen only once
  //     easing: "ease-out", // Easing function for the animation (e.g., "ease-out", "linear", etc.)
  //   });

  //   // Optionally, add event listeners to refresh AOS when the window is resized
  //   window.addEventListener("resize", () => {
  //     AOS.refresh();
  //   });

  //   // Clean up the event listeners when the component unmounts
  //   return () => {
  //     window.removeEventListener("resize", () => {
  //       AOS.refresh();
  //     });
  //   };
  // }, []);

  return (
    <AppLayout>
      <div
        // data-aos="fade-up"
        className=" bg-black relative pt-32 pb-64 flex content-center items-center justify-center min-h-screen-75 -mt-20"
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover -mt-20 z-79"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1699202700754-1e5cbf0f8660?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p className="mt-4 text-lg text-white">
                  Explore RentalDai's user-friendly platform, where you can
                  easily browse through available properties, view high-quality
                  images, and get detailed insights into each rental option.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pb-20 -mt-52 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {/* <!-- Feature 1: Wide Range of Listings --> */}
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-green-50 w-full mb-8 shadow-lg rounded-lg ">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <FaUser className="fas FaUser"></FaUser>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Wide Range of Listings
                  </h6>
                  <p className="mt-2 mb-4 text-gray-500">
                    Explore an extensive selection of properties, from
                    affordable rooms to luxurious houses, across Nepal.
                  </p>
                </div>
              </div>
            </div>
            {/* 
    <!-- Feature 2: Trusted by Tenants --> */}
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-blue-50 w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <FaLock className="fas"></FaLock>
                  </div>
                  <h6 className="text-xl font-semibold">Trusted by Tenants</h6>
                  <p className="mt-2 mb-4 text-gray-500">
                    Join a community of satisfied tenants who found their ideal
                    home through rental-dai.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Feature 3: Secure and Easy Transactions --> */}
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-yellow-50 w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-400">
                    <FaFastForward className="fas "></FaFastForward>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Secure and Easy Reachability
                  </h6>
                  <p className="mt-2 mb-4 text-gray-500">
                    Experience a hassle-free and secure process, from house
                    searching to finalizing your rental agreement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-slate-800 mb-8">
      <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-crimson fill-slate-800 border-crimson"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div
            // data-aos="fade-up"
            className="flex flex-wrap items-center justify-center"
          >
            <div
              // data-aos="fade-up"
              className="w-full lg:w-5/12 px-4 mb-12 lg:mb-0"
            >
              <Image
                alt="A beautiful house in Nepal"
                className="max-w-full rounded-lg shadow-lg"
                src={houseNepal}
                 />
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="md:pr-12">
                <div className="text-green-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-green-50">
                  {/* Assuming FaHome is imported from 'react-icons/fa' */}
                  <FaHome className="text-xl"></FaHome>
                </div>
                <h3 className="text-3xl font-semibold text-white">
                  Find Your Perfect Home
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-400">
                  rental-dai is your trusted partner in finding cozy homes and
                  rooms across Nepal. Dive into our extensive selection and find
                  a place that feels like home.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-50 mr-3">
                          <FaMapMarkerAlt className="text-green-700"></FaMapMarkerAlt>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-400">
                          Wide Range of Properties
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-50 mr-3">
                          <FaHeart className="text-green-700"></FaHeart>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-400">Trusted by Tenants</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-50 mr-3">
                          <FaDollarSign className="text-green-700"></FaDollarSign>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-400">Competitive Pricing</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-48">
      <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-crimson fill-white border-crimson"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-red-500">
                Here are our heroes
              </h2>
              <p className="text-lg leading-relaxed m-4 text-gray-500">
                Unlock the door to hassle-free living with Rental Dai – where
                comfort meets convenience, and your perfect home is just a click
                away.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap flex-center">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="/nabaraj-sir.png"
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Nabraj Negi</h5>
                  <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">
                    Mentor/Supervisor
                  </p>

                  <div className="mt-6 grid-flow-row gap-y-4">
                    <a href="https://www.google.com" target="_blank">
                      <button
                        className="text-white p-3 text-center mx-2 inline-flex items-center hover:shadow-lg duration-150 justify-center w-10 h-10 mb-5 shadow-lg rounded-full bg-red-600"
                        type="button"
                      >
                        <FaGoogle className="fab"></FaGoogle>
                      </button>
                    </a>

                    <a href="https://www.twitter.com" target="_blank">
                      <button
                        className="text-white p-3 text-center mx-2 inline-flex hover:shadow-lg duration-150 items-center justify-center w-10 h-10 mb-5 shadow-lg rounded-full bg-blue-300"
                        type="button"
                      >
                        <FaTwitter className="fab"></FaTwitter>
                      </button>
                    </a>

                    <a href="https://www.instagram.com" target="_blank">
                      <button
                        className="text-yellow-200 p-3 text-center mx-2 inline-flex items-center hover:shadow-lg duration-150 justify-center w-10 h-10 mb-5 shadow-lg rounded-full bg-pink-700"
                        type="button"
                      >
                        <FaInstagram className="fab"></FaInstagram>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="/sirak-shrestha.jpeg"
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Sirak Shrestha Joshi</h5>
                  <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">
                    UI/Ux Designer
                  </p>

                  <div className="mt-6 grid-flow-row gap-y-4">
                    <a href="https://www.google.com" target="_blank">
                      <button
                        className="text-white p-3 text-center mx-2 inline-flex items-center hover:shadow-lg duration-150 justify-center w-10 h-10 mb-5 shadow-lg rounded-full bg-red-600"
                        type="button"
                      >
                        <FaGoogle className="fab"></FaGoogle>
                      </button>
                    </a>

                    <a href="https://www.twitter.com" target="_blank">
                      <button
                        className="text-white p-3 text-center mx-2 inline-flex hover:shadow-lg duration-150 items-center justify-center w-10 h-10 mb-5 shadow-lg rounded-full bg-blue-300"
                        type="button"
                      >
                        <FaTwitter className="fab"></FaTwitter>
                      </button>
                    </a>

                    <a href="https://www.instagram.com" target="_blank">
                      <button
                        className="text-yellow-200 p-3 text-center mx-2 inline-flex items-center hover:shadow-lg duration-150 justify-center w-10 h-10 mb-5 shadow-lg rounded-full bg-pink-700"
                        type="button"
                      >
                        <FaInstagram className="fab"></FaInstagram>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="/jwalan-chand.jpeg"
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Jwalan Chand</h5>
                  <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">
                    Backend Developer
                  </p>
                  <div className="mt-6">
                    <a href="https://www.google.com" target="_blank">
                      <button
                        className="text-white p-3 text-center mx-2 inline-flex items-center hover:shadow-lg duration-150 justify-center w-10 h-10 mb-5 shadow-lg rounded-full bg-red-600"
                        type="button"
                      >
                        <FaGoogle className="fab"></FaGoogle>
                      </button>
                    </a>

                    <a href="https://www.twitter.com" target="_blank">
                      <button
                        className="text-white p-3 text-center mx-2 inline-flex hover:shadow-lg duration-150 items-center justify-center w-10 h-10 mb-5 shadow-lg rounded-full bg-blue-300"
                        type="button"
                      >
                        <FaTwitter className="fab"></FaTwitter>
                      </button>
                    </a>

                    <a href="https://www.instagram.com" target="_blank">
                      <button
                        className="text-yellow-200 p-3 text-center mx-2 inline-flex items-center hover:shadow-lg duration-150 justify-center w-10 h-10 mb-5 shadow-lg rounded-full bg-pink-700"
                        type="button"
                      >
                        <FaInstagram className="fab"></FaInstagram>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="/dipesh-sanjel.jpeg"
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Dipesh Sanjel</h5>
                  <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">
                    Frontend Developer
                  </p>
                  <div className="mt-6 mx-2">
                    <a href="https://www.google.com" target="_blank">
                      <button
                        className="text-white p-3 text-center mx-2 inline-flex items-center hover:shadow-lg duration-150 justify-center w-10 h-10 mb-5 shadow-lg rounded-full bg-red-600"
                        type="button"
                      >
                        <FaGoogle className="fab"></FaGoogle>
                      </button>
                    </a>

                    <a href="https://www.twitter.com" target="_blank">
                      <button
                        className="text-white p-3 text-center mx-2 inline-flex hover:shadow-lg duration-150 items-center justify-center w-10 h-10 mb-5 shadow-lg rounded-full bg-blue-300"
                        type="button"
                      >
                        <FaTwitter className="fab"></FaTwitter>
                      </button>
                    </a>

                    <a href="https://www.instagram.com" target="_blank">
                      <button
                        className="text-yellow-200 p-3 text-center mx-2 inline-flex items-center hover:shadow-lg duration-150 justify-center w-10 h-10 mb-5 shadow-lg rounded-full bg-pink-700"
                        type="button"
                      >
                        <FaInstagram className="fab"></FaInstagram>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className=" relative block bg-blue-300">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-800 fill-blue-300"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="containe mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-red-500">
                Build something
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
                Put the potentially record low maximum sea ice extent tihs year
                down to low ice. According to the National Oceanic and
                Atmospheric Administration, Ted, Scambos.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-yellow-600 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <FaMedal className="fas text-xl"></FaMedal>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                Excelent Services
              </h6>
              <p className="mt-2 mb-4 text-gray-600">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-green-600 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <FaPoll className="fas text-xl"></FaPoll>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Grow your market
              </h5>
              <p className="mt-2 mb-4 text-gray-600">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-red-600 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <FaLightbulb className="fas text-xl"></FaLightbulb>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Launch time
              </h5>
              <p className="mt-2 mb-4 text-gray-600">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="relative block py-24 lg:pt-0 ">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48 ">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200">
                <div className="flex-auto p-5 lg:p-10 bg-red-400 shadow-md">
                  <h4 className="text-2xl font-semibold">
                    Want to be a part of us with us?
                  </h4>
                  <p className="leading-relaxed mt-1 mb-4 text-white">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2 focus:outline-none focus:border-red-500"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:ring w-full ease-linear transition-all duration-150 focus:outline-none focus:border-red-500"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2 focus:border-red-500"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2 focus:border-red-500"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-white text-black active:bg-red-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </AppLayout>
  );
};

export default AboutUs;

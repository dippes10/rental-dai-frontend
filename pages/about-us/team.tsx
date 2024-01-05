import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sirak Shrestha",
    position: "UI/UX Designer",
    description: "Passionate about creating visually appealing and user-friendly interfaces. Sirak brings a unique blend of creativity and functionality to our design team.",
    image: "/sirak-shrestha.jpeg",
  },
  {
    name: "Jwalan Chand",
    position: "Back-End Developer",
    description: "A skilled back-end developer, Jwalan is dedicated to building robust and scalable solutions. He ensures the seamless functioning of our platform's core functionalities.",
    image: "/jwalan-chand.jpeg",
  },
  {
    name: "Dipesh Sanjel",
    position: "Front-End Developer",
    description: "Dipesh is our front-end wizard, turning design concepts into interactive and responsive user interfaces. With a keen eye for detail, he enhances the user experience on our platform.",
    image: "/dipesh-sanjel.jpeg",
  },
  // Add more team members as needed
];

function Team() {
  return (
    <section className="pt-20 pb-48">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center text-center mb-24">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold">Here are our heroes</h2>
          <p className="text-lg leading-relaxed m-4 text-blueGray-500">
            According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos, NSIDClead scentist, puts the
            potentially record maximum.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <img
              alt="..."
              src="/img/team-1-800x800.jpg"
              className="shadow-lg rounded-full mx-auto max-w-120-px"
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Ryan Tompson</h5>
              <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                Web Developer
              </p>
              <div className="mt-6">
                <button
                  className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button
                  className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <img
              alt="..."
              src="/img/team-2-800x800.jpg"
              className="shadow-lg rounded-full mx-auto max-w-120-px"
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Romina Hadid</h5>
              <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                Marketing Specialist
              </p>
              <div className="mt-6">
                <button
                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <img
              alt="..."
              src="/img/team-3-800x800.jpg"
              className="shadow-lg rounded-full mx-auto max-w-120-px"
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Alexa Smith</h5>
              <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                UI/UX Designer
              </p>
              <div className="mt-6">
                <button
                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <img
              alt="..."
              src="/img/team-4-470x470.png"
              className="shadow-lg rounded-full mx-auto max-w-120-px"
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Jenna Kardi</h5>
              <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                Founder and CEO
              </p>
              <div className="mt-6">
                <button
                  className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Team;

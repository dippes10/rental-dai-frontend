// pages/coming-soon.tsx
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import router from "next/router";
import Button from "../../components/Button";
import AppLayout from "../../components/AppLayout";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (): TimeLeft => {
  const targetDate = new Date("2024-12-31");
  const difference = +targetDate - +new Date();

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex space-x-4 justify-center mt-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <span className="text-4xl lg:text-5xl font-bold text-black">
            {value}
          </span>
          <p className=" text-black capitalize">{unit}</p>
        </div>
      ))}
    </div>
  );
};

const handleClick = () => {
  router.push("/login/lister");
};

// Function to handle click on "Get started" button
const handleStartClick = () => {
  router.push("/login/user");
};

const LoginPage = () => {
  return (
    <AppLayout>
      <div className="w-full h-screen bg-cover bg-center bg-login">
        <div className="w-full h-full bg-black bg-opacity-25 flex flex-col justify-center items-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white">
            Sign in to <span className="text-red-500">Rental-Dai</span> of us
          </h1>
          <div className="bg-button">
            <CountdownTimer />
            <div className="mt-8 space-x-4 flex flex-row bg-opacity-50 ">
              <div className=" text-black transition duration-300 hover:text-red mr-4 cursor-pointer">
                <button onClick={handleClick} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Sign in as Lister
                  </span>
                </button>
              </div>
              <div className="text-black transition duration-300 hover:text-black mr-4 cursor-pointer">
                <button onClick={handleStartClick} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Sign in as User
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default LoginPage;

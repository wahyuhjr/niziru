import React from 'react'
import sakura from "../assets/sakura.png";
import sakura2 from "../assets/sakura-2.png";
import { useState, useEffect } from 'react';
import logo_dark from "../assets/logo_dark.png"
import { Link, animateScroll as scroll } from "react-scroll";
import {Routes, Route, useNavigate} from 'react-router-dom';
import ErrorPage from '../pages/Error'

const Header = () => {
    const navMenu = [
        { name: "Home", current: true, url: "home" },
        { name: "About Us", current: false, url: "aboutus" },
        { name: "Tokenomics", current: false, url: "tokenomics" },
        { name: "Roadmap", current: false, url: "roadmap" },
        { name: "Community", current: false, url: "community" },
      ];
      const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-10-1`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (10000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [year] = useState(new Date().getFullYear());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });

      const navigate = useNavigate();
      const navigateBuy = () => {
        navigate('/Error')
      }

  return (

    <div className="container">
      <div className="row">
      <div className="w-full bg-cover bg-center overflow-hidden bg-gradient-to-t from-pink-50 scroll-smooth" id="header">
        <nav className={`md:bg-transparent px-2 sm:px-4 py-2.5 w-full z-20 fixed mt-5 `}>
          <div className="container flex flex-wrap items-center justify-between">
            <a href="https://niziru.com/" className="flex items-center ml-8">
              <img src={logo_dark} className="h-12" alt="niziru-logo" />
            </a>
            <div className="flex md:order-2 ">
              <button onClick={navigateBuy} type="button" className="text-white bg-pink-600 hover:bg-pink-400 font-medium text-xl rounded-full px-5 py-2.5 text-center md:mr-0">
                Buy $NZR
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-pink focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd">
                  </path>
                </svg>
              </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-48 mr-48" id="navbar-sticky" >
              <ul className="flex flex-col p-2 mt-4  md:rounded-full md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium shadow-md shadow-gray-400 border-solid border-2 md:bg-pinkwhite bg-navcolors">
                {navMenu.map((menu) => (
                  <Link
                  activeClass="active"
                  to={menu.url}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
              >
                  <li
                    key={menu.name}
                    className={`p-4 cursor-pointer hover:text-pink-200 hover:bg-gradient-to-br hover:from-pink-600 hover:to-pink-400 text-md rounded-full ${
                      menu.current
                        ? "bg-gradient-to-br from-pink-400 to-pink-300 text-white "
                        : " text-pink-600"
                    }`}
                  >
                      
                      {menu.name}
                   
                  </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <div className="mt-48">
          <img src={sakura} className="mx-auto mb-20" />
        </div>
        <p className="grid columns-12 text-center mx-auto mt-10 text-black text-opacity-50 p-3 md:p-0 font-inter text-2xl leading-7 lg:text-xl lg:leading-28">
          Niziru means desire. Therefore, Niziru means someone who is tenacious
          and never gives up
          <br />
          compared to others, and he always seeks perfection in what he wants. Niziru is a
          <br />
          community-build, Web3 and growth tools for "meme coin"
          {timerComponents.length ? console.log(timerComponents) : <span>Times up!</span>}
        </p>
        <div className="-mt-0 md:mt-20 flex justify-center">
          <div className="grid grid-flow-col md:gap-10 gap-3 text-center auto-cols-max md:p-10 p-7">
            <div className="relative">
              <div className="absolute inset-0.5 rounded-2xl md:w-28 md:h-22 md:p-7 lg:w-48 lg:h-48 w-20 h-20 bg-countdowbox blur-2xl">
            </div>
            <div className="relative mx-auto flex items-center justify-center font-robotom flex-col bg-countdowbox rounded-2xl text-white md:w-28 md:h-22 md:p-7 lg:w-48 lg:h-48 w-20 h-20  border-countdownborder border-2 border-solid">
              <span
                className="countdown font-inter font-black lg:text-8xl text-4xl"
                id="days"
              >
                {timeLeft.days}
              </span>
              <p className="lg:text-xl text-sm ">Days</p>
            </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0.5 rounded-2xl md:w-28 md:h-22 md:p-7 lg:w-48 lg:h-48 w-20 h-20 bg-countdowbox blur-2xl">
            </div>
            <div className="relative mx-auto flex items-center justify-center font-robotom flex-col bg-countdowbox rounded-2xl text-white md:w-28 md:h-22 md:p-7 lg:w-48 lg:h-48 w-20 h-20  border-countdownborder border-2 border-solid">
              <span
                className="countdown font-inter font-black lg:text-8xl text-4xl"
                id="hours"
              >
                {timeLeft.hours}
              </span>  
              <p className="lg:text-xl text-sm">Hours</p>
            </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0.5 rounded-2xl md:w-28 md:h-22 md:p-7 lg:w-48 lg:h-48 w-20 h-20 bg-countdowbox blur-2xl">
            </div>
            <div className="relative mx-auto flex items-center justify-center font-robotom flex-col bg-countdowbox rounded-2xl text-white md:w-28 md:h-22 md:p-7 lg:w-48 lg:h-48 w-20 h-20  border-countdownborder border-2 border-solid">
              <span
                className="countdown font-inter font-black lg:text-8xl text-4xl"
                id="minutes"
              >
                {timeLeft.minutes}
              </span>
              <p className="lg:text-xl text-sm">Minutes</p>
            </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0.5 rounded-2xl md:w-28 md:h-22 md:p-7 lg:w-48 lg:h-48 w-20 h-20 bg-countdowbox blur-2xl">
            </div>
            <div className="relative mx-auto flex items-center justify-center font-robotom flex-col bg-countdowbox rounded-2xl text-white md:w-28 md:h-22 md:p-7 lg:w-48 lg:h-48 w-20 h-20 border-countdownborder border-2 border-solid">
              <span
                className="countdown font-inter lg:text-8xl text-4xl font-bold"
                id="seconds"
              >
                {timeLeft.seconds}
              </span>
              <p className="lg:text-xl text-sm">Seconds</p>
            </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end xl:mt-96 mt-40">
          <img
            src={sakura2}
            className="mt-3 lg:w-1/3 lg:h-3/4 w-1/3 h-1/3 md:block md:absolute hidden"
          />
        </div>
      </div>
      </div>
    </div>
    
  )
}

export default Header
"use client"

import Image from "next/image";
import React, { useState } from "react";

import Hero from "../hero/Hero";
import logo from '../../assets/logo.webp'


export default function Header() {

    // Use state to manage the class
    const [isStickyActive, setIsStickyActive] = useState(false);

    // Toggle the class by updating state
    const toggleClass = () => {
        setIsStickyActive(!isStickyActive);
    };

    // Create a variable to hold the class conditionally
    const navbarClass = isStickyActive ? "active" : "";


    return (
        <>
            <nav className="bg-hero pt-2 max-w-screen-xl  w-full z-20 top-0 left-0 text-white">
                <div className="max-w-screen-xl w-[92%] flex flex-wrap items-center justify-between mx-auto p-4"
                style={{background: 'linear-gradient(to bottom, #4FC3F7, #1565C0)'}}
                >
                    <a href="https://flowbite.com/" className="flex items-center">
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            height={100}
                            width={100}
                            src={'/images/portfolio-logo.png'}
                            className="mr-3"
                            alt="Logo"
                        />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Mango Man
                        </span> */}
                    </a>
                    <div className="flex md:order-2">
                        <button
                            type="button"
                          
                            className="text-white button focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
                        >
                           <a
                            // href="#contacts"
                            > Contact</a> 
                        </button>
                        <button
                            onClick={toggleClass}
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1${navbarClass ? `active ${navbarClass} ` : ""
                            }`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent  text-white ">
                            <li>
                                <a
                                    href="#home"
                                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#blockchain"
                                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#roadmap"
                                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                                >
                                    Roadmap
                                </a>
                            </li>
                            <li>
                                <a
                                    // href="https://mangotree.ai/"
                                    target="_blank"
                                    className="block py-2 pl-3 pr-4 text-white md:p-0"
                                >
                                    Web5 Domains
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Hero />
            </nav>

        </>
    );
}
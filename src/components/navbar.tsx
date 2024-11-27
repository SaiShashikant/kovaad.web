"use client";
import React, {useState} from "react";
import Image from "next/image";
import {navItems} from "@/app/lib/AppConstants";
import Link from "next/link";

const logoPath = "./logo.svg";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 py-3">
            <div className="md:px-10 px-5 mx-auto flex justify-between items-center h-16">
                <button
                    className="focus:outline-none flex bg-blue-950 text-white rounded-full md:p-3 md:px-5 p-1 px-2"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                menuOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                    {!menuOpen && <span className="mx-auto hidden md:block text-xl ml-2">Menu</span>}
                </button>

                <div className="flex items-center text-kovaad-blue text-2xl">
                    <Image
                        src={logoPath}
                        alt="Your Company Logo"
                        width={60}
                        height={60}
                        className="md:w-full md:h-full w-[50%] h-[50%]"
                    />
                    <span className="md:ml-2 ml-1 md:text-3xl text-xl font-bold text-kovaad-blue">Ko Vaad</span>
                </div>

                <div className="block ">
                    <button className="bg-kovaad-bg-hover-blue hover:bg-blue-700 rounded-xl text-white font-bold py-2 px-4">
                        Get Started
                    </button>
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 h-screen md:w-[33.33%] w-full bg-kovaad-bg-hover-blue shadow-md transform transition-transform duration-500 ease-in-out ${
                    menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
                }`}
            >
                <button
                    className="absolute right-0 mr-2 m-1 text-white z-10"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={"M6 18L18 6M6 6l12 12"}
                        />
                    </svg>
                </button>
                <ul
                    className={`py-2 px-6 mx-auto text-white transition-all duration-500 ${
                        menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    {navItems.map((navItem: any, idx: number) => (
                        <li key={`link-${idx}`} className="relative items-center flex py-3 font-wixFont hover:text-blue-500">
                            <Link href={navItem.link}>
                                <span className="!cursor-pointer text-3xl">{navItem.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

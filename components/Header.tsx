"use client";
import React, { useState } from "react";
import {Truck} from "lucide-react";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault(); // Prevent default link behavior
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white/60 shadow-md py-4 px-8 flex justify-between lg:justify-center gap-32 items-center sticky top-0 z-50">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-blue-600 flex items-center justify-center">
                <Truck/>
                <a href="#Hero" onClick={(e) => scrollToSection(e, "Hero")} className="mx-6">
                    Ship-Swift
                </a>
            </h1>

            {/* Hamburger Menu Button */}
            <div className="block md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-blue-600 focus:outline-none"
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
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Sliding Sheet for Mobile */}
            <div
                className={`${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } fixed top-0 left-0 w-2/3 h-full bg-white/90 shadow-lg z-40 transition-transform duration-300 ease-in-out md:hidden`}
            >
                <nav className="space-y-4 p-6 flex flex-col justify-start items-start">
                    <a
                        href="#how-it-works"
                        className="text-gray-700 hover:text-blue-600"
                        onClick={(e) => {
                            scrollToSection(e, "how-it-works");
                            setIsMenuOpen(false); // Close menu after selection
                        }}
                    >
                        How It Works
                    </a>
                    <a
                        href="#Features"
                        className="text-gray-700 hover:text-blue-600"
                        onClick={(e) => {
                            scrollToSection(e, "Features");
                            setIsMenuOpen(false); // Close menu after selection
                        }}
                    >
                        Features
                    </a>
                    <a
                        href="#About"
                        className="text-gray-700 hover:text-blue-600"
                        onClick={(e) => {
                            scrollToSection(e, "About");
                            setIsMenuOpen(false); // Close menu after selection
                        }}
                    >
                        About
                    </a>
                </nav>
            </div>

            {/* Navigation Links (Visible on larger screens) */}
            <nav className="hidden md:flex space-x-4 font-extrabold">
                <a
                    href="#how-it-works"
                    className="text-gray-700 hover:text-blue-600"
                    onClick={(e) => scrollToSection(e, "how-it-works")}
                >
                    How It Works
                </a>
                <a
                    href="#Features"
                    className="text-gray-700 hover:text-blue-600"
                    onClick={(e) => scrollToSection(e, "Features")}
                >
                    Features
                </a>
                <a
                    href="#About"
                    className="text-gray-700 hover:text-blue-600"
                    onClick={(e) => scrollToSection(e, "About")}
                >
                    About
                </a>

            </nav>
        </header>
    );
};

export default Header;

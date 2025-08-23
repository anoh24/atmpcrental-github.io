import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState(false);
    const location = useLocation();

    // Track scroll position only for homepage
    useEffect(() => {
        if (location.pathname === "/Homepage" || location.pathname === "/") {
            const handleScroll = () => {
                if (window.scrollY > 0) {
                    setNavbarBackground(true);
                } else {
                    setNavbarBackground(false);
                }
            };
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        } else {
            // On other pages, always show background and black text
            setNavbarBackground(true);
        }
    }, [location]);

    return (
        <nav
            className={`p-4 fixed top-0 w-full z-10 transition-all duration-300 ${
                navbarBackground ? "bg-white" : "bg-transparent"
            }`}
        >
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div
                    className={`text-2xl font-black ${
                        navbarBackground ? "text-black" : "text-white"
                    }`}
                >
                    MY APP
                </div>

                <button
                    className={`bg-transparent ${
                        navbarBackground ? "text-black" : "text-white"
                    } border-none focus:outline-none md:hidden text-3xl transition-transform duration-1000 ease-in-out ${
                        menuOpen ? "rotate-45" : ""
                    }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✖" : "☰"}
                </button>

                <ul className="hidden md:flex justify-end space-x-8 pr-8">
                    <li>
                        <Link
                            className={`hover:text-green-500 ${
                                navbarBackground ? "text-black" : "text-white"
                            }`}
                            to="/Homepage"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`hover:text-green-500 ${
                                navbarBackground ? "text-black" : "text-white"
                            }`}
                            to="/AboutUs"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`hover:text-green-500 ${
                                navbarBackground ? "text-black" : "text-white"
                            }`}
                            to="/Contact"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="bg-green-500 opacity-80 text-white px-4 py-2 rounded hover:bg-green-600 transition font-semibold"
                            to="/loginpage"
                        >
                            Login/Register
                        </Link>
                    </li>
                </ul>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-1000 ease-in-out ${
                    menuOpen ? "max-h-96" : "max-h-0"
                }`}
            >
                <ul className="flex flex-col px-4 pt-4 pb-2 space-y-4">
                    <li>
                        <Link
                            className={`hover:text-green-500 ${
                                navbarBackground ? "text-black" : "text-white"
                            }`}
                            to="/Homepage"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`hover:text-green-500 ${
                                navbarBackground ? "text-black" : "text-white"
                            }`}
                            to="/AboutUs"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`hover:text-green-500 ${
                                navbarBackground ? "text-black" : "text-white"
                            }`}
                            to="/Contact"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="bg-green-500 opacity-80 text-white px-4 py-2 rounded hover:bg-green-600 transition font-semibold"
                            to="/loginpage"
                        >
                            Login/Register
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

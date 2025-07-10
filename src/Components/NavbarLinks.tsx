import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"
import Frame from "/Frame.png";
import { useState } from "react";

function NavbarLinks() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Menu", path: "/menu" },
        { name: "Reservation", path: "/" },
        { name: "Contact Us", path: "/" },
    ];
    return (

        <nav className="relative z-20 flex items-center justify-between px-6 md:px-8 py-5 max-w-7xl mx-auto">
            <div>
                <img src={Frame} alt="logo" className="h-10 md:h-12" />
            </div>
            <ul className="hidden md:flex space-x-10 text-sm tracking-wide ">
                <li className="hover:text-yellow-600 cursor-pointer"> <Link to={'/'}>Home</Link></li>
                <li className="hover:text-yellow-600 cursor-pointer"> <Link to={'/menu'}>Menu</Link></li>
                <li className="hover:text-yellow-600 cursor-pointer"> <Link to={'/about'}>About</Link></li>
                <li className="hover:text-yellow-600 cursor-pointer"> <Link to={'/'}>Reservation</Link></li>
            </ul>

            <div className="flex items-center gap-4">
                <button className="border border-white lg:block sm:block md:block hidden text-xs px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
                    Contact Us
                </button>
                <FaSearch className="text-white text-sm cursor-pointer" />
                <FaBars className="text-white text-sm cursor-pointer" />
                <div className="relative">
                    {/* Hamburger icon */}
                    <FaBars
                        className="text-white text-xl cursor-pointer md:hidden"
                        onClick={toggleMenu}
                    />

                    {/* Dropdown menu */}
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-black shadow-lg rounded-md z-50">
                            <ul className="flex flex-col">
                                {navItems.map((item) => (
                                    <li
                                        key={item.name}
                                        onClick={closeMenu}
                                        className="px-4 py-2 text-white hover:bg-yellow-600 cursor-pointer"
                                    >
                                        <Link to={item.path}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>

    )
}

export default NavbarLinks

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import spicelogo from '../assets/spicelogo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Shop', href: '/shop' },
    ];

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">

                        <img src={spicelogo} alt="Spicelore" className="h-40 w-auto" />
                    </div>


                    {/* Desktop Navigation */}
                    <div className="hidden md:flex text-lg font-semibold items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[#351108] hover:text-amber-900 relative group transition-colors"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#351108] transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    <div className="pt-2 flex items-center justify-center space-x-4 font-bold">
                        <button className="flex-1 flex items-center justify-center px-6 py-2 text-white border border-[#351108] bg-[#351108] hover:bg-white hover:text-[#351108] transition-all duration-300 rounded-lg shadow-md whitespace-nowrap">
                            Sign In
                        </button>
                        <button className="flex-1 flex items-center justify-center px-6 py-2 text-[#351108] border border-[#351108] hover:bg-[#351108] hover:text-white transition-all duration-300 rounded-lg shadow-md whitespace-nowrap">
                            Sign Up
                        </button>
                    </div>


                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-gray-600 hover:text-amber-600"
                        >
                            {isMenuOpen ? (
                                <HiX className="w-6 h-6" />
                            ) : (
                                <HiMenu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-2 text-gray-600 hover:bg-amber-50 rounded-md"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t flex space-x-4">
                                <button className="w-1/2 flex items-center justify-center px-4 py-2 text-white bg-amber-600 hover:bg-amber-700 rounded-md">
                                    Login
                                </button>
                                <button className="w-1/2 flex items-center justify-center px-4 py-2 text-amber-600 border border-amber-600 hover:bg-amber-50 rounded-md">
                                    Sign Up
                                </button>
                            </div>


                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
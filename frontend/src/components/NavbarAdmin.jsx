import { useState } from 'react';
import {
  FaHome,
  FaUser,
  FaChevronDown,
  FaSignOutAlt,
  FaUsers,
  FaRegistered,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <>
      {/* Burger Button: visible only on small screens */}
      <div className="bg-white p-4 flex justify-between items-center text-white shadow-md">
        <h2 className="text-black font-black text-lg">ADMIN DASHBOARD</h2>
        <button
          onClick={() => setIsBurgerOpen(!isBurgerOpen)}
          className="text-black text-2xl focus:outline-none"
        >
          {isBurgerOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Sidebar */}
      {isBurgerOpen && (
         <div
        className={`${
          isBurgerOpen ? 'block' : 'hidden'
        } md:flex h-screen w-64 bg-white text-white flex-col p-5 shadow-md transition-all duration-300 fixed md:static z-50`}
      >
        <nav className="flex flex-col gap-4">
          <Link
            to="/admin/dashboardMainPage"
            className="flex items-center text-black gap-3 px-2 hover:bg-green-400 rounded-xl h-10 hover:text-gray-800"
          >
            <FaHome />
            Dashboard
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-2 text-black hover:bg-green-400 rounded-xl h-10 hover:text-gray-800 cursor-pointer w-full"
            >
              <FaUser />
              Admin Accounts
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                } text-xs`}
              />
            </button>
            {isOpen && (
              <div className="flex flex-col gap-2 ml-6 mt-2 transition-all duration-300">
                <Link
                  to="/admin/renters"
                  className="flex gap-2 items-center px-2 py-1 hover:bg-green-400 rounded-xl h-10 text-black hover:text-gray-800 text-sm"
                >
                  <FaUsers />
                  Accounts List
                </Link>
                <Link
                  to="/admin/staff"
                  className="flex gap-2 items-center px-2 py-1 text-black hover:bg-green-400 rounded-xl h-10 hover:text-gray-800 text-sm"
                >
                  <FaRegistered />
                  Register Account
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/admin/logout"
            className="flex items-center gap-3 px-2 text-black hover:bg-green-400 rounded-xl h-10 hover:text-gray-800 mt-auto"
          >
            <FaSignOutAlt />
            Logout
          </Link>
        </nav>
      </div>
      )}
     
    </>
  );
}

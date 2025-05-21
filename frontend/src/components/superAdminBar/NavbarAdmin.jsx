import { useState } from 'react';
import {
  FaHome,
  FaUser,
  FaChevronDown,
  FaSignOutAlt,
  FaUsers,
  FaRegistered,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ isBurgerOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`
        fixed left-0 h-full w-64 bg-white p-5 shadow-md z-50
        transform transition-transform duration-300 ease-in-out
        ${isBurgerOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <nav className="flex flex-col gap-4 h-full">
        <NavLink
          to="/superAdmin/dashboardMain/dashboardMainPage"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl h-10 px-2 transition-colors ${
              isActive ? 'bg-green-500 text-white' : 'text-black hover:bg-green-400'
            }`
          }
        >
          <FaHome /> Dashboard
        </NavLink>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-black hover:bg-green-400 rounded-xl h-10 px-2 w-full transition-colors"
          >
            <FaUser />
            Admin Accounts
            <FaChevronDown
              className={`ml-auto transform transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isOpen && (
            <div className="flex flex-col gap-2 ml-6 mt-2">
              <NavLink
                to="/superAdmin/dashboardBranchAdminAccountList/listBranchAdminAccountPage"
                className={({ isActive }) =>
                  `text-sm flex items-center gap-2 rounded-xl h-10 px-2 transition-colors ${
                    isActive ? 'bg-green-500 text-white' : 'text-black hover:bg-green-400'
                  }`
                }
              >
                <FaUsers /> Accounts List
              </NavLink>
              <NavLink
                to="/superAdmin/dashboardBranchAdminAccounts/registerBranchAdminPage"
                className={({ isActive }) =>
                  `text-sm flex items-center gap-2 rounded-xl h-10 px-2 transition-colors ${
                    isActive ? 'bg-green-500 text-white' : 'text-black hover:bg-green-400'
                  }`
                }
              >
                <FaRegistered /> Register Account
              </NavLink>
            </div>
          )}
        </div>

        <NavLink
          to="/admin/logout"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl h-10 px-2 transition-colors ${
              isActive ? 'bg-green-500 text-white' : 'text-black hover:bg-green-400'
            }`
          }
        >
          <FaSignOutAlt /> Logout
        </NavLink>
      </nav>
    </div>
  );
}

import React from 'react';
import { FaChevronRight} from 'react-icons/fa';
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineHomeModern,
  HiOutlineCreditCard,
  HiOutlineInboxArrowDown,
  HiOutlineExclamationCircle,
  HiOutlineLogout,
} from 'react-icons/hi2';
import { NavLink } from 'react-router-dom'; // fixed import

export default function BranchAdminBar() {
  return (
    <div className="relative h-screen w-64 z-50 rounded-md flex flex-col">
      <div className="flex flex-row gap-2 w-full py-5 px-5 items-center">
        <h4 className="bg-green-500 w-auto h-auto text-xs font-black px-2 py-2 rounded-lg">
          NM
        </h4>
        <div className="flex flex-col w-auto flex-1">
          <p className="text-black text-sm font-black tracking-tighter font-oswald">
            Marawi City
          </p>
          <p className="text-gray-500 text-xs font-bold tracking-tighter transform scale-75 font-oswald -ml-6 -mt-1">
            BRANCH
          </p>
        </div>
        <div className="bg-green-500 p-1 rounded-full cursor-pointer -mr-8 overflow">
            <FaChevronRight className="text-white" size={18} />
        </div>
      </div>
      <nav className="flex flex-col gap-5 mt-10 py-5 px-5">
            <NavLink
            to="/"
            className="flex items-center gap-2 text-xs text-black font-oswald">
            <HiOutlineHome 
            className="text-xl h-auto w-auto py-2 px-2 rounded-lg"/>
             Dashboard
            </NavLink>

             <NavLink
            to="/"
            className="flex items-center gap-2 text-xs text-black font-oswald">
            <HiOutlineUsers 
            className="text-xl h-auto w-auto py-2 px-2 rounded-lg"/>
             Tenants
            </NavLink>

             <NavLink
            to="/"
            className="flex items-center gap-2 text-xs text-black font-oswald">
            <HiOutlineHomeModern
            className="text-xl h-auto w-auto py-2 px-2 rounded-lg"/>
             Rooms
            </NavLink>

             <NavLink
            to="/"
            className="flex items-center gap-2 text-xs text-black font-oswald">
            <HiOutlineCreditCard 
            className="text-xl h-auto w-auto py-2 px-2 rounded-lg"/>
             Billing
            </NavLink>

             <NavLink
            to="/"
            className="flex items-center gap-2 text-xs text-black font-oswald">
            <HiOutlineInboxArrowDown
            className="text-xl h-auto w-auto py-2 px-2 rounded-lg"/>
             Request
            </NavLink>

            <NavLink
            to="/"
            className="flex items-center gap-2 text-xs text-black font-oswald">
            <HiOutlineExclamationCircle
            className="text-xl h-auto w-auto py-2 px-2 rounded-lg"/>
             Notices
            </NavLink>

            <NavLink
            to="/"
            className="flex items-center gap-2 text-xs text-black font-oswald">
            <HiOutlineLogout 
            className="text-xl h-auto w-auto py-2 px-2 rounded-lg"/>
             Logout
            </NavLink>
      </nav>
    </div>
  );
}

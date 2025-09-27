import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineHomeModern,
  HiOutlineCreditCard,
  HiOutlineExclamationCircle,
  HiOutlineLockClosed,
  HiOutlineEnvelope

} from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

export default function BranchAdminBar() {
  const [resizeSidebar, setResizeSidebar] = useState(false);

  const handleClick = () => {
    setResizeSidebar(prev => !prev);
  };

  return (
    <div className={`fixed h-100 z-50 bg-white opacity-80 rounded-xl flex flex-col mt-10 ${resizeSidebar ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out shadow-xl`}>
      <div className="flex flex-row gap-2 w-full py-5 px-5 items-center bg-transparent">
        <h4 className="bg-green-600 text-xs font-black px-2 py-2 rounded-lg text-white">NM</h4>
        {resizeSidebar && (
          <div className="flex flex-col flex-1">
            <p className="text-black text-sm font-black tracking-tighter font-oswald">Marawi City</p>
            <p className="text-gray-500 text-xs font-bold tracking-tighter  font-oswald  -mt-1">BRANCH</p>
          </div>
        )}
        <div onClick={handleClick} className="bg-green-600 p-1 rounded-full cursor-pointer -mr-6 shadow-xl">
          <FaChevronRight className={`text-white transition-transform duration-300 transform ${resizeSidebar ? 'rotate-180' : ''}`} size={10} />
        </div>
      </div>

      <nav className="flex flex-col gap-4 px-5 py-10">
        <NavLink to="/branchAdmin/branchAdminDashboardView/branchAdminDashboardPage" className={({ isActive }) =>
          `flex items-center gap-4 text-sm font-oswald hover:bg-green-500 rounded-md p-2 ${isActive ? 'text-green-600 font-extrabold' : 'text-black'}`}>
          <HiOutlineHome className="text-xl" />
          {resizeSidebar && 'Dashboard'}
        </NavLink>
        
        <NavLink to="/branchAdmin/branchAdminTenantView/tenantViewpage" className={({ isActive }) =>
          `flex items-center gap-4 text-sm font-oswald hover:bg-green-500 rounded-md p-2 ${isActive ? 'text-green-600 font-extrabold' : 'text-black'}`}>
          <HiOutlineUsers className="text-xl" />
          {resizeSidebar && 'Tenants'}
        </NavLink>

        <NavLink to="/branchAdmin/branchAdminRoomView/branchAdminRoomViewPage" className={({ isActive }) =>
          `flex items-center gap-4 text-sm font-oswald hover:bg-green-500 rounded-md p-2 ${isActive ? 'text-green-600 font-extrabold' : 'text-black'}`}>
          <HiOutlineHomeModern className="text-xl" />
          {resizeSidebar && 'Rooms'}
        </NavLink>

          <NavLink to="/branchAdmin/branchAdminMessagesView/branchAdminMessagePage" className={({ isActive }) =>
          `flex items-center gap-4 text-sm font-oswald hover:bg-green-500 rounded-md p-2 ${isActive ? 'text-green-600 font-extrabold' : 'text-black'}`}>
            <HiOutlineEnvelope className="text-xl"/>
               {resizeSidebar && 'Messages'}
           </NavLink>

        <NavLink to="/branchAdmin/branchAdminBillingView/branchAdminBillingViewPage" className={({ isActive }) =>
          `flex items-center gap-4 text-sm font-oswald hover:bg-green-500 rounded-md p-2 ${isActive ? 'text-green-600 font-extrabold' : 'text-black'}`}>
          <HiOutlineCreditCard className="text-xl" />
          {resizeSidebar && 'Billing'}
        </NavLink>


        <NavLink to="/branchAdmin/branchAdminNotificationView/branchAdminNotificationViewPage" className={({ isActive }) =>
          `flex items-center gap-4 text-sm font-oswald hover:bg-green-500 rounded-md p-2 ${isActive ? 'text-green-600 font-extrabold' : 'text-black'}`}>
          <HiOutlineExclamationCircle className="text-xl" />
          {resizeSidebar && 'Notification'}
        </NavLink>

        <NavLink to="/logout" className={({ isActive }) =>
          `flex items-center gap-4 text-sm font-oswald hover:bg-green-500 rounded-md p-2 ${isActive ? 'text-green-600 font-extrabold' : 'text-black'}`}>
          <HiOutlineLockClosed className="text-xl" />
          {resizeSidebar && 'Logout'}
        </NavLink>
      </nav>
    </div>
  );
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineHome,HiOutlineUsers,HiOutlineHomeModern,HiOutlineCreditCard,HiOutlineEnvelope,HiOutlineLockClosed } from 'react-icons/hi2'
export default function CustomerAdminAccountNavbar(){
    

    return(
        <div className="fixed top-0 left-0 w-full font-oswald z-50">
            <nav className="bg-white w-full flex justify-end gap-3 p-3 mx-auto max-w-3xl shadow-md rounded-full">
                <NavLink t="/">
                    <HiOutlineHome className="text-3xl text-black cursor-pointer border-2 
                    border border-gray-600 rounded-full p-1 hover:border-green-600"/>
                </NavLink> 

                 <NavLink t="/">
                <HiOutlineUsers className="text-3xl text-black cursor-pointer border-2 
                border border-gray-600 rounded-full p-1 hover:border-green-600"/>
                </NavLink>

                 <NavLink t="/">
                <HiOutlineHomeModern className="text-3xl text-black cursor-pointer border-2 
                border border-gray-600 rounded-full p-1 hover:border-green-600"/>
                </NavLink>

                 <NavLink t="/">
                <HiOutlineCreditCard className="text-3xl text-black cursor-pointer border-2 
                border border-gray-600 rounded-full p-1 hover:border-green-600"/>
                </NavLink>

                  <NavLink t="/">
                <HiOutlineEnvelope className="text-3xl text-black cursor-pointer border-2 
                border border-gray-600 rounded-full p-1 hover:border-green-600"/>
                </NavLink>

                  <NavLink t="/">
                 <HiOutlineLockClosed className="text-3xl text-black cursor-pointer border-2 
                border border-gray-600 rounded-full p-1 hover:border-green-600"/>
                </NavLink>
            </nav>

        </div>
    )

}

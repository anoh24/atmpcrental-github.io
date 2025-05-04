import {Link} from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="bg-white p-4 fixed top-0 w-full z-10 shadow">
            <ul className="flex justify-end space-x-8 pr-8">
                <li><Link className="text-black hover:text-green-500 font-semibold" to="/">Home</Link></li>
                <li><Link className="text-black hover:text-green-500 font-semibold" to="/AboutUs">About Us</Link></li>
                <li><Link className="text-black hover:text-green-500 font-semibold" to="/Contact">Contact</Link></li>
                <li><Link className="bg-green-500 text-white px-4 py-4 rounded hover:bg-green-600 transition font-semibold" to="/LoginRegister">Login/Register</Link></li>
            </ul>
        </nav>
    );
}
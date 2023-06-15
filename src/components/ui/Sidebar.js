import React from 'react';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="md:w-2/6 xl:w-1/5 bg-gray-800">
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide text-center fontbold">COMIDAS YA!!!</p>
                <p className="mt-3 text-gray-400">Administra tu restaurant de comidas aquí:</p>
                <nav className="mt-10">
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/menu">Menú</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/">Ordenes</NavLink>

                </nav>
            </div>
        </div>
    );
}
export default Sidebar;
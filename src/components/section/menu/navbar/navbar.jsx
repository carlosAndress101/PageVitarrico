import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SiderbarData } from "../sidebar/sidebar"
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import "./Navbar.css";

const Navbar = () => {
const [sidebar, setSiderbar] = useState(false);
const showSiderbar = () => setSiderbar(!sidebar);
return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
        <div className="navbar">
        <Link to="#" className="menu-bars">
            <div>
            <FaBars onClick={showSiderbar} />
            </div>
            <div>
            <button className="boton-salir-login"><Link to= "/">salir</Link></button>
            </div>
        </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSiderbar}>
            <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
                <button className="volver" ><Link to= "/Inicio"><img className="regresar" src="src\components\image\Vitarrico.ico" alt="Logo"  /></Link></button>
                <AiOutlineClose />
            </Link>
            </li>
            {SiderbarData.map((item, index) => {
            return (
                <li key={index} className={item.cName}>
                {" "}
                <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
                </li>
            );
            })}
            </ul>
        </nav>
    </IconContext.Provider>
    </>
);
};

export default Navbar;
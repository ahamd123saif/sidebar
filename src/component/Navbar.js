import React, { useState } from "react";
import * as FaIcoins from "react-icons/fa";
import * as AiIcoins from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarData from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

export const Navbar = () => {
  const [Sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!Sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar">
          <Link to="#\" className="menu-bars">
            <FaIcoins.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <div className={Sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" onClick={showSidebar}>
                <AiIcoins.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
};
export default Navbar;

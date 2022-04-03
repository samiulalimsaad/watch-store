import React from "react";
import { NavLink } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? "text-orange-600" : "text-white"
                }
                {...props}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default CustomLink;

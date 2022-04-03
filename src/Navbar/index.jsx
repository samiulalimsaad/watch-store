import React from "react";
import CustomLink from "../utils/CustomLink";

const Navbar = () => {
    return (
        <Navbar className="flex items-center justify-center gap-4 py-4 text-white bg-slate-800">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/reviews">Review</CustomLink>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
        </Navbar>
    );
};

export default Navbar;

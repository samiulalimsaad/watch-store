import React from "react";
import CustomLink from "../utils/CustomLink";

const Navbar = () => {
    return (
        // <div className="sticky top-0">
        <nav className="fixed inset-x-0 top-0 left-0 z-50 flex items-center justify-center gap-4 py-8 text-white uppercase bg-slate-800">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/reviews">Review</CustomLink>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
        </nav>
        // </div>
    );
};

export default Navbar;

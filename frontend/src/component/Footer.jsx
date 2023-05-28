import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-32 flex justify-center items-center bg-primary">
      <div className="text-white text-xs">
        <Link to="/" className="underline underline-offset-1">
          Blog
        </Link>
        <span> / </span>
        <Link to="/" className="underline underline-offset-1">
          Profile
        </Link>
        <span> / </span>
        <Link to="/" className="underline underline-offset-1">
          LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default Footer;

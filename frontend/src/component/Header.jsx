import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-site">
      <header className="container px-4 py-10 mx-auto h-4 flex items-center justify-between">
        <Link to="/">
          <img src="/logo-home.svg" className="w-12" />
        </Link>
        <ul className="inline-flex items-center">
          <li className="px-2 md:px-4">
            <Link to="/" className="text-primary hover:text-primary">
              HI THERE
            </Link>
          </li>
          <li className="px-2 md:px-4">
            <Link to="" className="text-secondary hover:text-primary">
              TSHOGX.ONLINE
            </Link>
          </li>
        </ul>
      </header>
      {/* </div> */}
    </div>
  );
};

export default Header;

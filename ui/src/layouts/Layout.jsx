import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <div className="bg-gray-800 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Logo"
              className="h-8 mr-2"
            />
            <span className="text-white text-lg font-semibold">
            react laravel
            </span>
          </div>
          <div className="flex items-center">
            <Link to={'/'} className="text-white mr-4 hover:text-gray-300">
              Home page
            </Link>
            <Link to={'/login'} className="text-white mr-4 hover:text-gray-300">
              Login
            </Link>
            {/* <Link to={'/register'} className="text-white mr-4 hover:text-gray-300">
              Register
            </Link>
            <Link to={'/users'} className="text-white mr-4 hover:text-gray-300">
              Users
            </Link> */}
          </div>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
      {/* <footer>footer</footer> */}
    </>
  );
}

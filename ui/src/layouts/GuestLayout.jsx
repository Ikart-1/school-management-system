import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE ,STUDENT_DASHBOARD_ROUTE} from "../router";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";


export default function GuestLayout() {
  const navigate = useNavigate();
  const context = useUserContext()
  useEffect(() => {
    if (context.authenticated) {
      navigate(STUDENT_DASHBOARD_ROUTE);
    }
  },[]);
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
            <Link to={LOGIN_ROUTE} className="text-white mr-4 hover:text-gray-300">
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

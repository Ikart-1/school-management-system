import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../../router";
import { axiosClient } from "../../api/api";
import { useUserContext } from "../../context/UserContext";
import { StudentApi } from "./../../service/Api/Student/StudentApi";

export default function StudentDashboardLayout() {
  const navigate = useNavigate();
  const { setUser ,setauthenticated ,authenticated,user} = useUserContext();

  useEffect(() => {
    StudentApi.getUser().then(({ data }) => {
      setUser(data);
      setauthenticated(true)
    }).catch((reason) => {
      setUser({});
      setauthenticated(false)
      navigate(LOGIN_ROUTE)
    })
  }, []);

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
            <Link to={"/"} className="text-white mr-4 hover:text-gray-300">
              Home page
            </Link>
            <Link
              to={LOGIN_ROUTE}
              className="text-white mr-4 hover:text-gray-300"
            >
              Logout
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
        <div>
          {/* {JSON.stringify(user)} */}
          <table class="table-auto">
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>NAME</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Outlet />
      </main>
      {/* <footer>footer</footer> */}
    </>
  );
}

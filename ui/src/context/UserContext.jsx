import React, { createContext, useContext, useState } from "react";
import { StudentApi } from "../service/Api/Student/StudentApi";
import { useNavigate } from "react-router-dom";
import { STUDENT_DASHBOARD_ROUTE } from "../router";

export const UserStateContext = createContext({
  user: {},
  authenticated: false,
  setuser: () => {},
  logout: () => {},
  login: (email, password) => {},
  setauthenticated: () => {},
});
export default function UserContext({ children }) {
  const [user, setUser] = useState({});
  const [authenticated, setauthenticated] = useState(false);
  const logout = () => {};
  const login = async (email, password) => {
    await StudentApi.getCsrf();
    return StudentApi.login(email, password);
  };
  return (
    <>
      <UserStateContext.Provider
        value={{
          user,
          login,
          authenticated,
          setauthenticated,
          setUser,
          logout,
        }}
      >
        {children}
      </UserStateContext.Provider>
    </>
  );
}

export const useUserContext = () => useContext(UserStateContext);

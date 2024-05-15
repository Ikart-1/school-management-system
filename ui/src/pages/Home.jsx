import React, { useContext } from "react";
import { UserStateContext, useUserContext } from "../context/UserContext";

export default function Home() {
  const context = useUserContext()
  return (
    <>
      <div>Home</div>
    </>
  );
}

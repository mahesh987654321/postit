import Link from "next/link";
import React from "react";
import Login from "./Login";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>
        <h1 className="font-bold text-lg">SendIt.</h1>
      </Link>
      <ul className="flex items-center gap-6">
        <Login />
      </ul>
    </nav>
  );
};

export default Nav;

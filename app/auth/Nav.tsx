import Link from "next/link";
import React from "react";
import Login from "./Login";
import { authOptions } from "pages/api/auth/[...nextauth]";

import { getServerSession } from "next-auth/next";
const Nav = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

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

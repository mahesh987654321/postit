import Link from "next/link";
import React from "react";
import Login from "./Login";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import { getServerSession } from "next-auth/next";
import Logged from "./Logged";
const Nav = async () => {
  const session = await unstable_getServerSession(authOptions);

  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>
        <h1 className="font-bold text-lg">SendIt</h1>
      </Link>
      <ul className="flex items-center gap-6">
        {!session?.user && <Login />}
        {session?.user && <Logged images={session?.user?.image || ""} />}
      </ul>
    </nav>
  );
};

export default Nav;

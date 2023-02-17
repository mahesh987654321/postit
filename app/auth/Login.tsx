"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list_none">
      <button
        className="text-sm bg-gray-600 disabled:opacity-25 text-white border font-bold p-2 shadow-md rounded-md px-6 hover:bg-gray-900"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </li>
  );
}

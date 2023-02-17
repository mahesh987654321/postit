"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li>
      <button className="text-sm" onClick={() => signIn()}>
        Sign In
        
      </button>
    </li>
  );
}

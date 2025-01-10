"use client";
import Link from "next/link";
import InputSearch from "./InputSearch";
// import AuthSigninButton from "./AuthSignin";

const Navbar = ({ className }) => {
  return (
    <nav className={`${className} navbar`}>
      <div className="Navbar bg-gradient-to-b from-color-secondary from-0% to-100% flex justify-between opacity-80 p-4">
        <Link href="/">
          <div className="flex justify-center items-center">
            <h1
              className="text-5xl text-transparent bg-clip-text 
              bg-gradient-to-r from-red-600 via-red-500 to-red-700
              font-extrabold uppercase tracking-widest 
              transform rotate-3 hover:rotate-0 transition-transform duration-500"
            >
              SIMA
            </h1>
          </div>
        </Link>
        <InputSearch />
        <Link href="api/auth/signin" className="">
          Sign in
        </Link>
        {/* <AuthSigninButton /> */}
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const MainHeader = () => {
  console.log("logo", logo);

  return (
    <header className="bg-transparent text-white ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className=" flex gap-x-2 items-center">
          <Link href="/">
            {" "}
            <Image priority src={logo} alt="Foodie's Delight" className="h-14 w-14" />
            {/* <img src={logo.src} alt="Foodie's Delight" className="h-12" /> */}
          </Link>

          <div className="text-2xl font-bold">🍴 Foodie's Delight</div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/meals">
            {" "}
            <div>Browse meals</div>{" "}
          </Link>{" "}
          <Link href="/community">
            {" "}
            <div>Community</div>{" "}
          </Link>{" "}
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;

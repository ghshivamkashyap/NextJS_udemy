import React from "react";
import Link from "next/link";
const HomePage = () => {
  return (
    <>
      <h1 className=" text-3xl">Home Page</h1>
      <ul>
        <li>
          <Link href="/blogs/s654e5g">Blogs</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;

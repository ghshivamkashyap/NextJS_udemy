import React from "react";
import Link from "next/link";

const Newspage = () => {
  return (
    <div>
      <h1>News Page</h1>
      <p>Welcome to the news page!</p>
      <div className=" flex flex-col gap-x-4 gap-y-2">
        <Link href="/news/1">News Article 1</Link>
        <Link href="/news/2">News Article 2</Link>
      </div>
    </div>
  );
};

export default Newspage;

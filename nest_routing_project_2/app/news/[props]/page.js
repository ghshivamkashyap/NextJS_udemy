import Link from "next/link";
import React from "react";

const SingleNews = (params) => {
  console.log("Params: ", params);

  return (
    <div>
      <Link href="/">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Home
        </button>
      </Link>

      <h1>News Article: {params.params.props}</h1>
      <p>This is the content of the news article.</p>
    </div>
  );
};

export default SingleNews;

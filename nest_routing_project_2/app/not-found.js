import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found!</h1>
      <Link href="/">
        <h3> Go back home </h3>
      </Link>
    </div>
  );
};

export default NotFound;

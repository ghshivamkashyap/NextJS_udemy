"use client";
import Link from "next/link";
import React from "react";

const Error = (data) => {
  console.log('Error', data.error);
  
  return (
    <div className=" flex flex-col">
      <div>Something went wrong</div>
      <Link href="/">Go back to home</Link>
    </div>
  );
};

export default Error;

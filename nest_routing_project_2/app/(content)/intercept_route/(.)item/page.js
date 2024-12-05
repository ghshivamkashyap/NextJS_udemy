"use client"
import { useRouter } from "next/navigation";
import React from "react";

const InterceptedItemRoute = () => {

    const router = useRouter();
  return (
    < div className=" flex flex-col">
        <button onClick={router.back}>Go back</button>
      <h1>page to be shown on normal naviagtion</h1>
    </div>
  );
};

export default InterceptedItemRoute;

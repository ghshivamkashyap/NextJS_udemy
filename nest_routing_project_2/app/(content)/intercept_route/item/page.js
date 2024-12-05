"use client"
import { useRouter } from "next/navigation";
import React from "react";

const ItemRoute = () => {
    const router = useRouter();
  return (
    <div className=" flex flex-col">
      <button onClick={router.back}>Go back</button>
      <h1>page to be shown in case on reload, link copy and paste</h1>
    </div>
  );
};

export default ItemRoute;

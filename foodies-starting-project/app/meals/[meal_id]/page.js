import { notFound } from "next/navigation";
import React from "react";

const page = (props) => {
  // console.log(props);

  if (props.params.meal_id == 0) {
    notFound();
  }

  return (
    <div className=" text-white">
      i am dynamic meal page - {props.params.meal_id}
    </div>
  );
};

export default page;

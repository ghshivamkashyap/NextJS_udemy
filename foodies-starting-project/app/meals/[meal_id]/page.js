"use client";
import UserForm, { formSubmitHandler } from "@/app/components/userForm";
import Image from "next/image";
import React, { useRef, useState } from "react";

// Component Function
const Page = ({ params }) => {
  const { meal_id } = params;

  // Guard against invalid meal_id (Only Server-Side Logic should ideally use `notFound()`)
  if (parseInt(meal_id) === 0) {
    return (
      <div className="text-red-500">
        Invalid meal ID! No meal found for ID: {meal_id}
      </div>
    );
  }

  const fileRef = useRef();
  const [imageFile, setImageFile] = useState(null);

  const fileHandler = () => {
    const file = fileRef.current.files[0];

    if (!file) return;

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImageFile(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-white">I am the dynamic meal page - {meal_id}</div>
      <div>
        {/* Conditionally render the Image */}
        {imageFile ? (
          <Image
            src={imageFile}
            alt="Uploaded preview"
            width={200}
            height={200}
          />
        ) : (
          <div className="text-white">No image selected</div>
        )}

        {/* form  */}

        <form action={formSubmitHandler}>
          <div>
            <input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              ref={fileRef}
              onChange={fileHandler}
              id="img"
              name="img"
            />
            <label className=" text-white" htmlFor="username">
              Username
            </label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label className=" text-white" htmlFor="email">
              E-Mail
            </label>
            <input type="email" id="email" name="email" required />
          </div>
          <button className=" text-white" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;

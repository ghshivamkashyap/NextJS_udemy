// "use client";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import React, { useRef, useState } from "react";

// const page = (props) => {
//   // console.log(props);

//   if (props.params.meal_id == 0) {
//     notFound();
//   }

//   const fileRef = useRef();
//   const [imageFile, setImageFile] = useState(null);

//   const fileHandler = () => {
//     console.log("File is:  ", fileRef.current.files[0]);
//     const file = fileRef.current.files[0];

//     if (!file) return;

//     const fileReaqder = new FileReader();

//     fileReaqder.onload = () => {
//       console.log(fileReaqder.result);
//       setImageFile(fileReaqder.result);
//     };

//     fileReaqder.readAsDataURL(file);
//   };

//   return (
//     <div className=" flex flex-col gap-y-4">
//       <div className=" text-white">
//         i am dynamic meal page - {props.params.meal_id}
//       </div>
//       <div>
//         <input
//           type="file"
//           accept="image/png, image/gif, image/jpeg"
//           ref={fileRef}
//           onChange={fileHandler}
//         />

//         <Image src={imageFile} alt="No image selected" />
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";

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
        <input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          ref={fileRef}
          onChange={fileHandler}
        />

        {/* Conditionally render the Image */}
        {imageFile ? (
          <Image
            src={imageFile}
            alt="Uploaded preview"
            width={200}
            height={200}
          />
        ) : (
          <div className="text-gray-500">No image selected</div>
        )}
      </div>
    </div>
  );
};

export default Page;

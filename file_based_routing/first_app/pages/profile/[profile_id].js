import React from "react";
import { useRouter } from "next/router";

const UserProfile = () => {
  const router = useRouter();

  console.log("router: ", router);

  return (
    <div>
      <h1>User Profile Page</h1>
    </div>
  );
};

export default UserProfile;

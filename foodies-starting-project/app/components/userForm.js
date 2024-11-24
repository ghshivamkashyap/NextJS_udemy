"use server";

export const formSubmitHandler = async (formData) => {
  const username = formData.get("username");
  const email = formData.get("email");

  console.log("Username:", formData);
  console.log("Email:", email);

  // Perform any server-side logic like saving data to the database
};

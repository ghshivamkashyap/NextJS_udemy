"use server";
import fs from "fs";
import path from "path";

export const formSubmitHandler = async (formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const imageFile = formData.get("img");
  if (!imageFile) {
    throw new Error("Image is required");
  }
  const imagesDir = path.join(process.cwd(), "public", "images");
  const imageFileName = `${Date.now()}-${imageFile.name}`;
  const imagePath = path.join(imagesDir, imageFileName);

  const arrayBuffer = await imageFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(imagePath, buffer);

  // Construct the image URL
  const imageUrl = `/images/${imageFileName}`;

  console.log("Form Data:", { username, email, imageUrl });

  return { success: true, name: username, email: email, imahe: imageUrl };
};

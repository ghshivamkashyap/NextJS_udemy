"use server";

import { createAuthSession } from "@/lib/auth";
import { hashUserPassword } from "@/lib/hash";
import { createuser } from "@/lib/user";
import { redirect } from "next/navigation";

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  let errors = {};

  if (email.includes("@") === false) {
    errors.email = "Email is invalid";
  }

  if (password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const hashedpassword = hashUserPassword(password);

  //   save data t db here

  try {
    const result = await createuser(email, hashedpassword);

    console.log("result----------------", result);
    await createAuthSession(result.lastInsertRowid);
    redirect("/training");
  } catch (e) {
    if (e.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email: "Email already exists",
        },
      };
    }
    throw e;
  }
}

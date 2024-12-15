"use client";
import { signup } from "@/actions/auth_action";
import Link from "next/link";
import { useFormState } from "react-dom";

export default  function AuthForm() {
  const [formState, formAction] = useFormState(signup, {});

  console.log('formState', formState);
  
  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {formState?.errors && (
        <ul>
          {Object.entries(formState.errors).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      )}
      <p>
        <button type="submit">Create Account</button>
      </p>
      <p>
        <Link href="/">Login with existing account.</Link>
      </p>
    </form>
  );
}

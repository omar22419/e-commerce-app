import React from "react";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="w-1/2 mx-auto">
      <h1 className="font-bold text-5xl text-center my-9">
          Login with your fresh card 
      </h1>

      <LoginForm />
    </div>
  );
}

import React from "react";
import InputAndLabel from "../components/input-and-label/InputAndLabel";

function SignIn() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#141414]">
        <form>
          <div className="bg-white w-96 p-6 rounded-md shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <img
                src="../images/website.svg"
                alt="logo for login"
                className="h-32"
              ></img>
            </div>
            <InputAndLabel label="Email" type="email" />
            <InputAndLabel label="Password" type="password" />
            <input id="remember-me" className="mb-10" type="checkbox"></input>
            <label htmlFor="remember-me" className="mx-2 text-gray-700">
              Remember me
            </label>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 transition duration-200 w-full text-gray-100 rounded-md py-2"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;

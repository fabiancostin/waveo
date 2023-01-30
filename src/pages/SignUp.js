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
            <InputAndLabel label="New Password" type="password" />
            <InputAndLabel label="Confirm Password" type="password" />
            <div className="grid grid-cols-2 mt-2">
              <div>
                <input id="producer" className="mb-10" type="checkbox"></input>
                <label htmlFor="producer" className="mx-2 text-gray-700">
                  Producer
                </label>
              </div>

              <div>
                <input
                  id="audio-engineer"
                  className="mb-10"
                  type="checkbox"
                ></input>
                <label htmlFor="audio-engineer" className="mx-2 text-gray-700">
                  Audio Engineer
                </label>
              </div>

              <div>
                <input id="composer" className="mb-10" type="checkbox"></input>
                <label htmlFor="composer" className="mx-2 text-gray-700">
                  Composer
                </label>
              </div>

              <div>
                <input
                  id="songwriter"
                  className="mb-10"
                  type="checkbox"
                ></input>
                <label htmlFor="songwriter" className="mx-2 text-gray-700">
                  Songwriter
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 transition duration-200 w-full text-gray-100 rounded-md py-2"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;

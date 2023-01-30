import React from "react";

function Modal({ isOpen, isClosed }) {
  return (
    <>
      {isOpen ? (
        <div className="fixed z-30 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white max-w-2xl flex flex-col justify-center items-center mx-6 px-6 py-6 rounded-lg">
            <h1 className="text-2xl font-semibold text-center mb-4">
              Welcome to Waveo
            </h1>
            <p className="font-['Raleway'] mb-6 text-center">
              Waveo allows musicians from all around the world to collaborate
              online to create new original music. Use FL Studio, Pro Tools,
              Logic Pro, Studio One, REAPER or any other audio software to
              record your ideas, then upload them to Waveo. Invite your friends
              to collaborate, or meet new friends across the world. With Waveo,
              you can create songs with a bass player in Stockholm, a drummer in
              Romania, and a guitar player in Kalamazoo.
            </p>
            <button
              className="px-6 py-4 text-sm text-center font-semibold leading-4 rounded-lg bg-cyan-400 text-gray-700 hover:bg-cyan-500 hover:text-gray-900 transition duration-200"
              onClick={isClosed}
            >
              Understood
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;

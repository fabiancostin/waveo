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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              cursus et nibh ut fermentum. Mauris libero sapien, mollis quis
              congue in, tristique in ligula. Proin venenatis mi magna, et
              posuere augue scelerisque eget. Aliquam elit arcu, sodales at
              bibendum a, viverra id augue. Aliquam nec vestibulum urna. Integer
              enim diam, accumsan vitae sagittis id, condimentum ac ante.
              Phasellus bibendum elit justo, rutrum mattis urna sagittis eget.
              Etiam venenatis, sapien iaculis venenatis vulputate, sapien diam
              dignissim felis, sit amet dignissim dolor odio eget arcu. Nunc
              lobortis diam ac odio bibendum egestas. Fusce vel felis rhoncus,
              imperdiet magna eu, euismod erat. Maecenas porttitor et lacus id
              venenatis.
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

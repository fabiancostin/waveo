import React from "react";

function InputAndLabel(props) {
  return (
    <>
      <label className="text-gray-700 font-sm font-semibold">
        {props.label}
      </label>
      <input
        className="w-full py-2 px-1 bg-gray-100 text-gray-500 rounded-sm outline-none mb-4"
        type={props.type}
      ></input>
    </>
  );
}

export default InputAndLabel;

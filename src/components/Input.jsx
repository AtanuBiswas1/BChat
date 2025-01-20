import React, { useState } from "react";
import { RiImageAddLine, RiSendPlane2Fill } from "@remixicon/react";
function Input({ onsubmit}) {
  const [inputValue, setInputValue] = useState("");

    function submit(e) {
        e.preventDefault();
       
        if(inputValue !==""){
        onsubmit(inputValue);
        setInputValue("");
        
      }

    }
  

  return (
    <form
      onSubmit={submit}
      className="flex w-full py-4 px-3 rounded-3xl text-center  "
    >
      <input
        type="text"
        className="bg-slate-500 w-2/3 px-5 rounded-3xl outline-none placeholder:text-gray-700 text-lg resize-none overflow-y-clip "
        placeholder="Enter a Prompt here"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      {/* <div>
        <input
          type="file"
          accept="image/*"
          id="imageUpload"
          className="hidden"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <label htmlFor="imageUpload" className="cursor-pointer ">
          <RiImageAddLine
            size={40}
            className=" hover:bg-slate-600 p-2 mt-3 rounded-full"
          />
        </label>
      </div> */}
      <button type="submit">
        <RiSendPlane2Fill
          size={40}
          className=" hover:bg-slate-600 p-1 mb-3 rounded-full"
        />
      </button>
    </form>
  );
}

export default Input;

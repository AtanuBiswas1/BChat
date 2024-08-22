import React from "react";

function ViewOutputSection() {
  return (
    <div className=" h-3/4 box-border  px-40  overflow-y-auto max-[850px]:mx-1 ">
      <div>
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-500 via-blue-900 to-blue-900 bg-clip-text text-transparent">
          Hello, User
        </h1>
        <h1 className="text-5xl font-extrabold text-slate-600 my-2">
          How can i help you today?
        </h1>
      </div>
      {/* <div>
        <div></div>
      </div> */}
    </div>
  );
}

export default ViewOutputSection;

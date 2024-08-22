import React, { useState } from "react";
import {
  RiMenuLine,
  RiAddLine,
  RiChat4Line,
  RiQuestionLine,
  RiHistoryLine,
  RiSettings3Line,
} from "@remixicon/react";

function Dashbord({ clickNewChat, allTabs, setCurrentChatIndex }) {
  const [menuSize, setMenuSize] = useState(false);

  function displayPreviousTab(key) {
    setCurrentChatIndex(key);
  }
  return (
    <div
      className={`bg-gray-900  inline-flex flex-col py-2 px-3 text-white h-screen overflow-hidden ${
        menuSize ? "w-1/7" : "w-1/5"
      } max-[600px]:bg-red-300`}
    >
      <div className="  ">
        <RiMenuLine
          size={60}
          className=" p-4 cursor-pointer  rounded-full  hover:bg-slate-500"
          onClick={() => setMenuSize(!menuSize)}
        />
      </div>
      <div
        className={`bg-slate-600 cursor-pointer rounded-2xl inline-flex px-4 py-2 text-black   my-6 ${
          menuSize ? "w-14" : ""
        }`}
        onClick={() => {
          if (allTabs[0].title !== "") {
            clickNewChat();
          }
        }}
      >
        <RiAddLine size={24} />
        {!menuSize ? <h1 className="px-2">New Chat</h1> : null}
      </div>

      {!menuSize ? (
        <div className="p-2 h-2/3">
          <h1 className="text-lg py-2">Recent</h1>
          <div className="h-80  overflow-y-auto">
            {allTabs.map((item, key) => {
              return (
                <div
                  key={key}
                  className="flex cursor-pointer"
                  onClick={() => displayPreviousTab(key)}
                >
                  <RiChat4Line size={15} className="my-1" />

                  <p className="pl-2 ml-1 text-sm">{item.title} </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="inline-flex gap-2 cursor-pointer ">
        <RiQuestionLine size={18} className="my-1" />
        {!menuSize ? <p className="pl-2 ml-1 text-sm">Help</p> : ""}
      </div>
      <div className="inline-flex gap-2 cursor-pointer ">
        <RiHistoryLine size={18} className="my-1" />
        {!menuSize ? <p className="pl-2 ml-1 text-sm">Activity</p> : ""}
      </div>
      <div className="inline-flex gap-2 cursor-pointer ">
        <RiSettings3Line size={18} className="my-1" />
        {!menuSize ? <p className="pl-2 ml-1 text-sm">Setting</p> : ""}
      </div>
    </div>
  );
}

export default Dashbord;

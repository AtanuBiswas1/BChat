import React from "react";
import {RiUser3Line,RiBrainLine} from "@remixicon/react";

function Output({ chats }) {
  
  return (
    <div className=" h-3/4  box-border px-40    overflow-y-auto max-[850px]:px-2 text-white">
      {chats.map((chat, key) => {
        // setContent(chat.answer.content);
        return (
          <div key={key}>
            
            <br />
            <div className="flex">
              
              <RiUser3Line
             size={40}
             
             />
            <div className="p-3  font-bold text-xl " dangerouslySetInnerHTML={{ __html: chat.question }} />
            </div>
            <hr />
            <div className="">
              <br />
             
            <div className=" text-white" dangerouslySetInnerHTML={{ __html: chat.answer}} />
            </div>
            
          </div>
          
        )
      })}
    </div>
  );
} //4/5 mx-40 p-2

export default Output;

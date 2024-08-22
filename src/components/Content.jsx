import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Output from "./Output";
import ViewOutputSection from "./ViewOutputsection";
import Input from "./Input";
import run from "../config/Gemini";

function Content({ chats,updateAllTabs }) {
  
  async function getData(question,updatedChats) {
    let result;
    try {
       result = await  run(question);
    } catch (error) {
      result =`Something wrong !!! Network Error !! `
    }
    // const result = await  run(question);
    //.................................................................................
        let responceArray=result.split("**")
        let newResponse=""
        for(let i=0;i<responceArray.length;i++){
          if( i%2==0){ //i===0 ||
            newResponse+=responceArray[i]
          }else{
            newResponse+="<br/>"+"<br/>"+ "<b>"+responceArray[i]+"</b>" +"<br/>"
          }
        }
        let updatedNewResponse=newResponse.split("*").join("<br/>")
        
        

    //.................................................................................
    //setAlltabs with update with proper answer..
    const newUpdatedChats=[...updatedChats] 
    // newUpdatedChats[newUpdatedChats.length-1].answer=result //result newArray
    newUpdatedChats[newUpdatedChats.length-1].answer=updatedNewResponse //newResponse
    const title=updatedChats[0].question /// many time render
    updateAllTabs(newUpdatedChats,title)
    
  }
  const Onsubmit = (question) => {
    //setAllTabs will update with answer...
    const updatedChats=[...chats,{question,answer:"...loding"}]    
    updateAllTabs(updatedChats)
    getData(question,updatedChats);
    
  };

  
  

  return (
    <div className="bg-gray-950 w-full text-yellow-50 px-3 h-screen overflow-hidden ">
      <Navbar />
      {chats.length==0 ?  (
        <ViewOutputSection />
      ) : (
        <Output
          chats={chats}
         
        />
      )}

      <Input onsubmit={Onsubmit}  />
    </div>
  );
}

export default Content;

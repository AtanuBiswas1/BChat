import Dashbord from "./components/Dashbord";
import Content from "./components/Content";
import { useState, useEffect, useRef } from "react";
import chatTab from "./constand/index";

function App() {
  const [allTabs, setAllTabs] = useState([chatTab]);
  const [currentChatIndex, setCurrentChatIndex] = useState(0);
  // const allTabsRef=useRef()
  // allTabsRef.current=allTabs
  //console.log(allTabsRef.current);
  //console.log(allTabs);
  //console.log(chatTab);

  function updateAllTabs(chat, title) {
    const newAllTabs = [...allTabs];
    newAllTabs[currentChatIndex].chats = chat;
    newAllTabs[currentChatIndex].title = title;
    setAllTabs(newAllTabs);
  }

  function clickNewChat() {
    // const newChat=[]
    setAllTabs([chatTab, ...allTabs]);
  }

  useEffect(() => {
    const savedTabs = localStorage.getItem("allTabs");
    if (savedTabs && savedTabs.length > 0) {
      setAllTabs(JSON.parse(savedTabs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("allTabs", JSON.stringify(allTabs));
  }, [allTabs]);

  return (
    <div className="flex  overflow-y-auto ">
      <Dashbord
        allTabs={allTabs}
        clickNewChat={clickNewChat}
        setCurrentChatIndex={setCurrentChatIndex}
      />
      <Content
        updateAllTabs={updateAllTabs}
        chats={allTabs[currentChatIndex].chats}
      />
    </div>
  );
}

export default App;

//problem: all new chat array input in previouschat depend on  submit input

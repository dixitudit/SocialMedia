import React, { useState } from "react";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import RegUserPostCard from "./RegUserPostCard";
const RegUserPostPart = () => {
  const [activeTab, setActiveTab] = useState("Post");
  const tabs = [
    {
      tab: "Post",
      icon: <AiOutlineTable />,
      activeTab: "",
    },
    {
      tab: "Reels",
      icon: <RiVideoAddLine />,
      activeTab: "",
    },
    {
      tab: "Saved",
      icon: <BiBookmark />,
      activeTab: "",
    },
    {
      tab: "Tagged",
      icon: <AiOutlineUser />,
      activeTab: "",
    },
  ];
  return (
    <div>
      <div className="flex space-x-14 border-t relative">
        {tabs.map((item) => (
          <div
            onClick={() => setActiveTab(item.tab)}
            className={` ${
              activeTab === item.tab ? "border-t border-black" : "opacity-70"
            } flex items-center gap-1 cursor-pointer py-2 text-sm`}
          >
            <p>{item.icon}</p>
            <p>{item.tab}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-wrap">
          {[1,1,1,1,1,1].map((item)=><RegUserPostCard/>)}
        </div>
      </div>

    </div>
  );
};

export default RegUserPostPart;

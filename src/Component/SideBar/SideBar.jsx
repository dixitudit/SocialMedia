import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from "./SideBarConfig";
import { useNavigate } from "react-router-dom";
const SideBar = () => {

  const [activeTab, setActiveTab] = useState('');
  const navigate = useNavigate();
  const handleTabClick = (title) => {
    setActiveTab(title);
    if(title==="Profile"){
      navigate("/username")
    }
    else if(title==="Home"){
      navigate("/");
    }
  }

  return (
    <div className="flex flex-col text-center items-center sticky top-0 h-screen justify-between">
      <div>
        <div>
          <img
            className="w-35 py-3 mt-3 "
            src="https://i.imgur.com/zqpwkLQ.png"
            alt="logo"
          />
        </div>
        <div className="m-3">
          {menu.map((item) => (
            <div onClick={()=>handleTabClick(item.title)} className="flex items-center mb-5 cursor-pointer text-lg">
              <p className="px-3">{activeTab===item.title?item.activeIcon:item.icon}</p>
              <p className={`${activeTab===item.title? "font-bold":"font-semibold"} `}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center cursor-pointer p-3">
        <IoReorderThreeOutline />
        <p className="p-3">More</p>
      </div>
    </div>
  );
};

export default SideBar;

import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from "./SideBarConfig";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import CreatePostModal from "../Post/CreatePostModal";
import Search from "../SearchComponents/Search";
const SideBar = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState('Home');
  const [searchVisible, setSearchVisible] = useState(false);
  const navigate = useNavigate();
  const handleTabClick = (title) => {
    setActiveTab(title);
    if(title==="Profile"){
      navigate("/username");
      setSearchVisible(false);
    }
    else if(title==="Search"){
      setSearchVisible(!searchVisible);
    }
    else if(title==="Home"){
      navigate("/");
      setSearchVisible(false);
    }
    else if(title==="Create"){
      onOpen();
      setSearchVisible(false);
    }
    else if(title==="Notification"){
      setSearchVisible(false);
    }else if(title==="Message"){
      setSearchVisible(false);
    }else if(title==="Reels"){
      setSearchVisible(false);
    }else if(title==="Explore"){
      setSearchVisible(false);
    }
    
  }

  return (<div className="flex">
    <div className={`flex flex-col text-center items-center sticky top-0 h-screen justify-between ${searchVisible?"px-0":"px-10"}`}>
      <div>
        {!searchVisible && <div>
          <img
            className="w-35 py-3 mt-3 "
            src="https://i.imgur.com/zqpwkLQ.png"
            alt="logo"
          />
        </div>}
        <div className="my-3">
          {menu.map((item) => (
            <div onClick={()=>handleTabClick(item.title)} className="flex items-center mb-5 cursor-pointer text-lg">
              <p className="px-3">{activeTab===item.title?item.activeIcon:item.icon}</p>
              {!searchVisible &&<p className={`${activeTab===item.title? "font-bold":"font-semibold"} `}>{item.title}</p>}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center cursor-pointer p-3">
        <IoReorderThreeOutline />
        {!searchVisible &&<p className="p-3">More</p>}
      </div>
      
      
    </div>
    <CreatePostModal 
        onClose={onClose}
        isOpen={isOpen}/>
    {searchVisible && <Search/>}
    </div>
  );
};

export default SideBar;

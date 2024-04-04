import React from "react";
import SideBar from "../../Component/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import Profile from "../Profile/Profile";
import Story from "../Story/Story";

function Router() {
  return (
    <div>
      <div className="flex">
        <div className=" border border-l-slate-500 w-[20%]">
          <SideBar />
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/username" element={<Profile />}></Route>
            <Route path="/story" element={<Story />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Router;

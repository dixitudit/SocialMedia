import React from "react";
import { TbCircleDashed } from "react-icons/tb";
const ProfileUserDetails = () => {
  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w-[8rem] flex-shrink-0">
          <img
            className="w-32 h-32 rounded-full"
            src="https://cdn.pixabay.com/photo/2023/12/19/15/51/flowers-8457960_1280.jpg"
            alt="img"
          />
        </div>
        <div className="pl-10 space-y-2">
          <div className="flex items-center space-x-10">
            <p>username</p>
            <button className="bg-gray-400 py-1 px-3 rounded">Edit Profile</button>
            <TbCircleDashed />
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>Posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>Follower</span>
            </div>
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>Following</span>
            </div>
          </div>
          <div className="w-full">
            <p className="font-semibold">Full Name</p>
            <p className="font-thin text-sm">
              Dolor exercitation non cillum eu commodo in elit. Consequat sunt
              exercitation reprehenderit commodo consequat reprehenderit aliqua
              proident qui. Veniam est consectetur officia eu aliquip proident.
              Consectetur culpa officia exercitation fugiat culpa aliquip amet
              deserunt duis. Mollit Lorem eiusmod pariatur minim in ipsum
              ullamco aute anim commodo nostrud nostrud sit ullamco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetails;

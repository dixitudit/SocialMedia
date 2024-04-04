import React from "react";

const SuggestionCard = () => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <img
          src="https://cdn.pixabay.com/photo/2023/12/19/15/51/flowers-8457960_1280.jpg"
          alt="an"
          className="w-9 h-9 rounded-full"
        />
        <div className="ml-2">
          <p className="text-sm font-semibold ">username</p>
          <p className="text-sm font-semibold opacity-70 ">Follows You</p>
        </div>
      </div>
      <p className="text-blue-700 text-sm font-semibold cursor-pointer">
        Follow
      </p>
    </div>
  );
};

export default SuggestionCard;

import React from "react";
import SuggestionCard from "./SuggestionCard";

const HomeRight = () => {
  return (
    <div>
      <div>
        <div>
          <div className="flex items-center py-2 justify-between">
            <div className="flex items-center">
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2023/12/19/15/51/flowers-8457960_1280.jpg"
                  className="w-12 h-12 rounded-full"
                  alt="any"
                />
              </div>
              <div className="ml-3">
                <p>FullName</p>
                <p className="opacity-70">username</p>
              </div>
            </div>
            <div>
              <p className="text-blue-700 text-sm font-semibold cursor-pointer">
                Switch
              </p>
            </div>
          </div>
          <hr/>
          <div className="flex justify-between py-2">
          <p className="opacity-70 text-sm font-semibold">
        Suggestions for you
      </p>
      <p className="text-sm font-semibold cursor-pointer">
        See All
      </p>
      </div>
          <div className="">
            {[1, 1, 1, 1].map(() => (
              <SuggestionCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRight;

import React from "react";
import "./Search.css";
import SearchUserCard from "./SearchUserCard";
const Search = () => {
  return (
    <div className="search-container">
      <div>
        <h1 className="pl-[10px] pb-[10px]">Search</h1>
        <input type="text" placeholder="Search..." className="searchInput"/>
      </div>
      <hr/>
      <div className="m-3">
        {[1,1,1,1,1].map((i)=><SearchUserCard/>)}
      </div>

    </div>
  );
};

export default Search;

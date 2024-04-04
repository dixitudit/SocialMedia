import React from 'react'
import { useNavigate } from "react-router-dom";

const StoryCircle = () => {
  const navigate=useNavigate();
  const handleClick = ()=>{
    navigate("/story")
  }
  return (
    <div onClick={handleClick} className='cursor-pointer flex flex-col item-center'>
        <img className='h-16 w-16 rounded-full' src="https://cdn.pixabay.com/photo/2023/12/19/15/51/flowers-8457960_1280.jpg" alt='img'/>
        <p>UserName</p>
    </div>
  )
}

export default StoryCircle
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import "./RegUserPostCard.css"

const RegUserPostCard = () => {
  return (
    <div>
        <div className='post w-60 h-60 p-1'>
            <img className='cursor-pointer' src='https://cdn.pixabay.com/photo/2023/12/19/15/51/flowers-8457960_1280.jpg' alt='post'/>
            <div className='overlay'>
                <div className='flex overlay-text items-center justify-between'>
                    <div className='flex items-center'>
                        <AiFillHeart/> <span>10</span>
                    </div>
                    <div className='flex items-center'>
                        <FaComment/> <span>2</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default RegUserPostCard
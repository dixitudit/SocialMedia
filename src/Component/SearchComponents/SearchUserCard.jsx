import React from 'react'

const SearchUserCard = () => {
  return (
    <div>
        <div className='flex items-center py-2 cursor-pointer'> 
            <img src='https://cdn.pixabay.com/photo/2023/12/19/15/51/flowers-8457960_1280.jpg' alt='any' className='w-10 h-10 rounded-full'/>
            <div className='ml-3'>
                <p>Full Name</p>
                <p className='opacity-70'>username</p>
            </div>
        </div>
    </div>
  )
}

export default SearchUserCard
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CommentCard = () => {
  const [commentLike, setCommentLike] = useState(false);
  const handleCommentLike = () => {
    setCommentLike(!commentLike);
  };

  return (
    <div>
      <div className="flex justify-between items-center py-3">
        <div className="flex items-center">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2023/12/19/15/51/flowers-8457960_1280.jpg"
              className="rounded-full h-12 w-12 p-2"
              alt="an"
            />
          </div>
          <div>
            <p>
              <span className="font-semibold">username</span>
              <span className="ml-2">content of comment</span>
            </p>
            <div className="text-sm opacity-50 space-x-3">
              <span>1d ago</span>
              <span>23 likes</span>
            </div>
          </div>
        </div>
        {commentLike ? (
          <AiFillHeart
            onClick={handleCommentLike}
            className="fill-red-700 cursor-pointer text-xs"
          />
        ) : (
          <AiOutlineHeart
            onClick={handleCommentLike}
            className="hover:opacity-55 cursor-pointer text-xs"
          />
        )}
      </div>

    </div>
  );
};

export default CommentCard;

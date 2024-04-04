import React from "react";
import { useState } from "react";
import {
  BsThreeDots,
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
} from "react-icons/bs";
import "./PostCard.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import CommentModal from "../Comment/CommentModal";
import { useDisclosure } from "@chakra-ui/react";

const PostCard = () => {
  const [dropown, setDropdown] = useState(false);
  const [postLiked, setPostLiked] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [postSaved, setPostSave] = useState(false);
  const handlePostSave = () => {
    setPostSave(!postSaved);
  };
  const handlePostLike = () => {
    setPostLiked(!postLiked);
  };
  const handleClick = () => {
    setDropdown(!dropown);
  };
  const handleOpenCommentModal = () => {
    onOpen();
  };
  return (
    <div>
      <div className="border rounded-md w-full ">
        <div className="flex justify-between items-center w-full py-4 px-5 ">
          <div className="flex item-center">
            <img
              className="h-12 w-12 rounded-full "
              src="https://cdn.pixabay.com/photo/2023/12/19/15/51/flowers-8457960_1280.jpg"
              alt="any"
            />
            <div className="pl-2">
              <p className="font-semibold text-sm">username</p>
              <p className="font-thin text-sm">location</p>
            </div>
          </div>

          <div className="dropdown ">
            <BsThreeDots className="dots" onClick={handleClick} />
            <div className="dropdown-content">
              {dropown && (
                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            className="w-full"
            src="https://cdn.pixabay.com/photo/2023/12/19/15/51/flowers-8457960_1280.jpg"
            alt="any"
          />
        </div>
        <div className="flex justify-between px-5 py-4 items-center w-full ">
          <div className="flex items-center space-x-2">
            {postLiked ? (
              <AiFillHeart
                className="text-2xl cursor-pointer fill-red-700"
                onClick={handlePostLike}
              />
            ) : (
              <AiOutlineHeart
                className="text-2xl hover:opacity-50 cursor-pointer"
                onClick={handlePostLike}
              />
            )}

            <FaRegComment
              onClick={handleOpenCommentModal}
              className="text-xl hover:opacity-50 cursor-pointer"
            />
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
          </div>
          <div>
            {postSaved ? (
              <BsBookmarkFill
                onClick={handlePostSave}
                className="text-xl cursor-pointer"
              />
            ) : (
              <BsBookmark
                onClick={handlePostSave}
                className="text-xl hover:opacity-50 cursor-pointer"
              />
            )}
          </div>
        </div>
        <div className="w-full py-2 px-5">
          <p>10 likes</p>
          <p className="opacity-50 cursor-pointer">view all 10 comments</p>
        </div>
        <div className="border border-t w-full">
          <div className="flex items-center w-full space-x-1 px-5">
            <BsEmojiSmile />
            <input
              className="commentInput "
              type="text"
              placeholder="Add a comment..."
            />
          </div>
        </div>
      </div>
      <CommentModal
        onClose={onClose}
        isOpen={isOpen}
        postLiked={postLiked}
        postSaved={postSaved}
        handlePostLike={handlePostLike}
        handlePostSave={handlePostSave}
      />
    </div>
  );
};

export default PostCard;

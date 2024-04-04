import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import CommentCard from "./CommentCard";
import "./CommentModal.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CommentModal = ({
  onClose,
  isOpen,
  postLiked,
  postSaved,
  handlePostLike,
  handlePostSave,
}) => {
  return (
    <div>
      <Modal size={"4xl"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="h-[75vh] flex ">
              <div className="w-[45%] flex flex-col justify-center">
                <img
                  className="max-h-full w-full"
                  src="https://cdn.pixabay.com/photo/2023/12/19/15/51/flowers-8457960_1280.jpg"
                  alt="any"
                />
              </div>
              <div className="px-5 w-[55%] relative">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      className="w-12 h-12 rounded-full p-2"
                      src="https://cdn.pixabay.com/photo/2023/12/19/15/51/flowers-8457960_1280.jpg"
                      alt="anu"
                    />
                    <p>UserName</p>
                  </div>
                  <div className="p-2 cursor-pointer">
                    <BsThreeDots />
                  </div>
                </div>
                <hr />

                <div className="comment">
                  {[1, 1, 1, 1, 1, 1].map((i) => (
                    <CommentCard />
                  ))}
                </div>
                <div className="absolute bottom-0 w-full px-5">
                  <div className="flex justify-between items-center w-full ">
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

                      <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
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
                  <div className="w-full">
                    <p>10 likes</p>

                    <p className="opacity-50 text-xs">1d ago</p>
                  </div>
                  <div className=" w-full">
                    <div className="flex items-center w-full space-x-1 ">
                      <BsEmojiSmile />
                      <input
                        className="commentInput "
                        type="text"
                        placeholder="Add a comment..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentModal;

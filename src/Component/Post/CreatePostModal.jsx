import React, { useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import { GrEmoji } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import "./CreatePostModal.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
} from "@chakra-ui/react";

const CreatePostModal = ({ onClose, isOpen }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [file, setFile] = useState();
  const [caption, setCaption] = useState("");
  const handleDragOver = (ev) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy";
    setIsDragOver(true);
  };

  const handleOnChange = (ev) => {
    const file = ev.target.files[0];
    if (
      file &&
      (file.type.startsWith("image/") || file.type.startsWith("video/"))
    ) {
      setFile(file);
    } else {
      setFile(null);
      alert("Please Select Image or Video File");
    }
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };
  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (ev) => {
    ev.preventDefault();
    const droppedFile = ev.dataTransfer.files[0];
    if (
      droppedFile.type.startsWith("image/") ||
      droppedFile.type.startsWith("video/")
    ) {
      setFile(droppedFile);
    } else {
      setFile(null);
      alert("Please Select Image or Video File");
    }
  };

  return (
    <div>
      <Modal size={"4xl"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className="flex justify-between py-1 px-10 items-center">
            <p className="font-semibold">Create New Post</p>
            <Button
              variant={"ghost"}
              size="sm"
              className=""
              colorScheme={"blue"}
            >
              Share
            </Button>
          </div>
          <hr />
          <ModalBody>
            <div className="h-[70vh] flex justify-between">
              {!file && (
                <div className="w-[50%]">
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className="drag-drop h-full"
                  >
                    <div>
                      <FaPhotoVideo className="text-3xl" />
                      <p>Drag Photos or Videos here.</p>
                    </div>
                    <input
                      type="file"
                      id="upload"
                      accept="image/*, video/*"
                      onChange={handleOnChange}
                    />
                    <label htmlFor="upload" className="custom-file-upload">
                      Select From Computer
                    </label>
                  </div>
                </div>
              )}
              {file && (
                <img
                  className="w-[50%] h-full"
                  src={URL.createObjectURL(file)}
                  alt="any"
                />
              )}
              <div className="w-[1px] border h-full"></div>
              <div className="w-[50%]">
                <div className="flex items-center px-2">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://cdn.pixabay.com/photo/2023/12/19/15/51/flowers-8457960_1280.jpg"
                    alt="alt"
                  />
                  <p className="font-semibold ml-2">UserName</p>
                </div>
                <div className="px-2">
                  <textarea
                    rows={8}
                    className="captionInput"
                    name="caption"
                    placeholder="write a caption..."
                    onChange={handleCaptionChange}
                  ></textarea>
                </div>
                <div className="px-2 flex justify-between">
                  <GrEmoji />
                  <p className="opacity-70">{caption.length} /2,200</p>
                </div>
                <hr />
                <div className="p-2 flex justify-between items-center">
                  <input
                    type="text"
                    placeholder="location"
                    name="location"
                    className="locationInput"
                  />
                  <GoLocation />
                </div>
                <hr />
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatePostModal;

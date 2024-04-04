import React from "react";
import StoryViewer from "../../Component/StoryComponents/StoryViewer";

const Story = () => {
  const story = [
    {
      image:
        "https://cdn.pixabay.com/photo/2023/12/19/15/51/flowers-8457960_1280.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/08/25/07/37/shoes-8212405_640.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2024/02/16/14/20/snail-8577681_640.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/03/17/11/39/mountain-7858482_1280.jpg",
    },
  ];
  return (
    <div>
      <StoryViewer stories={story} />
    </div>
  );
};

export default Story;

import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ index, activeIndex, duration }) => {
  const [progress, setProgress] = useState(0);
  const isActive = index === activeIndex;
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) return progress + 1;
        clearInterval(interval);
        return prevProgress;
      });
    }, duration / 100);
    return () => {
      clearInterval(interval);
    };
  }, [duration, activeIndex, progress]);

  useEffect(() => {
    setProgress(0);
  }, [activeIndex]);

  return (
    <>
      <div className={`progress-bar-container ${isActive ? "active" : ""}`}>
        <div
          className={`${isActive ? "progress-bar" : ""}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;

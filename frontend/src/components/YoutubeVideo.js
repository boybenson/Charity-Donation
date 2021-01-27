import React from "react";
import "../styles/YoutubeVideo.css";

const YoutubeVideo = () => {
  return (
    <div className="main__container">
      <div className="youtube__container">
        <iframe
          width="856"
          height="300"
          title="Youtube video"
          src="https://www.youtube.com/embed/Y8NAffsYvhc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeVideo;

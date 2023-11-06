import React from 'react';

const Videosec = () => {
  return (
    <div>
      <div className="video-container">
        <div className="video-wrap">
          <video className="in-video" id="scroll-video" playsInline loop>      
            <source src="https://www.keralatourism.org/images/kt/videos/Loop_video_Rain-MP41.mp4" type="video/mp4" />      
          </video>
        </div>
        <div className="video-overlay">
          <a href="https://www.keralatourism.org/video-gallery/">
            <span className="text">EXPLORE OUR VIDEOS</span>
          </a>
          <span className="sub-text">
            Take a peek at what God’s Own Country has to offer you. Be awed.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Videosec;

import React from 'react';

const OptimizedVideo = ({ srcMp4, srcWebm, poster, alt, width, height }) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className='w-[50%] h-auto'
      poster={poster} // Placeholder image for the video
    >
      <source src={srcMp4} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
};

export default OptimizedVideo;

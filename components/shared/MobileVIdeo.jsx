import { useMemo, useRef } from 'react';

const MobileVIdeo = ({ hoverVideoUrl }) => {
  const videoRef = useRef(null);
  const videoSrc = useMemo(
    () => hoverVideoUrl || '/assets/video/cstomizable-crad-tapp.mp4',
    [hoverVideoUrl],
  );

  const handleLoadedData = () => {
    // Actions to take once video data is loaded
  };

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      muted
      className='mx-auto'
      width={200}
      height={50}
      preload='metadata'
      loading='lazy'
      playsInline
      onLoadedData={handleLoadedData}
    />
  );
};

export default MobileVIdeo;

import {useEffect, useRef} from 'react';


interface SimpleVideoPlayerProps {
  videoUrl: string;
  posterUrl: string;
  autoPlay?: boolean;
  muted?: boolean;
}


export const SimpleVideoPlayer = ({videoUrl,posterUrl, autoPlay = false, muted = false}: SimpleVideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (autoPlay) {
      videoRef.current?.play();
    } else {
      videoRef.current?.load();
    }
  }, [autoPlay]);
  return (
    <video
      className="player__video"
      poster={posterUrl}
      src={videoUrl}
      ref={videoRef}
      muted={muted}
      autoPlay={autoPlay}
    />
  );
};

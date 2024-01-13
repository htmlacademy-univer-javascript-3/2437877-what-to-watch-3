import {useRef, useState} from 'react';
import {Link} from 'react-router-dom';


interface VideoPlayerProps {
  videoId: string;
  videoUrl: string;
  posterUrl: string;
  autoPlay?: boolean;
  muted?: boolean;
}


export const VideoPlayer = ({videoId, videoUrl, posterUrl, autoPlay = false, muted = false}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    const duration = videoRef.current?.duration;
    const currentTime = videoRef.current?.currentTime;
    if (duration && currentTime) {
      setProgress((currentTime / duration) * 100);
    }
  };
  return (
    <div className="player">
      <video
        className="player__video"
        poster={posterUrl}
        src={videoUrl}
        ref={videoRef}
        muted={muted}
        onTimeUpdate={handleProgress}
        autoPlay={autoPlay}
      />
      <Link to={`/films/${videoId}/overview`}>
        <button type="button" className="player__exit">Exit</button>
      </Link>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={100}/>
            <div className="player__toggler" style={{left: `${progress}%`}}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{videoRef.current?.duration}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={togglePlay}>
            {isPlaying ?
              <svg viewBox="0 0 14 21" width={14} height={21}>
                <use xlinkHref="#pause"/>
                <span>Pause</span>
              </svg>
              :
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s"/>
                <span>Play</span>
              </svg>}
          </button>
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>

  );
};

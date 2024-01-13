import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '@models/film.ts';
import {GetFilmPageAddress} from '@services/get-filmpage-address.ts';
import {SimpleVideoPlayer} from '@components/video-player/simple-video-player.tsx';

export const FilmCard = ({id, name, previewImage, previewVideoLink}: Film) => {
  const oneSecond = 1000;
  const [videoShouldPlay, setVideoShouldPlay] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    let shouldUpdate = true;

    if (videoShouldPlay) {
      setTimeout(() => shouldUpdate && setIsVideoPlaying(true), oneSecond);
    }

    return () => {
      shouldUpdate = false;
    };
  }, [videoShouldPlay]);

  const handleMouseEnter = () => {
    setVideoShouldPlay(true);
  };
  const handleMouseLeave = () => {
    setVideoShouldPlay(false);
    setIsVideoPlaying(false);
  };
  return (
    <Link to={GetFilmPageAddress(id)} className="small-film-card catalog__films-card" onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <SimpleVideoPlayer videoUrl={previewVideoLink} posterUrl={previewImage} muted autoPlay={isVideoPlaying}/>
      </div>
      <h3 className="small-film-card__title">
        <div className="small-film-card__link">{name}</div>
      </h3>
    </Link>
  );
};

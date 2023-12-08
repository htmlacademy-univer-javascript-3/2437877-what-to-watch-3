import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {VideoPlayer} from '@components/video-player/video-player.tsx';
import {FilmInfo} from '@models/film-info.ts';
import {getFilmInfo} from '@services/api-methods.ts';
import {NotFound} from '@pages/not-found.tsx';


export const Player = () => {
  const {id} = useParams();
  const [filmInfo, setFilmInfo] = useState<FilmInfo>();
  useEffect(()=>{
    if(id){
      getFilmInfo(id).then((x)=> setFilmInfo(x));
    }
  }
  );

  if (!id || !filmInfo) {
    return (<NotFound/>);
  }

  return (
    <VideoPlayer videoUrl={filmInfo.videoLink} posterUrl={filmInfo.posterImage}/>
  );
};


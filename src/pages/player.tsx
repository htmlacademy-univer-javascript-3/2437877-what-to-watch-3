import {VideoPlayer} from '@components/video-player/video-player.tsx';
import {useParams} from 'react-router-dom';
import {NotFound} from '@pages/not-found.tsx';
import {GetVideoPosterUrlById, GetVideoUrlById } from '@services/video-helpers';

export const Player = () => {
  const {id} = useParams();

  if(!id){
    return(<NotFound/>);
  }

  return (
    <VideoPlayer videoUrl={GetVideoUrlById(id)} posterUrl={GetVideoPosterUrlById(id)}/>
  );
};


import {Action, VideoPlayer} from '@components/video-player/video-player.tsx';
import {useParams} from 'react-router-dom';
import {filmUrl, promoFilm} from '@mocks/storeOfShit.ts';
import {NotFound} from '@pages/not-found.tsx';

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetVideoUrlById = (id: string)=> filmUrl;
// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetVideoPosterUrlById = (id: string)=> promoFilm.posterUrl;

export const Player = () => {
  const {id} = useParams();

  if(!id){
    return(<NotFound/>);
  }

  return (
    <VideoPlayer action={Action.Play} videoUrl={GetVideoUrlById(id)} posterUrl={GetVideoPosterUrlById(id)}/>
  );
};


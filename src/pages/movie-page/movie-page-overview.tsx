import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {FilmOverview} from '@components/movie-page/film-overview.tsx';
import {MoviePageBase} from './movie-page-base.tsx';
import {NotFound} from '@pages/not-found.tsx';
import {FilmInfo} from '@models/film-info.ts';
import {getFilmInfo} from '@services/api-methods.ts';

export const MoviePageOverview = () => {
  const {id} = useParams();
  const [filmInfo, setFilmInfo] = useState<FilmInfo>();

  useEffect(()=>{
    if(id){
      getFilmInfo(id).then((x)=> setFilmInfo(x));
    }
  }, [id]);

  if (!id || !filmInfo) {
    return (<NotFound/>);
  }


  return (
    <MoviePageBase>
      <FilmOverview filmInfo={filmInfo}/>
    </MoviePageBase>
  );
};

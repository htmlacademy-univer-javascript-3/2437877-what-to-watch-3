import {MoviePageBase} from './MoviePageBase.tsx';
import {FilmDetails} from '../../components/MoviePage/FilmDetails.tsx';

export const MoviePageDetails = () => (
  <MoviePageBase content={<FilmDetails/>} activeTab='Details'/>
);

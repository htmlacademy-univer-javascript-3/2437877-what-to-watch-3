import {MoviePageBase} from './MoviePageBase.tsx';
import {FilmDetails} from '../../components/MoviePage/FilmDetails.tsx';
import {Action} from '../../Elements/MyList.tsx';

export const MoviePageDetails = () => (
  <MoviePageBase content={<FilmDetails/>} activeTab='Details' action={Action.Add}/>
);

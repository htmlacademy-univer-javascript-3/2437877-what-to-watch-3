import {MoviePageBase} from './MoviePageBase.tsx';
import {FilmDescription} from '../../components/MoviePage/FilmDescription.tsx';
import {Action} from '../../Elements/MyList.tsx';

export const MoviePageDescription = () => (
  <MoviePageBase content={<FilmDescription/>} activeTab='Overview' action={Action.Add}/>
);

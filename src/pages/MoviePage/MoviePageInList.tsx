import {MoviePageBase} from './MoviePageBase.tsx';
import {Action} from '../../Elements/MyList.tsx';
import {FilmReviews} from '../../components/MoviePage/FilmReviews.tsx';

export const MoviePageInList = () => (
  <MoviePageBase content={<FilmReviews/>} activeTab='Reviews' action={Action.InList}/>
);

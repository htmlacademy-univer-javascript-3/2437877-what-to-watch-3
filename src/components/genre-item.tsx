import classNames from 'classnames';
import {GenreType} from '@models/genre.ts';
import {setActiveGenre} from '@store/action.ts';
import {useAppDispatch, useAppSelector} from '@store/hooks.ts';

interface GenreItemProps{
  genre: GenreType;
}


export const GenreItem = ({genre}: GenreItemProps) => {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((x)=>x.genre);
  return (
    <li className="catalog__genres-item" onClick={()=>dispatch(setActiveGenre(genre))}>
      <div className={classNames('catalog__genres-link', {'catalog__genres-item--active': activeGenre === genre})}>
        {genre}
      </div >
    </li>
  );
};

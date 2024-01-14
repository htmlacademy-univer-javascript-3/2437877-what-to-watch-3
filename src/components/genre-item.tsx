import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '@store/hooks.ts';
import {setActiveGenre} from '@store/main-reducer.ts';

interface GenreItemProps{
  genre: string;
}


export const GenreItem = ({genre}: GenreItemProps) => {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((x)=>x.MAIN.genre);
  return (
    <li className="catalog__genres-item" onClick={()=>dispatch(setActiveGenre(genre))}>
      <div className={classNames('catalog__genres-link', {'catalog__genres-item--active': activeGenre === genre})}>
        {genre}
      </div >
    </li>
  );
};

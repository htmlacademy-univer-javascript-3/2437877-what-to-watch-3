import {useAppSelector} from '@store/hooks.ts';

interface MyListProps {
  isFavorite: boolean;
}
export const MyList = ({isFavorite} : MyListProps) => {
  const myFilms = useAppSelector((x) => x.MAIN.myFilms);

  return(
    <button className="btn btn--list film-card__button" type="button">
      {isFavorite ?
        <svg viewBox="0 0 18 14" width={18} height={14}>
          <use xlinkHref="#in-list"/>
        </svg>
        :
        <svg viewBox="0 0 19 20" width={19} height={20}>
          <use xlinkHref="#add"/>
        </svg>}
      <span>My list</span>
      <span className="film-card__count">{myFilms.length}</span>
    </button>
  );
};

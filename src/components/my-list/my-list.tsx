import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '@store/hooks.ts';
import {AuthStatus} from '@models/auth-status.ts';
import {getMyFilmsAction, sendFavoriteFilmStatusAction} from '@services/api-methods.ts';
import {NotFound} from '@pages/not-found.tsx';

interface MyListProps {
  isFavorite: boolean;
}
export const MyList = ({isFavorite} : MyListProps) => {
  const {id} = useParams();
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((x)=>x.User.authorizationStatus);
  const myFilmsCount = useAppSelector((x) => x.MAIN.myFilms).length;

  useEffect(() => {
    dispatch(getMyFilmsAction());
  } , [dispatch, isFavoriteState, myFilmsCount]);

  if (!id) {
    return (<NotFound/>);
  }

  const addToFavourite = () => {
    if (authStatus === AuthStatus.Unauthorized) {
      navigate('login');
    }
    dispatch(sendFavoriteFilmStatusAction({filmId: id, status: !isFavoriteState}));
    setIsFavoriteState(!isFavoriteState);
  };

  return(
    <button className="btn btn--list film-card__button" type="button" onClick={addToFavourite}>
      {isFavoriteState ?
        <svg viewBox="0 0 18 14" width={18} height={14}>
          <use xlinkHref="#in-list"/>
        </svg>
        :
        <svg viewBox="0 0 19 20" width={19} height={20}>
          <use xlinkHref="#add"/>
        </svg>}
      <span>My list</span>
      <span className="film-card__count">{myFilmsCount}</span>
    </button>
  );
};

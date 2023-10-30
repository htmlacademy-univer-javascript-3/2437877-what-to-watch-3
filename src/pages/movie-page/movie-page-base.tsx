import {FilmNav} from '@components/film/film-nav.tsx';
import {FilmInfo} from '@components/film/film-info.tsx';
import {MyList} from '@components/film/my-list.tsx';
import {AddReview} from '@components/add-review/add-review.tsx';
import {Play} from '@components/film/play.tsx';
import {FilmPoster} from '@components/film/film-poster.tsx';
import {ReactElement} from 'react';
import {films} from '@mocks/films.ts';
import {FilmList} from '@components/film/film-list.tsx';
import {HeaderWithBackground} from '@components/common/header-with-background.tsx';
import {GetFilmPlayerPageAddress} from '@services/get-filmpage-address.ts';
import {useParams} from 'react-router-dom';
import {NotFound} from '@pages/not-found.tsx';
import {IsFilmFavourite} from '@services/is-film-favourite.tsx';
import {GetFilmInfoById} from '@services/get-film-info.ts';

interface MoviePageBase {
  content: ReactElement;
}

export function MoviePageBase({content}: MoviePageBase) {
  const {id} = useParams();

  if (!id) {
    return (<NotFound/>);
  }
  const filmInfo = GetFilmInfoById(id);
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <HeaderWithBackground filmName={filmInfo.name} backgroundUrl={filmInfo.posterUrl}/>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <FilmInfo filmName={filmInfo.name} genre="Drama" year={2014}/>
              <div className="film-card__buttons">
                <Play filmUrl={GetFilmPlayerPageAddress(id)}/>
                <MyList isFavorite={IsFilmFavourite(id)}/>
                <AddReview/>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmPoster filmName={filmInfo.name} imgUrl={filmInfo.posterUrl}/>
            <div className="film-card__desc">
              <FilmNav/>
              {content}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList myFilms={films}/>
        </section>
      </div>
    </>
  );
}

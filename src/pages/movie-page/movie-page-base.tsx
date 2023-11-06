import {FilmTabs} from '@components/film/film-tabs.tsx';
import {FilmInfo} from '@components/film/film-info.tsx';
import {MyList} from '@components/film/my-list.tsx';
import {AddReview} from '@components/add-review/add-review.tsx';
import {Play} from '@components/film/play.tsx';
import {FilmPoster} from '@components/film/film-poster.tsx';
import {ReactNode} from 'react';
import {HeaderWithBackground} from '@components/common/header-with-background.tsx';
import {GetFilmPlayerPageAddress} from '@services/get-filmpage-address.ts';
import {useParams} from 'react-router-dom';
import {NotFound} from '@pages/not-found.tsx';
import {IsFilmFavourite} from '@services/is-film-favourite.ts';
import {GetFilmInfoById} from '@services/get-film-info.ts';
import {SimilarFilms} from '@components/film/similar-films.tsx';


export function MoviePageBase({children}: { children?: ReactNode | undefined }) {
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
              <FilmInfo filmName={filmInfo.name} genre={filmInfo.genre} year={2014}/>
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
              <FilmTabs/>
              {children}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <SimilarFilms filmGenre={filmInfo.genre} excludeFilmId={filmInfo.id}/>
        </section>
      </div>
    </>
  );
}

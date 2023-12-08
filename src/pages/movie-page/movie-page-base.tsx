import {ReactNode, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {FilmTabs} from '@components/film/film-tabs.tsx';
import {FilmInfo as FilmInfoComponent} from '@components/film/film-info.tsx';
import {MyList} from '@components/film/my-list.tsx';
import {AddReview} from '@components/add-review/add-review.tsx';
import {Play} from '@components/film/play.tsx';
import {FilmPoster} from '@components/film/film-poster.tsx';
import {HeaderWithBackground} from '@components/common/header-with-background.tsx';
import {GetFilmPlayerPageAddress} from '@services/get-filmpage-address.ts';
import {NotFound} from '@pages/not-found.tsx';
import {SimilarFilms} from '@components/film/similar-films.tsx';
import {getFilmInfo} from '@services/api-methods.ts';
import {FilmInfo} from '@models/film-info.ts';
import {useAppSelector} from '@store/hooks.ts';
import {AuthStatus} from '@models/auth-status.ts';


export function MoviePageBase({children}: { children?: ReactNode | undefined }) {
  const {id} = useParams();
  const authStatus = useAppSelector((x)=>x.User.authorizationStatus);
  const [filmInfo, setFilmInfo] = useState<FilmInfo>();
  useEffect(()=>{
    if(id){
      getFilmInfo(id).then((x)=> setFilmInfo(x));
    }
  }, [id]
  );

  if (!id || !filmInfo) {
    return (<NotFound/>);
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <HeaderWithBackground filmName={filmInfo.name} backgroundUrl={filmInfo.backgroundImage}/>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <FilmInfoComponent filmName={filmInfo.name} genre={filmInfo.genre} year={filmInfo.released}/>
              <div className="film-card__buttons">
                <Play filmUrl={GetFilmPlayerPageAddress(id)}/>
                <MyList isFavorite={filmInfo.isFavorite}/>
                {authStatus === AuthStatus.Authorized && <AddReview/>}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmPoster filmName={filmInfo.name} imgUrl={filmInfo.posterImage}/>
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

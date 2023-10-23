import {Header} from '@components/common/header.tsx';
import {promoFilm} from 'mocks/storeOfShit.ts';
import {FilmCard} from '@components/film/film-card.tsx';
import {FilmNav} from '@components/film/film-nav.tsx';
import {FilmInfo} from '@components/film/film-info.tsx';
import {Action, MyList} from '@components/film/my-list.tsx';
import {AddReview} from '@components/add-review/add-review.tsx';
import {Play} from '@components/video-player/play.tsx';
import {FilmPoster} from '@components/film/film-poster.tsx';
import {ReactElement} from 'react';

interface MoviePageBase {
  content: ReactElement;
  activeTab: string;
  action: Action;
}

export function MoviePageBase({content, activeTab, action}: MoviePageBase) {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <Header filmName={promoFilm.filmName} backgroundUrl={promoFilm.backgroundUrl}/>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <FilmInfo filmName="The Grand Budapest Hotel" genre="Drama" year={2014}/>
              <div className="film-card__buttons">
                <Play/>
                <MyList action={action}/>
                <AddReview/>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmPoster filmName="The Grand Budapest Hotel" imgUrl="img/the-grand-budapest-hotel-poster.jpg"/>
            <div className="film-card__desc">
              <FilmNav tabs={['Overview', 'Details', 'Reviews']} activeTab={activeTab}/>
              {content}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <FilmCard name="Fantastic Beasts: The Crimes of Grindelwald" pageUrl="film-page.html"
              imgUrl="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
            />
            <FilmCard name="Bohemian Rhapsody" pageUrl="film-page.html" imgUrl="img/bohemian-rhapsody.jpg"/>
            <FilmCard name="Macbeth" pageUrl="film-page.html" imgUrl="img/macbeth.jpg"/>
            <FilmCard name="Aviator" pageUrl="film-page.html" imgUrl="img/aviator.jpg"/>
          </div>
        </section>
      </div>
    </>

  );
}

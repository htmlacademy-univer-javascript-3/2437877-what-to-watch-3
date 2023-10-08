import {Header} from '../../components/Header.tsx';
import {promoFilm} from '../../storeOfShit.ts';
import {FilmCard} from '../../components/FilmCard.tsx';
import {FilmNav} from '../../components/FilmNav.tsx';
import {FilmInfo} from '../../components/FilmInfo.tsx';
import {Action, MyList} from '../../Elements/MyList.tsx';
import {AddReview} from '../../Elements/AddReview.tsx';
import {Play} from '../../Elements/Play.tsx';
import {FilmPoster} from '../../Elements/FilmPoster.tsx';
import {ReactElement} from 'react';

export function MoviePageBase({content, activeTab, action} : {content:ReactElement; activeTab:string; action: Action}){
  return(
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <Header filmName={promoFilm.filmName} backgroundUrl={promoFilm.backgroundUrl}/>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <FilmInfo filmName='The Grand Budapest Hotel' genre='Drama' year={2014}/>
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
            <FilmPoster filmName='The Grand Budapest Hotel' imgUrl='img/the-grand-budapest-hotel-poster.jpg'/>
            <div className="film-card__desc">
              <FilmNav tabs={ ['Overview', 'Details', 'Reviews']} activeTab={activeTab}/>
              {content}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <FilmCard name='Fantastic Beasts: The Crimes of Grindelwald' pageUrl='film-page.html' imgUrl='img/fantastic-beasts-the-crimes-of-grindelwald.jpg'/>
            <FilmCard name="Bohemian Rhapsody" pageUrl="film-page.html" imgUrl="img/bohemian-rhapsody.jpg" />
            <FilmCard name="Macbeth" pageUrl="film-page.html" imgUrl="img/macbeth.jpg" />
            <FilmCard name="Aviator" pageUrl="film-page.html" imgUrl="img/aviator.jpg" />
          </div>
        </section>
      </div>
    </>

  );
}

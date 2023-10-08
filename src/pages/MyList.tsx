import {Logo} from '../components/Logo.tsx';
import {UserBlock} from '../components/UserBlock.tsx';
import {FilmCard} from '../components/FilmCard.tsx';

export function MyList(){
  const myFilms = [
    {
      name: 'Fantastic Beasts: The Crimes of Grindelwald',
      pageUrl: 'film-page.html',
      imgUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'
    },
    {
      name: 'Bohemian Rhapsody',
      pageUrl: 'film-page.html',
      imgUrl: 'img/bohemian-rhapsody.jpg'
    },
    {
      name: 'Macbeth',
      pageUrl: 'film-page.html',
      imgUrl: 'img/macbeth.jpg'
    },
    {
      name: 'Aviator',
      pageUrl: 'film-page.html',
      imgUrl: 'img/aviator.jpg'
    },
    {
      name: 'We need to talk about Kevin',
      pageUrl: 'film-page.html',
      imgUrl: 'img/we-need-to-talk-about-kevin.jpg'
    },
    {
      name: 'What We Do in the Shadows',
      pageUrl: 'film-page.html',
      imgUrl: 'img/what-we-do-in-the-shadows.jpg'
    },
    {
      name: 'Revenant',
      pageUrl: 'film-page.html',
      imgUrl: 'img/revenant.jpg'
    },
    {
      name: 'Johnny English',
      pageUrl: 'film-page.html',
      imgUrl: 'img/johnny-english.jpg'
    },
    {
      name: 'Shutter Island',
      pageUrl: 'film-page.html',
      imgUrl: 'img/shutter-island.jpg'
    }
  ];
  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <Logo/>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserBlock avatarUrl='img/avatar.jpg'/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {myFilms.map((film) => (
            <FilmCard
              key={film.name}
              name={film.name}
              pageUrl={film.pageUrl}
              imgUrl={film.imgUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

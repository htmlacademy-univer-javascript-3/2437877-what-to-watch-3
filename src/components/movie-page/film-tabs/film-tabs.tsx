import {LinkWithLiWrapper} from '@components/link-with-li-wrapper/link-with-li-wrapper.tsx';

export const FilmTabs = () => (
  <nav className="film-nav film-card__nav">
    <ul className="film-nav__list">
      <LinkWithLiWrapper text="Overview" link="overview"/>
      <LinkWithLiWrapper text="Details" link="details"/>
      <LinkWithLiWrapper text="Reviews" link="reviews"/>
    </ul>
  </nav>
);


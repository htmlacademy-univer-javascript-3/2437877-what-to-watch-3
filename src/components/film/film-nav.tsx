import classNames from 'classnames';

export const FilmNav = ({tabs, activeTab}: { tabs: string[]; activeTab: string }) => (
  <nav className="film-nav film-card__nav">
    <ul className="film-nav__list">
      {tabs.map((tab) => (
        <li key={tab} className={classNames('film-nav__item', {'film-nav__item--active': activeTab === tab})}>
          <a href="#" className="film-nav__link">
            {tab}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

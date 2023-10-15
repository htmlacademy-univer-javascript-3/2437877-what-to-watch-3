export const FilmNav = ({tabs, activeTab} : {tabs : string[]; activeTab: string}) => (
  <nav className="film-nav film-card__nav">
    <ul className="film-nav__list">
      {tabs.map((tab) => (
        <li key={tab} className={`film-nav__item ${activeTab === tab ? 'film-nav__item--active' : '' }`}>
          <a href="#" className="film-nav__link">
            {tab}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

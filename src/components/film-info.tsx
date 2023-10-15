export const FilmInfo = ({filmName, genre, year}: {filmName: string; genre: string; year: number}) => (
  <>
    <h2 className="film-card__title">{filmName}</h2>
    <p className="film-card__meta">
      <span className="film-card__genre">{genre}</span>
      <span className="film-card__year">{year}</span>
    </p>
  </>
);
